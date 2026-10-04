import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";

const AgentDashboard = () => {

    const navigate = useNavigate();
  return (
    <div>

      <Navbar />

      <main className="dashboard">

        <div className="dashboard-header">

          <div>
            <p className="dashboard-label">
              AGENT DASHBOARD
            </p>

            <h1>Welcome back 👋</h1>

            <p>
              Manage your assigned customers and cases.
            </p>
          </div>

          <button className="primary-button small" onClick ={()=>{
              navigate('/agent/new-case')
          }}>
            + New Case
          </button>

        </div>


        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon blue">👥</div>

            <div>
              <span>My Customers</span>
              <strong>84</strong>
              <small>+6 this month</small>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon purple">📁</div>

            <div>
              <span>Open Cases</span>
              <strong>18</strong>
              <small>5 high priority</small>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon green">✓</div>

            <div>
              <span>Resolved</span>
              <strong>76</strong>
              <small>+14 this month</small>
            </div>
          </div>

        </div>


        <div className="panel">

          <div className="panel-header">

            <h2>My Recent Cases</h2>

            <button>
              View all
            </button>

          </div>

          <div className="table">

            <div className="table-row table-head">
              <span>Case</span>
              <span>Customer</span>
              <span>Status</span>
            </div>

            <div className="table-row">
              <span>#CASE-1024</span>
              <span>Rahul Kumar</span>
              <span className="status active">
                Open
              </span>
            </div>

            <div className="table-row">
              <span>#CASE-1023</span>
              <span>Ananya S</span>
              <span className="status pending">
                Pending
              </span>
            </div>

            <div className="table-row">
              <span>#CASE-1022</span>
              <span>Vikram S</span>
              <span className="status resolved">
                Resolved
              </span>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default AgentDashboard;