    import React from "react";
    import ContactCard from "./ContactCard";

    const Output = ({ allUsers, setAllUsers }) => {
    const deleteContact = (id) => {
        setAllUsers((prev) => prev.filter((user) => user.id !== id));
    };
    return (
        <div className="bg-zinc-50 w-100 mt-8 p-5 mx-auto">
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
