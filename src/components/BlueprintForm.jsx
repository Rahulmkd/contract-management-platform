import { useState } from "react";

export default function BlueprintForm({ blueprints, setBlueprints }) {
  const [bpName, setBpName] = useState("");
  const [bpFields, setBpFields] = useState([]);

  const addField = (type) => {
    setBpFields([...bpFields, { id: Date.now(), type }]);
  };

  const saveBlueprint = () => {
    if (!bpName) return;
    setBlueprints([
      ...blueprints,
      { id: Date.now(), name: bpName, fields: bpFields },
    ]);
    setBpName("");
    setBpFields([]);
  };

  return (
    <section className="card">
      <h2>Create Blueprint</h2>

      <input
        placeholder="Blueprint name"
        value={bpName}
        onChange={(e) => setBpName(e.target.value)}
      />

      <div className="btn-group">
        <button onClick={() => addField("text")}>Text</button>
        <button onClick={() => addField("date")}>Date</button>
        <button onClick={() => addField("signature")}>Signature</button>
        <button onClick={() => addField("checkbox")}>Checkbox</button>
      </div>

      <ul>
        {bpFields.map((f) => (
          <li key={f.id}>{f.type}</li>
        ))}
      </ul>

      <button className="primary" onClick={saveBlueprint}>
        Save Blueprint
      </button>
    </section>
  );
}
