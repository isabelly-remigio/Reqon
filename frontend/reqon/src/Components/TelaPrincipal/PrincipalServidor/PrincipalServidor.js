import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./PrincipalServidor.css";

const TelaServidor = () => {
  const [requerimentos, setRequerimentos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/requerimento")
      .then((res) => res.json())
      .then((data) => setRequerimentos(data))
      .catch((error) => console.error("Erro ao buscar requerimentos:", error));
  }, []);

  const pendentes = requerimentos.filter(
    (req) => req.status.trim().toLowerCase() === "analisando"
  );

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo-branca.png" alt="Logo" />
        </div>
        <div className="navbar-links">
        <a href="/TelaPrincipal/PrincipalServidor/Finalizados">Requerimentos Concluídos</a>
          <a href="/TelaPrincipal/PrincipalServidor/PerfilS">
            <FaUserCircle size={24} title="Perfil" />
          </a>
          <a href="/">
            <FaSignOutAlt size={24} title="Sair" />
          </a>
        </div>
      </nav>

      <div className="p-4">
        <h1 className="nome">Requerimentos dos Alunos</h1>

        {pendentes.length === 0 ? (
          <p>Nenhum requerimento pendente.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Matrícula</th>
                <th className="border border-gray-300 px-4 py-2">Tipo</th>
                <th className="border border-gray-300 px-4 py-2">Data</th>
                <th className="border border-gray-300 px-4 py-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {pendentes.map((req) => (
                <tr key={req.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{req.aluno.matricula}</td>
                  <td className="border border-gray-300 px-4 py-2">{req.titulo}</td>
                  <td className="border border-gray-300 px-4 py-2">{new Date(req.createdAt).toLocaleDateString("pt-BR")}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-md"
                      onClick={() => navigate(`/TelaPrincipal/Servidor/${req.id}`)}
                    >
                      Ver Detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TelaServidor;
