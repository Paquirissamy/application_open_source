import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import "../assets/ChippypayLogo.png";

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
    <div>
      <img src="../assets/ChippypayLogo.png" alt="logoChippyPay" srcset="" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex min-h-screen  ">
        <div className=" justify-center-safe">
          <Label>Email</Label>
          <Input
            {...register("email", {
              required: "Please entry your email !",
            })}
            id="email"
            placeholder="example@hotmail.com"
          ></Input>
          <Label>Password</Label>
          <Input
            {...register("pass", {
              required: "Please entry your email !",
            })}
            id="pass"
            placeholder="*******"
          ></Input>
          <br />
          <Button className="w-[180px]" variant="outline">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;
