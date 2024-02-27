import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import Loader from "../../components/loader/Loader";
import { account } from "../../appwrite/appwriteConfig";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

function Signup() {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNum: "",
    password: "",
  });

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      user.name === "" ||
      user.phoneNum === "" ||
      user.email === "" ||
      user.password === ""
    ) {
      // return toast.error("All fields are required")
      return toast.error("All fiels are required", {
        action: {
          label: "X",
          onClick: () => toast.dismiss(),
        },
      });
    }
    const accountPromise = account.create(
      uuid(),
      user.email,
      user.password,
      user.name,
      user.phoneNum
    );
    accountPromise.then(
      function (response) {
        //navigate user to the login page
        navigate("/login");
        //   toast.success("Signup Succesfully");
        toast("Signup Succesfull", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "X",
            onClick: () => toast.dismiss(),
          },
        });

        setLoading(false);
      },

      //handle error
      function (error) {
        toast.error("Signup Failed", {
          action: {
            label: "Undo",
            onClick: () => toast.dismiss(),
          },
        });
        setLoading(false);
      }
    );
  };

  return (
    <div className=" flex justify-center items-center h-screen flex-col singup">
      {loading && <Loader />}
      <img src={logo} alt="" className="w-24 mb-10" />
      <div className="px-10 py-10  border border-2 border-slate-900 rounded ">
        <div className="">
          <h1 className="text-center text-slate-900 text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <Input
            type="text"
            value={user.name}
            // onChange={(e) => setName(e.target.value)}
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
            name="name"
            className="px-2 py-2 w-full lg:w-[20em] mb-4"
            placeholder="Name"
          />
        </div>

        <div>
          <Input
            type="email"
            value={user.email}
            // onChange={(e) => setEmail(e.target.value)}
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
            type="number"
            value={user.phoneNum}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) => {
              setUser({
                ...user,
                phoneNum: e.target.value,
              });
            }}
            name="phoneNum"
            className="px-2 py-2 w-full lg:w-[20em] mb-4"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <Input
            type="password"
            value={user.password}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
            className="px-2 py-2 w-full lg:w-[20em] mb-4"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <Button
            onClick={signup}
            className="uppercase singup-btn w-full text-white font-bold  px-2 py-2 "
          >
            Signup
          </Button>
        </div>
        <div>
          <h2 className="text-slate-900">
            Have an account{" "}
            <Link className="  font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
