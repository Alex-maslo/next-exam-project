import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AuthLayout",
};

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default AuthLayout;
