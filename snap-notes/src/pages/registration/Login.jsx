import { useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import Loader from "../../components/loader/Loader";
import { account } from "../../appwrite/appwriteConfig";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
// import "./Register.scss";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

function Login() {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const login = async () => {
    setLoading(true);
    try {
      const result = await account.createEmailSession(
        user.email,
        user.password
      );
      toast.success("Login successful");
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong", {
        action: {
          label: "X",
          onClick: () => toast.dismiss(),
        },
      });
      setLoading(loading);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen flex-col">
      {loading && <Loader />}
      <img src={logo} alt="" className="w-24 mb-10" />
      <div className="px-10 py-10 border border-slate-900 rounded border-2">
        <div className="">
          <h1 className="text-center text-slate-900 text-xl mb-4 font-bold">
            Login
          </h1>
        </div>
        <div>
          <Input
            type="email"
            value={user.email}
            // onChange={(e)=> setEmail(e.target.value)}
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
            name="email"
            className="px-2 py-2 w-full lg:w-[20em] mb-4"
            placeholder="Email"
          />
        </div>
        <div>
          <Input
            type="password"
            value={user.password}
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
            className=" px-2 py-2 w-full lg:w-[20em] mb-4"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <Button
            onClick={login}
            className="   w-full text-white font-bold  px-2 py-2 "
          >
            Login
          </Button>
        </div>
        <div>
          <h2 className="text-slate-900">
            Don't have an account{" "}
            <Link className="  font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
