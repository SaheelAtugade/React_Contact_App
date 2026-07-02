import React, { useState } from "react";

const Form = ({ setAllUsers }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [profile, setProfile] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setAllUsers((prev) => [...prev, { id: Date.now(), name, number, profile }]);
    setName("");
    setNumber("");
    setProfile("");
  };

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className="flex flex-col gap-4 w-87.5 sm:w-100 bg-zinc-50 p-6 rounded-lg shadow-md"
    >
      <h2 className="lg:text-3xl text-2xl font-bold text-center text-zinc-800">
        Add New Contact
      </h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
        className="border border-gray-400 p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Enter mobile number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        required
        className="border border-gray-400 p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Paste profile url"
        value={profile}
        onChange={(e) => {
          setProfile(e.target.value);
        }}
        className="border border-gray-400 p-2 rounded-md"
      />

      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default Form;
