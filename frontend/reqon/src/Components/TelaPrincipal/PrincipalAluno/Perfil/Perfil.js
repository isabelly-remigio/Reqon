import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./Perfil.css";

function Perfil() {
  const { id } = useParams();
  const [aluno, setAluno] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/aluno/id/${id}`)
      .then((res) => res.json())
      .then((data) => setAluno(data))
      .catch((erro) => console.error("Erro ao buscar aluno:", erro));
  }, [id]);

  if (!aluno) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="perfil-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo-branca.png" alt="Logo" />
        </div>
        <div className="navbar-links">
          <Link to="/TelaDeSolicitacoes/SolicitacaoAluno">Minhas Solicitações</Link>
          <Link to={`/Perfil/${id}`}>
            <FaUserCircle size={24} title="Perfil" />
          </Link>
          <Link to="/">
            <FaSignOutAlt size={24} title="Sair" />
          </Link>
        </div>
      </nav>

      <div className="perfil-card">
        <h2>Perfil do Aluno</h2>
        <div className="perfil-info">
          <p><strong>Nome:</strong> {aluno.nomeCompleto}</p>
          <p><strong>Matrícula:</strong> {aluno.matricula}</p>
          <p><strong>Data de Nascimento:</strong> {aluno.dataNascimento}</p>
          <p><strong>CPF:</strong> {aluno.cpf}</p>
          <p><strong>RG:</strong> {aluno.rg}</p>
          <p><strong>Órgão Expedidor:</strong> {aluno.orgaoExpedidor}</p>
          <p><strong>Telefone:</strong> {aluno.telefone}</p>
          <p><strong>Email:</strong> {aluno.email}</p>
          <p><strong>Curso:</strong> {aluno.curso}</p>
          <p><strong>Período:</strong> {aluno.periodo}</p>
          <p><strong>Turno:</strong> {aluno.turno}</p>
        </div>
        <Link to={`/editar-perfil/${id}`} className="perfil-editar-btn">Editar Perfil</Link>
      </div>
    </div>
  );
}

export default Perfil;
