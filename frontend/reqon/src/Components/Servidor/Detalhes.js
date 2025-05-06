import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import "./Detalhes.css";

export default function Detalhes() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [requerimento, setRequerimento] = useState(null);
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/requerimento/detalhes/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("Dados recebidos:", data);
                setRequerimento(data);
            })
            .catch(error => console.error("Erro ao buscar detalhes:", error));
    }, [id]);

    const atualizarStatus = async (status) => {
        try {
            const response = await fetch(`http://localhost:3000/requerimento/${id}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
            });

            if (response.ok) {
                setMensagem(`Requerimento ${status.toLowerCase()} com sucesso!`);
                setRequerimento({ ...requerimento, status });
                setTimeout(() => {
                    navigate("/TelaPrincipal/PrincipalServidor");
                }, 2000);
            } else {
                throw new Error('Erro ao atualizar o status.');
            }
        } catch (error) {
            console.error(error);
            setMensagem('Falha ao atualizar o status. Tente novamente.');
        }
    };

    if (!requerimento || !requerimento.aluno) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="detalhe-container">
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src="/logo-branca.png" alt="Logo" />
                </div>
                <div className="navbar-links">
                    <a href="/TelaPrincipal/PrincipalServidor">Requerimentos</a>
                    <a href="/TelaPrincipal/PrincipalServidor/PerfilS">
                        <FaUserCircle size={24} title="Perfil" />
                    </a>
                    <a href="/">
                        <FaSignOutAlt size={24} title="Sair" />
                    </a>
                </div>
            </nav>

           
            <div className="detalhe-card">
                <h2>Dados do Aluno</h2>
                <div className="detalhe-grid">
                    <p><strong>Nome:</strong> {requerimento.aluno.nomeCompleto}</p>
                    <p><strong>Matrícula:</strong> {requerimento.aluno.matricula}</p>
                    <p><strong>Telefone:</strong> {requerimento.aluno.telefone}</p>
                    <p><strong>Email:</strong> {requerimento.aluno.email}</p>
                    <p><strong>CPF:</strong> {requerimento.aluno.cpf}</p>
                    <p><strong>RG:</strong> {requerimento.aluno.rg}</p>
                    <p><strong>Período:</strong> {requerimento.aluno.periodo}</p>
                    <p><strong>Curso:</strong> {requerimento.aluno.curso}</p>
                    <p><strong>Turno:</strong> {requerimento.aluno.turno}</p>
                    <p><strong>Data de Nascimento:</strong> {requerimento.aluno.dataNascimento}</p>
                </div>
            </div>

           
            <div className="detalhe-card">
                <h2>Detalhes do Requerimento</h2>
                <p><strong>Solicitação:</strong> {requerimento.titulo}</p>
                <p><strong>Observações:</strong> {requerimento.observacoes || "Nenhuma"}</p>

                {requerimento.anexo && (
    <div>
        <strong>Anexo:</strong>
        <a 
            href={`http://localhost:3000/uploads/${requerimento.anexo}`} 
            target="_blank" 
            download
            className="detalhe-button detalhe-button-baixar"
        >
            Baixar PDF
        </a>
    </div>
)}



                {mensagem && <p>{mensagem}</p>}

                <div className="detalhe-buttons">
                    <button 
                        className="detalhe-button detalhe-button-aceitar" 
                        onClick={() => atualizarStatus('Aceito')}
                    >
                        Aceitar
                    </button>
                    <button 
                        className="detalhe-button detalhe-button-indeferir" 
                        onClick={() => atualizarStatus('Indeferido')}
                    >
                        Indeferir
                    </button>
                </div>
            </div>
        </div>
    );
}
