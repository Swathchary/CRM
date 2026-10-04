import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminDashboard from "./pages/AdminDashboard";
import AgentDashboard from "./pages/AgentDashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import NewCase from "./pages/NewCase";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        // Public 
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        // Admin 
        <Route
          path="/admin"
          element={

                          <AdminDashboard />

            // <ProtectedRoute
            //   allowedRoles={["admin"]}
            // >
            //   <AdminDashboard />
            // </ProtectedRoute>
          }
        />


        // Agent 
        <Route
          path="/agent"
          element={
            <ProtectedRoute
              allowedRoles={["agent"]}
            >
              <AgentDashboard /> 
            </ProtectedRoute>
          }
        />

<Route
  path="/agent/new-case"
  element={
    <ProtectedRoute
      allowedRoles={["agent"]}
    >
      <NewCase />
    </ProtectedRoute>
  }
/>

        // Default 
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />


        // Unknown 
        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;