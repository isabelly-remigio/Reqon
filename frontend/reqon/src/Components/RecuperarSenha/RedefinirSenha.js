import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RedefinirSenha = () => {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();
  const token = new URLSearchParams(window.location.search).get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setMensagem("As senhas não coincidem.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/recuperar-senha/redefinir", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, novaSenha: senha }),
      });

      await response.json();
      setMensagem("Senha enviada");

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      setMensagem("Erro ao redefinir senha.");
    }
  };

  return (
    <div className="senha-container">
      <h2>Redefinir Senha</h2>
      <form onSubmit={handleSubmit}>
        <label>Nova Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />

        <label>Confirmar Senha:</label>
        <input type="password" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />

        <button type="submit">Redefinir Senha</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default RedefinirSenha;
