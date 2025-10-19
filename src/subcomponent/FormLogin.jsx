import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import "../assets/ChippypayLogo.png";
import { ToastContainer, toast } from "react-toastify";
import { NavLink, Link } from "react-router-dom";

function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log(data);
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
          <Button className="w-[180px]" variant="outline">
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
