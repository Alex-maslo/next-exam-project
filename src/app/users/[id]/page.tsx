import React from "react";
import { getDataAuthUser } from "@/api-service/dataAuthUser";
import { IUser } from "@/models/IUser";

const UserPage = async () => {
  const user: IUser = await getDataAuthUser();

  return (
    <div className=" m-5 ">
      <div className="card card-side bg-base-100 drop-shadow-xl border border-amber-700 ">
        <figure>
          <img src={user.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {user.firstName} {user.lastName}
          </h2>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
