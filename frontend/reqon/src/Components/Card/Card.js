import React from "react";
import "./Card.css";

function Card({ data, titulo, status }) {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "analisando":
        return "status-analisando";
      case "aceito":
        return "status-aceito";
      case "indeferido":
        return "status-indeferido";
      default:
        return "status-padrao";
    }
  };

  return (
    <div className="historico-card">
      <div className="card-row">
        <strong>Data:</strong>
        <span>{data}</span>
      </div>
      <div className="card-row">
        <strong>Solicitação:</strong>
        <span>{titulo}</span>
      </div>
      <div className="card-row">
        <strong>Status:</strong>
        <span className={`status ${getStatusClass(status)}`}>{status}</span>
      </div>
    </div>
  );
}

export default Card;
