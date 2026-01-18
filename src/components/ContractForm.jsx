import { useState } from "react";

export default function ContractForm({ blueprints, contracts, setContracts }) {
  const [selectedBp, setSelectedBp] = useState(null);
  const [values, setValues] = useState({});

  const createContract = () => {
    setContracts([
      ...contracts,
      {
        id: Date.now(),
        name: `Contract from ${selectedBp.name}`,
        blueprint: selectedBp.name,
        createdAt: new Date().toLocaleDateString(),
        status: "CREATED",
        values,
      },
    ]);
    setSelectedBp(null);
    setValues({});
  };

  return (
    <section className="card">
      <h2>Create Contract</h2>

      <select
        onChange={(e) =>
          setSelectedBp(blueprints.find((b) => b.id == e.target.value))
        }
      >
        <option>Select Blueprint</option>
        {blueprints.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>

      {selectedBp &&
        selectedBp.fields.map((f) => (
          <div key={f.id} className="field">
            <label>{f.type}</label>
            <input
              type={f.type === "checkbox" ? "checkbox" : "text"}
              onChange={(e) =>
                setValues({
                  ...values,
                  [f.id]: {
                    label: f.type,
                    value:
                      f.type === "checkbox" ? e.target.checked : e.target.value,
                  },
                })
              }
            />
          </div>
        ))}

      {selectedBp && (
        <button className="primary" onClick={createContract}>
          Create Contract
        </button>
      )}
    </section>
  );
}
