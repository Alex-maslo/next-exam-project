import React from "react";

const AuthErrorPage = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="card flex justify-center items-center bg-red-600 text-white  h-[20vh]  shadow-xl p-5">
        <div className="text-center font-semibold">
          <p>The login credentials you provided are incorrect.</p>
          <p>Please check and try again.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthErrorPage;
