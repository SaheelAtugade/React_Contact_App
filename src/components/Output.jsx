    import React from "react";
    import ContactCard from "./ContactCard";

    const Output = ({ allUsers, setAllUsers }) => {
    const deleteContact = (id) => {
        // setAllUsers((prev) => prev.filter((user) => user.id !== id));
        const newUsers = allUsers.filter((user)=> user.id !== id);
        setAllUsers(newUsers)
        localStorage.setItem('Contacts',JSON.stringify(newUsers));
    };
    return (
        <div className="bg-zinc-50 w-87.5 sm:w-100 p-5 rounded-lg shadow-md">
        {allUsers.length === 0 ? (
            <p className="text-center text-gray-500">No Contacts Found</p>
        ) : (
            allUsers.map((user) => {
            return <ContactCard key={user.id} user={user} deleteContact={deleteContact} />;
            })
        )}
        </div>
    );
    };

    export default Output;
