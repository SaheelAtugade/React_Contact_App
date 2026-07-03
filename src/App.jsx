import React, { useState } from "react";
import Form from "./components/Form";
import Output from "./components/Output";

const App = () => {
  const Contacts = JSON.parse(localStorage.getItem('Contacts')) || [];
  const [allUsers, setAllUsers] = useState(Contacts);

  return (
    <div className="min-h-screen bg-gray-400">
      <div className="max-w-7xl sm:flex-row sm:items-start  mx-auto p-8 flex flex-col items-center justify-center gap-5">
        <Form  allUsers={allUsers} setAllUsers={setAllUsers} />
        <Output allUsers={allUsers} setAllUsers={setAllUsers} />
      </div>
    </div>
  );
};

export default App;
