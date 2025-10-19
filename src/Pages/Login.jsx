import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormLogin from "@/subcomponent/FormLogin";
import axios from "axios";
import { CpuIcon } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "example@hotmail.com",
      pass: " *******",
    },
  });

  return <FormLogin />;
}

export default Login;
