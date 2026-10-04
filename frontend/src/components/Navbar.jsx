import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <header className="navbar">

      <div className="nav-brand">
        <div className="brand-icon">
          C
        </div>

        <span>CRM Pro</span>
      </div>

      <div className="nav-user">

        <div className="avatar">
          {user?.username?.charAt(0).toUpperCase()}
        </div>

        <div className="user-info">
          <strong>{user?.username}</strong>
          <span>{user?.role}</span>
        </div>

        <button
          onClick={logout}
          className="logout-button"
        >
          Logout
        </button>

      </div>

    </header>
  );
};

export default Navbar;