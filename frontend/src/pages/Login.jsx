import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();


      console.log("dsardfty", data)

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (data.user.role === "admin") {
        navigate("/admin");
      }
      
      else {
         navigate("/agent");
       }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-left">
        <div className="brand">
          <div className="brand-icon">C</div>
          <span>CRM Pro</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow">CUSTOMER RELATIONSHIP MANAGEMENT</p>

          <h1>
            Manage your
            <span> business smarter.</span>
          </h1>

          <p className="hero-description">
            Manage customers, track cases and keep your entire
            business organized from one powerful CRM dashboard.
          </p>

          <div className="hero-stats">
            <div>
              <strong>10K+</strong>
              <span>Customers</span>
            </div>

            <div>
              <strong>98%</strong>
              <span>Satisfaction</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>


      <div className="auth-right">

        <div className="auth-card">

          <div className="mobile-brand">
            <div className="brand-icon">C</div>
            <span>CRM Pro</span>
          </div>

          <div className="auth-heading">
            <h2>Welcome back</h2>

            <p>
              Sign in to access your CRM dashboard
            </p>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Username</label>

              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="primary-button"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

          </form>

          <div className="auth-footer">
            Don't have an account?

            <Link to="/register">
              Create account
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;