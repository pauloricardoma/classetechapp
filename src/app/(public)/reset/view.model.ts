import { useForm } from "react-hook-form";
import { UseResetProps } from "./models";


export default function useResetPassword({onValues}: UseResetProps) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      currentPassword: '',
      newPassword: '',
    },
  });

  function onSubmit(data: any) {
    onValues(data);
  }

  return {control, errors, handleSubmit, onSubmit};
};
