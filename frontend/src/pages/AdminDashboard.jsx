import Navbar from "../components/Navbar";

const AdminDashboard = () => {

  return (
    <div>

      <Navbar />

      <main className="dashboard">

        <div className="dashboard-header">
          <div>
            <p className="dashboard-label">
              ADMIN DASHBOARD
            </p>

            <h1>Good morning, Admin 👋</h1>

            <p>
              Here's what's happening with your CRM.
            </p>
          </div>

          <button className="primary-button small">
            + Add Customer
          </button>
        </div>


        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon blue">👥</div>

            <div>
              <span>Total Customers</span>
              <strong>1,248</strong>
              <small>+12.5% this month</small>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon purple">📁</div>

            <div>
              <span>Open Cases</span>
              <strong>86</strong>
              <small>+4.2% this week</small>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon green">✓</div>

            <div>
              <span>Resolved Cases</span>
              <strong>324</strong>
              <small>+18.4% this month</small>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon orange">⚡</div>

            <div>
              <span>Active Agents</span>
              <strong>24</strong>
              <small>3 online now</small>
            </div>
          </div>

        </div>


        <div className="dashboard-grid">

          <div className="panel">

            <div className="panel-header">
              <h2>Recent Customers</h2>
              <button>View all</button>
            </div>

            <div className="table">

              <div className="table-row table-head">
                <span>Customer</span>
                <span>Email</span>
                <span>Status</span>
              </div>

              <div className="table-row">
                <span>Rahul Kumar</span>
                <span>rahul@gmail.com</span>
                <span className="status active">
                  Active
                </span>
              </div>

              <div className="table-row">
                <span>Ananya S</span>
                <span>ananya@gmail.com</span>
                <span className="status active">
                  Active
                </span>
              </div>

              <div className="table-row">
                <span>Vikram S</span>
                <span>vikram@gmail.com</span>
                <span className="status pending">
                  Pending
                </span>
              </div>

            </div>

          </div>


          <div className="panel">

            <div className="panel-header">
              <h2>Case Overview</h2>
            </div>

            <div className="case-overview">

              <div>
                <strong>86</strong>
                <span>Open</span>
              </div>

              <div>
                <strong>42</strong>
                <span>Pending</span>
              </div>

              <div>
                <strong>324</strong>
                <span>Resolved</span>
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default AdminDashboard;