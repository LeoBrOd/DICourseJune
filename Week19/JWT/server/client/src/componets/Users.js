import { useState, useEffect } from "react";

const Users = (props) => {
  const [users, SetUsers] = useState([]);
  useEffect(() => {
    fetch("/users")
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        SetUsers(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users ? (
        users.map((item) => {
          return (
            <div key={item.id}>{item.email}</div>
          );
        })
      ) : (
        <h3>Unauthorized</h3>
      )}
    </div>
  );
};

export default Users;
