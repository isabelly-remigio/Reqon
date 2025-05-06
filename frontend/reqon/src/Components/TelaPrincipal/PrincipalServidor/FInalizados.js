import { useEffect, useState } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./PrincipalServidor.css";

const Finalizados = () => {
  const [finalizados, setFinalizados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/requerimento")
      .then((res) => res.json())
      .then((data) => {
        const requerimentosFinalizados = data.filter(
          (req) => req.status.trim().toLowerCase() === "aceito" || req.status.trim().toLowerCase() === "indeferido"
        );
        setFinalizados(requerimentosFinalizados);
      })
      .catch((error) => console.error("Erro ao buscar requerimentos:", error));
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo-branca.png" alt="Logo" />
        </div>
        <div className="navbar-links">
        <div className="navbar-links">
        <a href="/TelaPrincipal/PrincipalServidor">Requerimentos Concluídos</a>
        <a href="/TelaPrincipal/PrincipalServidor/PerfilS">
            <FaUserCircle size={24} title="Perfil" />
          </a>
          <a href="/">
            <FaSignOutAlt size={24} title="Sair" />
          </a>
        </div>
        </div>
      </nav>
      <div className="p-4">
        <h1 className="nome">Requerimentos Finalizados</h1>
        {finalizados.length === 0 ? (
          <p>Nenhum requerimento finalizado.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Matrícula</th>
                <th className="border border-gray-300 px-4 py-2">Tipo</th>
                <th className="border border-gray-300 px-4 py-2">Data</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {finalizados.map((req) => (
                <tr key={req.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{req.aluno.matricula}</td>
                  <td className="border border-gray-300 px-4 py-2">{req.titulo}</td>
                  <td className="border border-gray-300 px-4 py-2">{new Date(req.createdAt).toLocaleDateString("pt-BR")}</td>
                  <td
                    className={`border px-4 py-2 ${
                      req.status.toLowerCase() === "aceito" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
                  >
                    {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
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

export default Finalizados;
