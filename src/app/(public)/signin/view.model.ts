import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseSigninProps } from "./models";
import { schema } from "./signin.schema";


export default function useSignin({ onValues }: UseSigninProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cpf: '',
      email: '',
      name: '',
      password: '',
      passwordConfirm: '',
    },
    resolver: yupResolver(schema)
  });

  function onSubmit(data: any) {
    onValues(data.cpf, data.email, data.name, data.password);
  }

  return { control, errors, handleSubmit, onSubmit };
};
