import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseLoginProps } from "./models";
import { schema } from "./login.schema";


export default function useLogin({ onValues }: UseLoginProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cpf: '',
      password: '',
    },
    resolver: yupResolver(schema)
  });

  function onSubmit(data: any) {
    onValues(data.cpf, data.password);
  }

  return { control, errors, handleSubmit, onSubmit };
};
