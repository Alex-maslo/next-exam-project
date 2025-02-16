import React from "react";
import Form from "next/form";
import { signup } from "@/actions/auth";

const LoginForm = () => {
  return (
    <div className="flex justify-center pt-6">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <Form action={signup} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">UserName</span>
            </label>
            <input
              type="text"
              placeholder="User Name"
              className="input input-bordered"
              name="username"
              // required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered"
              name="password"
              // required
            />
            <label className="label"></label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
