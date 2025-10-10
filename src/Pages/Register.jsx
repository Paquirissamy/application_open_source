import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormRegister from "@/subcomponent/FormRegister";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();
  return (
    <>
      <FormRegister></FormRegister>
    </>
  );
}

export default Register;
