import * as yup from "yup";

export const schema = yup.object({
  cpf: yup
    .string()
    .min(11, "CPF deve ser válido!")
    .max(11, "CPF deve ser válido!")
    .required("Campo obrigatório!"),
  email: yup
    .string()
    .email("E-mail deve ser válido!")
    .required("Campo obrigatório!"),
  name: yup
    .string()
    .min(8, "Mínimo de 8 caracteres!")
    .required("Campo obrigatório!"),
  password: yup
    .string()
    .min(8, "Mínimo de 8 caracteres!")
    .required("Campo obrigatório!"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), undefined], "Senhas devem ser iguais!")
    .required("Campo obrigatório!"),
});
