import { useNavigate } from "react-router-dom";

export default function ContractsTable({
  contracts,
  nextStatus,
  updateStatus,
}) {
  const navigate = useNavigate();

  return (
    <section className="card">
      <h2>Contracts Dashboard</h2>

      <table>
        <thead>
          <tr>
            <th>Contract name</th>
            <th>Blueprint name</th>
            <th>Created date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contracts.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.blueprint}</td>
              <td>{c.createdAt}</td>
              <td className={`status ${c.status}`}>{c.status}</td>
              <td>
                <button onClick={() => navigate(`/contract/${c.id}`)}>
                  View
                </button>

                {c.status !== "LOCKED" && c.status !== "REVOKED" && (
                  <button
                    onClick={() => updateStatus(c.id, nextStatus[c.status])}
                  >
                    Next
                  </button>
                )}

                {c.status !== "LOCKED" && (
                  <button
                    className="danger"
                    onClick={() => updateStatus(c.id, "REVOKED")}
                  >
                    Revoke
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
