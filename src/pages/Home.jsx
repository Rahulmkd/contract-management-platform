import BlueprintForm from "../components/BlueprintForm";
import ContractForm from "../components/ContractForm";
import ContractsTable from "../components/ContractsTable";

export default function Home({
  blueprints,
  setBlueprints,
  contracts,
  setContracts,
  nextStatus,
  updateStatus,
}) {
  return (
    <div className="app">
      <h1>Contract Management System</h1>

      <BlueprintForm blueprints={blueprints} setBlueprints={setBlueprints} />

      <ContractForm
        blueprints={blueprints}
        contracts={contracts}
        setContracts={setContracts}
      />

      <ContractsTable
        contracts={contracts}
        nextStatus={nextStatus}
        updateStatus={updateStatus}
      />
    </div>
  );
}
