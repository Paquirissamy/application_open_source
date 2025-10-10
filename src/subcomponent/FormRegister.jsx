import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="m-15 flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <Label> Name</Label>
        <Input
          {...register("first_name", {
            required: true,
          })}
          placeholder="Doe"
          id="first_name"
        ></Input>
        <Label> Last Name </Label>
        <Input
          {...register("last_name", {
            required: true,
          })}
          placeholder="John"
          id="last_name"
        ></Input>

        <Label>Email</Label>
        <Input
          {...register("email ", {
            required: true,
          })}
          id="email"
          type="email"
          placeholder="example@homail.com"
        ></Input>

        <Label>Password</Label>
        <Input
          {...register("password", {
            required: true,
          })}
          placeholder="*********"
          type="password"
          id="password"
        ></Input>
        <br></br>
        <Button className="w-[200px]" variant="outline">
          {" "}
          Sign-up
        </Button>
      </form>
    </div>
  );
}

export default FormRegister;
