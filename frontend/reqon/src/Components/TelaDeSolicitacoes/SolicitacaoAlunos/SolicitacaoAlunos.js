import React, { useEffect, useState } from "react";
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import Card from "../../Card/Card";
import './SolicitacaoAluno.css';

const SolicitacaoAluno = () => {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [alunoId, setAlunoId] = useState(null); 

  useEffect(() => {
    const id = localStorage.getItem("alunoId");
    setAlunoId(id); 

    if (!id) {
      console.error("Aluno não identificado.");
      return;
    }

    const fetchSolicitacoes = async () => {
      try {
        const response = await fetch(`http://localhost:3000/requerimento/aluno/${id}`);
        const data = await response.json();
        setSolicitacoes(data);
      } catch (error) {
        console.error("Erro ao buscar solicitações:", error);
      }
    };

    fetchSolicitacoes();
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo-branca.png" alt="Logo" />
        </div>
        <div className="navbar-links">
          <a href="/TelaPrincipal/PrincipalAluno">Requerimento</a>
          <a href={alunoId ? `/Perfil/${alunoId}` : "#"}>
            <FaUserCircle size={24} title="Perfil" />
          </a>
          <a href="/" onClick={() => localStorage.removeItem("alunoId")}>
            <FaSignOutAlt size={24} title="Sair" />
          </a>
        </div>
      </nav>

      <div className="solicitacoes-container">
        <h2>Minhas Solicitações</h2>
        {solicitacoes.length > 0 ? (
          <div className="solicitacoes-grid">
            {solicitacoes.map((solicitacao) => (
              <Card
                key={solicitacao.id}
                data={new Date(solicitacao.createdAt).toLocaleDateString("pt-BR")}
                titulo={solicitacao.titulo}
                status={solicitacao.status}
              />
            ))}
          </div>
        ) : (
          <p>Nenhuma solicitação encontrada.</p>
        )}
      </div>
    </div>
  );
};

export default SolicitacaoAluno;
