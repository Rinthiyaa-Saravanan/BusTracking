import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Clock, Trash2 } from "lucide-react";
import "./remainder.css";

const API_URL = "http://localhost:5002/api/reminders"; // ✅ Backend API URL

export default function Remainder() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [time, setTime] = useState("");
  const [reminders, setReminders] = useState([]);
  const navigate = useNavigate();

  // ✅ Sample Locations
  const locations = [
    "Central Bus Stand",
    "Park Avenue Stop",
    "Main Street Terminal",
    "University Gate",
    "City Hospital Stop",
  ];

  // ✅ Fetch Reminders (No Login Required)
  useEffect(() => {
    fetchReminders();
  }, []);

  const fetchReminders = async () => {
    try {
      let response = await fetch(API_URL);
      const data = await response.json();
      setReminders(data);
    } catch (error) {
      console.error("Error fetching reminders:", error);
    }
  };

  // ✅ Set Reminder (Requires Login)
  const handleSetReminder = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in to set a reminder.");
      navigate("/login"); // ✅ Redirect to Login if not authenticated
      return;
    }

    if (!pickup || !drop || !time) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ pickup, drop, time }),
      });

      if (!response.ok) {
        const data = await response.json();
        alert(data.msg || "Failed to set reminder");
        return;
      }

      fetchReminders(); // ✅ Refresh the list
      setPickup("");
      setDrop("");
      setTime("");
      
    } catch (error) {
      console.error("❌ Network Error:", error);
      alert("Network error! Check backend or internet connection.");
    }
  };

  // ✅ Delete Reminder (Requires Login)
  const handleDeleteReminder = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in to delete a reminder.");
      navigate("/login"); // ✅ Redirect to Login if not authenticated
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete reminder");
      }

      // ✅ Update UI after deleting
      setReminders(reminders.filter((reminder) => reminder._id !== id));
    } catch (error) {
      console.error("Error deleting reminder:", error);
    }
  };

  return (
    <div className="remainder-container">
      <div className="remainder-form">
        <h2><Bell /> Set a Reminder</h2>

        <label>Pickup Point:</label>
        <select value={pickup} onChange={(e) => setPickup(e.target.value)}>
          <option value="">Select Pickup</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>{location}</option>
          ))}
        </select>

        <label>Drop Point:</label>
        <select value={drop} onChange={(e) => setDrop(e.target.value)}>
          <option value="">Select Drop</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>{location}</option>
          ))}
        </select>

        <label>Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />

        <button onClick={handleSetReminder}>Set Reminder</button>
      </div>

      <div className="reminder-list">
        <h2>Upcoming Reminders</h2>
        {reminders.length === 0 ? (
          <p>No reminders set.</p>
        ) : (
          <ul>
            {reminders.map((reminder) => (
              <li key={reminder._id}>
                🚏 <strong>{reminder.pickup}</strong> → 🏁 <strong>{reminder.drop}</strong> 
                ⏰ {reminder.time}
                <button className="delete-button" onClick={() => handleDeleteReminder(reminder._id)}>
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
