import { useState } from "react";

function MyForm() {
  const [account, setAccount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit account:", account);
  };

  return (
<div>
  <h1>Welcome, {user.username}</h1>
  <button onClick={handleLogout}>Logout</button>
  <MyForm />
</div>

  );
}
