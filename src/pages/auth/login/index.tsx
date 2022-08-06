import { useState } from "react";
import create from "zustand";
import { LockClosedIcon } from "@heroicons/react/solid";

import { Checkbox } from "../../../core/checkbox";
import { Input } from "../../../core/input";
import { Password } from "../../../core/password";
import { Service } from "../../../service";
import { Endpoint } from "../../../service/endpoint";
// import { useHistory } from "react-router-dom";

interface LoginForm {
  username: string;
  password: string;
  remember?: boolean;
}

export function Login() {
  const loginForm = create<LoginForm>((set) => ({
    username: "",
    password: "",
    remember: true,
    setUsername: (e: { target: { value: any } }) =>
      set((state) => ({ username: e.target.value })),
    setPassword: (e: { target: { value: any } }) =>
      set((state) => ({ password: e.target.value }))
  }));

  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = async (event: any) => {
    event.preventDefault();
    try {
      // values.password = btoa(values.password);
      const userLogin = {
        username: "admin@orca.ci",
        password: "admin@123"
      };
      const response = await Service.post(Endpoint.v1.auth.login, {
        body: userLogin
      });
      if (response) {
        localStorage.setItem("loggedIn", "true");
      }

      console.log(response);
      // history.push("/home");
      // const result = await axios.post("/api/user/login", values);
      // console.log(result.data);
      // if (!result.data.success) {
      //   message.error("Login failed");
      // } else {
      //   localStorage.setItem("loggedIn", "true");
      //   import("../main").then(({ Mainpage }) => ({
      //     default: Mainpage
      //   }));
      //   // message.success("Login successfull");
      // }
    } catch (error) {
      console.log(error);
      // message.error(`Login failed! Error: ${error}`);
    }
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Orca"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onFinish}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <Input
                key={"email-address"}
                title={"Email address"}
                srOnly={true}
                placeholder={"Email address"}
                type={"email"}
                autoComplete={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                classStyle={
                  "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                }
              />
              <Password
                key={"password"}
                title={"password"}
                srOnly={true}
                placeholder={"Password"}
                autoComplete={"current-password"}
                onChange={(e) => setPassword(e.target.value)}
                classStyle={
                  "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox key={"remember-me"} label={"Remember me"}></Checkbox>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
