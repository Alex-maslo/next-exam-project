import React from "react";

const HomePage = async ({ accessToken }: { accessToken: boolean }) => {
  return (
    <>
      {accessToken ? (
        <div></div>
      ) : (
        <>
          <div className="hero bg-base-100 ">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello</h1>
                <p className="py-6">
                  To gain access, you are required to log in first and provide
                  the necessary credentials to authenticate your identity.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
