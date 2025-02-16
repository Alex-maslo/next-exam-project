import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="hero bg-base-100 h-[calc(100vh-64px)]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Необхідна аутентифікація</h1>
            <p className="py-6">
              Для доступу до цієї сторінки необхідно пройти аутентифікацію. Будь
              ласка, увійдіть у систему, щоб продовжити. Перейдіть за посиланням
              для авторизації.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
