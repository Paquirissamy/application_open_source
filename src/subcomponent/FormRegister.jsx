import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Formuser, ProviderFormUser } from "@/hooks/useConxtext";
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Register from "@/Pages/Register";

function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();
  const [data, setdata] = useState({
    err: "",
    data: "",
  });
  const [user, setuser] = useState();
  const FormdataClients = useContext(Formuser);

  const onSubmit = async (dataForm) => {
    setuser(dataForm);
    axios
      .post("http://localhost:3306/auth/user/register", {
        ...dataForm,
      })
      .then((res) => {
        setdata({ ...data, data: res.data });
      })
      .catch((er) => {
        setdata({ ...data, err: er });
      });
  };

  return (
    <div className="m-15 flex justify-center bg-blue-200  rounded-2xl p-15">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <Label> Name</Label>
        <Input
          {...register("firstName", {
            required: true,
          })}
          placeholder="Doe"
          id="firstName"
        ></Input>
        <Label> Last Name </Label>
        <Input
          {...register("lastName", {
            required: true,
          })}
          placeholder="John"
          id="lastName"
        ></Input>

        <Label>Email</Label>
        <Input
          {...register("email", {
            required: true,
          })}
          {...(errors.email && (
            <div>
              <p> {errors.email.message} </p>
            </div>
          ))}
          id="email"
          // type="email"
          placeholder="example@homail.com"
        ></Input>

        <Label>Password</Label>
        <Input
          {...register("pass", {
            required: true,
            minLength: 8,
            pattern: {
              message: "please entry 8 character ! ",
            },
          })}
          placeholder="*********"
          type="password"
          id="password"
        ></Input>
        <br></br>
        <Button className="w-[215px]" variant="outline">
          {" "}
          Sign-up
        </Button>
        <ProviderFormUser></ProviderFormUser>
      </form>
    </div>
  );
}

export default FormRegister;
