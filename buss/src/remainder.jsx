import { useState } from "react";
import { Bell, Clock, MapPin } from "lucide-react";
import "./remainder.css";

export default function Remainder() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [time, setTime] = useState("");
  const [reminders, setReminders] = useState([]);

  const handleSetReminder = () => {
    if (!pickup || !drop || !time) {
      alert("Please fill in all fields");
      return;
    }
    const newReminder = { pickup, drop, time };
    setReminders([...reminders, newReminder]);
    setPickup("");
    setDrop("");
    setTime("");
  };

  return (
    <div className="remainder-container">
      <div className="remainder-form">
        <h2><Bell /> Set a Reminder</h2>
        <label><MapPin /> Pickup Point:</label>
        <input 
          type="text" 
          value={pickup} 
          onChange={(e) => setPickup(e.target.value)} 
          placeholder="Enter pickup location" 
        />
        
        <label><MapPin /> Drop Point:</label>
        <input 
          type="text" 
          value={drop} 
          onChange={(e) => setDrop(e.target.value)} 
          placeholder="Enter drop location" 
        />
        
        <label><Clock /> Time:</label>
        <input 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
        />

        <button onClick={handleSetReminder}>Set Reminder</button>
      </div>

      <div className="reminder-list">
        <h2>Upcoming Reminders</h2>
        {reminders.length === 0 ? (
          <p>No reminders set.</p>
        ) : (
          <ul>
            {reminders.map((reminder, index) => (
              <li key={index}>
                🚏 <strong>{reminder.pickup}</strong> → 🏁 <strong>{reminder.drop}</strong> <br />
                ⏰ {reminder.time}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
