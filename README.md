# 📄 Contract Management Platform (Frontend)

A frontend-based Contract Management Platform built to demonstrate product thinking, UI design, state management, and clean code architecture.

The application allows users to create reusable contract blueprints, generate contracts from those blueprints, manage contract lifecycles, and view contracts in a dashboard — all without a backend (mocked/local persistence).

---

## ✨ Features

### 1. Blueprint Creation

- Create reusable contract templates (Blueprints)
- Supported field types:
  - Text
  - Date
  - Signature
  - Checkbox
- Configure field metadata:
  - Label
  - Type
  - Basic position
- Blueprint data stored locally (mock persistence)

---

### 2. Contract Creation from Blueprint

- Select an existing blueprint
- Generate a contract inheriting all blueprint fields
- Fill values for each field
- Contract data stored locally

---

### 3. Contract Lifecycle Management

Each contract follows a controlled lifecycle:

Created → Approved → Sent → Signed → Locked  
Revoked (can occur after creation or sending)

Rules enforced:

- No skipping lifecycle steps
- Locked contracts are read-only
- Revoked contracts cannot proceed further
- UI clearly displays current status and available actions

---

### 4. Contract Dashboard

- View all contracts in a table
- Filter or group contracts by status:
  - Active
  - Pending
  - Signed
- Table displays:
  - Contract name
  - Blueprint name
  - Status
  - Created date
  - Action buttons

---

## 🛠️ Tech Stack

- **Framework:** React (Vite)
- **Language:** JavaScript
- **Styling:** CSS
- **State Management:** React Hooks
- **Persistence:** Local Storage (mocked)
- **Build in:** VS Code

> No backend is used as per assignment requirements.

---

## 📂 Project Structure

ssrc/
│── components/
│   ├── BlueprintForm.jsx        # Form to create blueprints
│   ├── ContractForm.jsx         # Form to create contracts from blueprints
│   ├── ContractsTable.jsx       # Table displaying all contracts
│
│── pages/
│   ├── Home.jsx                 # Landing page
│   ├── GeneratedContract.jsx    # Display generated contract
│
│── Contract.css                 # Styles for contracts
│── App.jsx                      # Main React component
│── App.css                      # Global app styles
│── index.jsx                    # Entry point


## ⚙️ Setup Instructions

Follow the steps below to run the project locally:

```bash
# Clone the repository
git clone https://github.com/Rahulmkd/contract-management-platform.git

# Navigate into the project directory
cd contract-management-platform

# Install dependencies
npm install

# Start the development server
npm run dev

The application will run at: http://localhost:5173

Live link is: https://cms100.netlify.app/
```
