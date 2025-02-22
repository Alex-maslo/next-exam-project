import React from "react";
import { IUser } from "@/models/IUser";

const User = ({ user }: { user: IUser }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="avatar h-10">
        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      </div>

      <div className="card-body">
        <h2 className="card-title">{user.firstName}</h2>
        <p>{user.phone}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default User;
