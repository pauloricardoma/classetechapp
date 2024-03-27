import { useContext } from "react";
import { SafeAreaView, View } from "react-native";
import { useRouter } from "expo-router";
import { Controller } from "react-hook-form";
import useSignin from "./view.model";
import { ThemeContext } from "@/context/ThemeContext";
import { AuthContext } from "@/context/AuthContext";
import TextInput from "@/components/TextInput/view";
import Button from "@/components/Button/view";
import { styles } from "./styles";

export default function Signin() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { isLoading, onSignin } = useContext(AuthContext);

  const {
    control,
    errors,
    handleSubmit,
    onSubmit
  } = useSignin({ onValues: onSignin });

  function goTo(path: string) {
    router.replace(path);
  };

  return (
    <SafeAreaView style={{
      ...styles.container,
      backgroundColor: theme.surface.surface
    }}>
      <View style={styles.main}>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="CPF"
                type="number-pad"
                error={errors.cpf?.message}
                accessibilityLabel="Campo de Números para CPF"
                accessibilityHint="Campo de Números para digitar seu CPF para cadastrar no CADASTRAAQUI"
              />
            )}
            name="cpf"
          />
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="E-mail"
                type="email-address"
                error={errors.email?.message}
                accessibilityLabel="Campo de Texto para E-mail"
                accessibilityHint="Campo de Texto para digitar seu e-mail para cadastrar no CADASTRAAQUI"
              />
            )}
            name="email"
          />
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Nome"
                error={errors.name?.message}
                accessibilityLabel="Campo de Texto para Nome"
                accessibilityHint="Campo de Texto para digitar seu nome para cadastrar no CADASTRAAQUI"
              />
            )}
            name="name"
          />
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Senha"
                isPassword
                error={errors.password?.message}
                accessibilityLabel="Campo de Texto para Senha"
                accessibilityHint="Campo de Texto para digitar sua senha para cadastrar no CADASTRAAQUI"
              />
            )}
            name="password"
          />
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Repetir Senha"
                isPassword
                error={errors.passwordConfirm?.message}
                accessibilityLabel="Campo de Texto para Repetir Senha"
                accessibilityHint="Campo de Texto para digitar sua senha novamente para cadastrar no CADASTRAAQUI"
              />
            )}
            name="passwordConfirm"
          />
        </View>

        <View style={styles.btnContainerContained}>
          <Button
            type="contained"
            label="Cadastrar"
            loading={isLoading}
            onPress={handleSubmit(onSubmit)}
            accessibilityLabel="Botão para Cadastrar"
            accessibilityHint="Botão com ação para fazer cadastro no CADASTRAAQUI"
          />
        </View>
        <View style={styles.btnContainerText}>
          <Button
            type="text"
            label="Já possui conta? Entrar"
            onPress={() => goTo('/login')}
            accessibilityLabel="Botão navegar entrar"
            accessibilityHint="Botão para navegar para a tela de Cadastro"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
