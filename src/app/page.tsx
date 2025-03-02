import React from "react";
import HomePage from "@/pages/main-page/HomePage";
import { isAuthenticated } from "@/server-actions/isAuthenticated";

const MainPage = async () => {
  const accessToken: boolean = await isAuthenticated();

  return <HomePage accessToken={accessToken} />;
};

export default MainPage;
