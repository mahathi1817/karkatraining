import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  (async () => {
    try {
      console.log("Fetching data...");
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  })();

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Users</h1>
          <table border={1}>
            <thead>
              <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>completed</th>
              </tr>
            </thead>
            <tbody>
              {users.filter((user) => user.completed && user.id%2===0).map((user) => (
                <tr key={user.id}>
                  <td>{user.userId}</td>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.completed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;
