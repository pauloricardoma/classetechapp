import { Controller } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ResetProps } from "./models";
import useResetPassword from "./view.model";
import { styles } from "./styles";
import { useRouter } from "expo-router";

export default function ResetPassword({ onValues }: ResetProps) {
  const router = useRouter();
  const {
    control,
    errors,
    handleSubmit,
    onSubmit
  } = useResetPassword({ onValues });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="E-mail"
              keyboardType="email-address"
              accessibilityLabel="Campo de Texto para E-mail"
              accessibilityHint="Campo de Texto para digitar e-mail para troca de senha"
            />
            {errors.email && (
            <Text>
              Campo obrigatório
            </Text>
            )}
          </>
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Senha Atual"
              secureTextEntry
              accessibilityLabel="Campo de Texto para Senha"
              accessibilityHint="Campo de Texto para digitar senha atual para alterar a nova"
            />
            {errors.currentPassword && (
            <Text>
              Campo obrigatório
            </Text>
            )}
          </>
        )}
        name="currentPassword"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nova Senha"
              secureTextEntry
              accessibilityLabel="Campo de Texto para Senha"
              accessibilityHint="Campo de Texto para digitar nova senha a ser cadastrada"
            />
            {errors.currentPassword && (
            <Text>
              Campo obrigatório
            </Text>
            )}
          </>
        )}
        name="newPassword"
      />

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        accessibilityLabel="Botão para trocar Senha"
        accessibilityHint="Botão com ação para iniciar a troca de senha">
        Trocar senha
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/reset')}
        accessibilityLabel="Botão Voltar ao Login"
        accessibilityHint="Botão para Voltar a Tela de Login">
        Voltar login
      </TouchableOpacity>
    </View>
  );
}
