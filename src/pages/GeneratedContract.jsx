import { useParams, useNavigate } from "react-router-dom";
import "./Contract.css";

export default function GeneratedContract({ contracts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const contract = contracts.find((c) => c.id == id);

  if (!contract) return <h2>Contract Not Found</h2>;

  return (
    <div className="contract-wrapper">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <div className="contract-paper">
        <h1 className="contract-title">Service Agreement</h1>

        <p className="contract-meta">
          <strong>Contract Name:</strong> {contract.name}
        </p>
        <p className="contract-meta">
          <strong>Blueprint:</strong> {contract.blueprint}
        </p>
        <p className="contract-meta">
          <strong>Status:</strong> {contract.status}
        </p>
        <p className="contract-meta">
          <strong>Date:</strong> {contract.createdAt}
        </p>

        <hr />

        <h3>Agreement Details</h3>

        {Object.values(contract.values).map((field, index) => (
          <p key={index} className="contract-field">
            <strong>{field.label}:</strong> {String(field.value)}
          </p>
        ))}

        <div className="signature-box">
          <div>
            <p>______________________</p>
            <span>Authorized Signature</span>
          </div>
          <div>
            <p>______________________</p>
            <span>Client Signature</span>
          </div>
        </div>
      </div>
    </div>
  );
}
