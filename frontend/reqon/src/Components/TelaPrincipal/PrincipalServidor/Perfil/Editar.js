import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./PerfilS.css";

function EditarPerfil() {
  const { id } = useParams();  // Recuperando o ID da URL
  const navigate = useNavigate();

  // Definindo o estado para "servidor" com as propriedades necessárias
  const [servidor, setServidor] = useState({
    nomeCompleto: "",
    matricula: "",
    email: "",
    telefone: "",
    // Adicione outros campos que você precisar
  });

  useEffect(() => {
    fetch(`http://localhost:3000/servidor/id/${id}`)
      .then((res) => res.json())
      .then((data) => setServidor(data))
      .catch((erro) => console.error("Erro ao buscar servidor:", erro));
  }, [id]);

  const handleChange = (e) => {
    setServidor({ ...servidor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/servidor/id/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(servidor),
    })
      .then(() => {
        alert("Perfil atualizado!");
        navigate(`/TelaPrincipal/PrincipalServidor/PerfilS`);
      })
      .catch((erro) => console.error("Erro ao atualizar:", erro));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo-branca.png" alt="Logo" />
        </div>
        <div className="navbar-links">
          <a href="/TelaPrincipal/PrincipalServidor">Requerimentos</a>
          <a href={`/TelaPrincipal/PrincipalServidor/PerfilS`}>
            {/* Aqui pode ser um ícone para o perfil */}
            <FaUserCircle size={24} title="Perfil" />
          </a>
          <a href="/">
            <FaSignOutAlt size={24} title="Sair" />
          </a>
        </div>
      </nav>

      <div className="container-editar">
        <div className="card-editar">
          <h2 className="header-editar">Editar Perfil</h2>
          <form className="form-editar" onSubmit={handleSubmit}>
            <div className="grid-editar">
              <label className="label-editar">
                Nome:
                <input
                  type="text"
                  name="nomeCompleto"
                  value={servidor.nomeCompleto}
                  onChange={handleChange}
                  className="input-editar"
                />
              </label>
              <label className="label-editar">
                Matrícula:
                <input
                  type="text"
                  name="matricula"
                  value={servidor.matricula}
                  disabled
                  className="input-editar"
                />
              </label>
              <label className="label-editar">
                Email:
                <input
                  type="email"
                  name="email"
                  value={servidor.email}
                  onChange={handleChange}
                  className="input-editar"
                />
              </label>
              <label className="label-editar">
                Telefone:
                <input
                  type="text"
                  name="telefone"
                  value={servidor.telefone}
                  onChange={handleChange}
                  className="input-editar"
                />
              </label>
            </div>
            <div className="footer-editar">
              <button type="submit" className="button-editar">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditarPerfil;
