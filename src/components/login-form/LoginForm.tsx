import React from "react";
import Form from "next/form";
import { loginUserAndGetTokens } from "@/server-actions/loginUserAndGetTokens";

const LoginForm = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <Form action={loginUserAndGetTokens} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
