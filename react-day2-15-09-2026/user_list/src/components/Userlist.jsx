import { useState, useEffect } from "react";

export default function Userlist() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUserList(data);
    }

    fetchData();
  }, []);

  return (
    <div className="main">
      {userList.map((user, index) => {
        return (
          <div key={user.id} className="user-row">
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
}
