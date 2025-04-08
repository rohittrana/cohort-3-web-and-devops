import { useState, useEffect } from "react";
import "./App.css";
import Toggle from './Hooks/Toogle'
import FocusInput from "./Hooks/FocusInput";
function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("your system encounter with Error");
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
    <FocusInput></FocusInput>
    <Toggle></Toggle>
      {isLoading ? (
        <p>Loading users...</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <ol>
              <li>name: {user.name}</li>
              <li>username:{user.username}</li>
            </ol>
          </div>
        ))
      )}
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <p style={{ display: "flex", justifyContent: "center" }}>{count}</p>
    </>
  );
}

export default App;
