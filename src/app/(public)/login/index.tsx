import { useContext } from "react";
import { SafeAreaView, View } from "react-native";
import { useRouter } from "expo-router";
import { Controller } from "react-hook-form";
import useLogin from "./view.model";
import { ThemeContext } from "@/context/ThemeContext";
import { AuthContext } from "@/context/AuthContext";
import TextInput from "@/components/TextInput/view";
import Button from "@/components/Button/view";
import { styles } from "./styles";

export default function Login() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { isLoading, onLogin } = useContext(AuthContext);

  const {
    control,
    errors,
    handleSubmit,
    onSubmit
  } = useLogin({ onValues: onLogin });

  function goTo(path: string) {
    router.replace(path);
  };

  return (
    <SafeAreaView style={{
      ...styles.container,
      backgroundColor: theme.surface.surface,
    }}>
      <View style={styles.main}>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="CPF"
                type="number-pad"
                error={errors.cpf?.message}
                accessibilityLabel="Campo de Números para CPF"
                accessibilityHint="Campo de Números para digitar seu CPF para Logar no CADASTRAAQUI"
              />
            )}
            name="cpf"
          />
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Senha"
                isPassword
                error={errors.password?.message}
                accessibilityLabel="Campo de Texto para Senha"
                accessibilityHint="Campo de Texto para digitar sua senha para Logar no CADASTRAAQUI"
              />
            )}
            name="password"
          />
        </View>

        <View style={styles.btnContainerContained}>
          <Button
            type="contained"
            label="Entrar"
            loading={isLoading}
            onPress={handleSubmit(onSubmit)}
            accessibilityLabel="Botão para Logar"
            accessibilityHint="Botão com ação para fazer login no CADASTRAAQUI"
          />
        </View>
        <View style={styles.btnContainerText}>
          <Button
            type="text"
            label="Não possui conta? Cadastrar"
            onPress={() => goTo('/signin')}
            accessibilityLabel="Botão navegar cadastrar"
            accessibilityHint="Botão para navegar para a tela de Cadastro"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
