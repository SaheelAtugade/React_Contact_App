import React from "react";

const ContactCard = ({user,deleteContact}) => {
    const defaultPic = "https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfDJ8MHx8fDA%3D";
  return (
    <div
      className="w-full border-gray-400 border-2 rounded p-2.5 mb-2.5 flex gap-4 items-center relative"
    >
      <div
        style={{
          backgroundImage: `url(${user.profile === "" ?  defaultPic: user.profile})`,
        }}
        className={
          "bg-red-600 h-16 w-16 rounded-full bg-cover bg-center bg-no-repeat"
        }
      ></div>
      <div>
        <h3 className="text-xl font-normal text-zinc-800 mb-1.2">
          {user.name}
        </h3>
        <p className="text-base font-extralight text-zinc-600 mb-2">
          {user.number}
        </p>
        <i
          onClick={() => {
            deleteContact(user.id);
          }}
          className="ri-delete-bin-line absolute top-1 right-1.5 text-xl text-red-900 cursor-pointer"
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
