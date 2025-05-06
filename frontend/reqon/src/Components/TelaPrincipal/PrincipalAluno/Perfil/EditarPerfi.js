import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./Perfil.css";

function EditarPerfil() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [aluno, setAluno] = useState({
    nomeCompleto: "",
    matricula: "",
    dataNascimento: "",
    cpf: "",
    rg: "",
    orgaoExpedidor: "",
    telefone: "",
    email: "",
    curso: "",
    periodo: "",
    turno: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/aluno/id/${id}`)
      .then((res) => res.json())
      .then((data) => setAluno(data))
      .catch((erro) => console.error("Erro ao buscar aluno:", erro));
  }, [id]);

  const handleChange = (e) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/aluno/id/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno),
    })
      .then(() => {
        alert("Perfil atualizado!");
        navigate(`/perfil/${id}`);
      })
      .catch((erro) => console.error("Erro ao atualizar:", erro));
  };

  return (
    <div>
      {/* Navbar */}
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

      {/* Formulário de Edição */}
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
                  value={aluno.nomeCompleto}
                  onChange={handleChange}
                  className="input-editar"
                />
              </label>
              <label className="label-editar">
                Matrícula:
                <input
                  type="text"
                  name="matricula"
                  value={aluno.matricula}
                  disabled
                  className="input-editar"
                />
              </label>
              <label className="label-editar">
                Data de Nascimento:
                <input
                  type="text"
                  name="dataNascimento"
                  value={aluno.dataNascimento}
                  disabled
                  className="input-editar"
                />
              </label>
              <label className="label-editar">
                CPF:
                <input
                  type="text"
                  name="cpf"
                  value={aluno.cpf}
                  disabled
                  className="input-editar"
                />
              </label>
              <label className="label-editar">
                RG:
                <input
                  type="text"
                  name="rg"
                  value={aluno.rg}
                  disabled
                  className="input-editar"
                />
              </label>
              <label className="label-editar">
                Órgão Expedidor:
                <input
                  type="text"
                  name="orgaoExpedidor"
                  value={aluno.orgaoExpedidor}
                  disabled
                  className="input-editar"
                />
              </label>
              <label className="label-editar">
                Telefone:
                <input
                  type="text"
                  name="telefone"
                  value={aluno.telefone}
                  onChange={handleChange}
                  className="input-editar"
                />
              </label>
              <label className="label-editar">
                Email:
                <input
                  type="email"
                  name="email"
                  value={aluno.email}
                  onChange={handleChange}
                  className="input-editar"
                />
              </label>
              <label className="label-editar">
                Curso:
                <input
                  type="text"
                  name="curso"
                  value={aluno.curso}
                  disabled
                  className="input-editar"
                />
              </label>
              <label className="label-editar">
                Período:
                <input
                  type="text"
                  name="periodo"
                  value={aluno.periodo}
                  disabled
                  className="input-editar"
                />
              </label>
              <label className="label-editar">
                Turno:
                <input
                  type="text"
                  name="turno"
                  value={aluno.turno}
                  disabled
                  className="input-editar"
                />
              </label>
            </div>
            <div className="footer-editar">
              <button type="submit" className="button-editar">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditarPerfil;
