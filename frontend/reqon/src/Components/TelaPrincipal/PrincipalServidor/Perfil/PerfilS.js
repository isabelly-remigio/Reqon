import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";  // Importando o Link
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";  // Importando os ícones
import "./PerfilS.css";

const PerfilS = () => {
  const [servidor, setServidor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/servidor/1") // Simulando servidor logado
      .then((res) => res.json())
      .then((data) => setServidor(data))
      .catch((error) => console.error("Erro ao buscar perfil:", error));
  }, []);

  if (!servidor) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="perfil-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo-branca.png" alt="Logo" />
        </div>
        <div className="navbar-links">
          <Link to="/TelaPrincipal/PrincipalServidor">Requerimentos</Link>
          <Link to={`/Perfil/${servidor.id}`}>  {/* Corrigindo para usar servidor.id */}
            <FaUserCircle size={24} title="Perfil" />
          </Link>
          <Link to="/">
            <FaSignOutAlt size={24} title="Sair" />
          </Link>
        </div>
      </nav>

      <div className="perfil-card">
      <h2>Perfil do Servidor</h2>
      <div className="perfil-info">
          <p><strong>Nome:</strong> {servidor.nomeCompleto}</p>
          <p><strong>Matrícula:</strong> {servidor.matricula}</p>
          <p><strong>Email:</strong> {servidor.email}</p>
         
          </div>

          <Link to={`/TelaPrincipal/PrincipalServidor/PerfilS/Editar`} className="perfil-editar-btn">Editar Perfil</Link>
     
    </div>
    </div>
  );
};

export default PerfilS;
