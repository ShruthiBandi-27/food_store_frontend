import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";
import "./LoginPage.css";

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const nav = useNavigate();
  const { user, login } = useAuth();
  const [params] = useSearchParams();
  const returnUrl = params.get("returnUrl");

  useEffect(() => {
    if (!user) return;
    returnUrl ? nav(returnUrl) : nav("/");
  }, [user]);

  const submit = async ({ email, password }) => {
    await login(email, password);
  };
  return (
    <div className="login_container">
      <div className="login_details">
        <Title title="Login" />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            type="email"
            label="Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                message: "Email is not valid",
              },
            })}
            error={errors.email}
          />
          <Input
            type="password"
            label="Password"
            {...register("password", {
              required: true,
            })}
            error={errors.password}
          />

          <Button type="submit" text="Login" />
          <div className="register">
            NewUser? &nbsp;
            <Link
              to={`/register${returnUrl ? "?returnUrl=" + returnUrl : ""} `}
            >
              Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
