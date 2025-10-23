import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import "../assets/ChippypayLogo.png";
import { ToastContainer, toast } from "react-toastify";
import { NavLink, Link, data } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    mode: "onTouched",
  });
  const [user, setuser] = useState(false);
  const onSubmit = async (data) => {
    setuser(data);
  };

  const handleConnection = async () => {
    const response = await axios
      .post("http://localhost:3306/auth/user/login", {
        ...user,
      })
      .then((data) => {
        if (!data.data.success) {
          const notify = () =>
            toast.error("Eureru  dans le mot de passe ou email ! ");
        }
        setuser(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" m-20 flex  rounded-2xl bg-blue-200  p-10 justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className=" ">
        <div className="  justify-center ">
          <Label>Email</Label>
          <Input
            {...register("email", {
              required: "Please entry your email !",
            })}
            id="email"
            type="email"
            placeholder="example@hotmail.com"
          ></Input>
          <Label>Password</Label>
          <Input
            {...register("pass", {
              required: "Please entry your email !",
              minLength: 1,
            })}
            id="pass"
            placeholder="*******"
            type="password"
          ></Input>
          <br />
          <Button
            className="w-[250px]"
            variant="outline"
            onClick={() => handleConnection}
          >
            Login
          </Button>
          <span className="flex">
            <br /> You don't have a account ?
          </span>

          <NavLink className=" hover:underline text-blue-500" to={"/register"}>
            Sign-up
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;
