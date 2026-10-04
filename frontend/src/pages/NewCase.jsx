import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCase = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
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
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/cases",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to create case"
        );
      }

      alert("Case created successfully!");

      navigate("/agent");

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <div>
          <p className="dashboard-label">
            CASE MANAGEMENT
          </p>

          <h1>Create New Case</h1>

          <p>
            Create a new customer support case.
          </p>
        </div>

        <button
          className="logout-button"
          onClick={() => navigate("/agent")}
        >
          ← Back
        </button>
      </div>


      <div className="panel">

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Case Title</label>

            <input
              type="text"
              name="title"
              placeholder="Enter case title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>


          <div className="form-group">
            <label>Description</label>

            <textarea
              name="description"
              placeholder="Describe the issue..."
              value={formData.description}
              onChange={handleChange}
              required
              rows="6"
              style={{
                width: "100%",
                padding: "15px",
                border: "1px solid #dbe2ea",
                borderRadius: "10px",
                resize: "vertical",
                outline: "none",
              }}
            />
          </div>


          <div className="form-group">
            <label>Priority</label>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              style={{
                width: "100%",
                height: "52px",
                padding: "0 15px",
                border: "1px solid #dbe2ea",
                borderRadius: "10px",
                background: "white",
              }}
            >
              <option value="Low">
                Low
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="High">
                High
              </option>
            </select>
          </div>


          <button
            type="submit"
            className="primary-button"
            disabled={loading}
          >
            {loading
              ? "Creating Case..."
              : "Create Case"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default NewCase;