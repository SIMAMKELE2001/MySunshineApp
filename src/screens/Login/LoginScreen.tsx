import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import AppButton from "../../components/AppButton/AppButton";
import AppInput from "../../components/AppInput/AppInput";

import { Colors, Spacing, Typography } from "../../theme";

export default function LoginScreen() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log({
      email,
      password,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>☀️</Text>

        <Text style={styles.title}>Welcome Back</Text>

        <Text style={styles.subtitle}>Sign in to continue</Text>

        <AppInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <AppInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </Pressable>

        <AppButton title="Login" onPress={handleLogin} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>

          <Pressable>
            <Text style={styles.register}>Register</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    padding: Spacing.lg,
  },

  logo: {
    fontSize: 70,
    textAlign: "center",
  },

  title: {
    fontSize: Typography.title,
    color: Colors.primary,
    fontWeight: "700",
    textAlign: "center",
    marginTop: Spacing.md,
  },

  subtitle: {
    textAlign: "center",
    fontSize: Typography.body,
    color: Colors.textSecondary,
    marginBottom: Spacing.xl,
  },

  forgotPassword: {
    textAlign: "right",
    color: Colors.primary,
    marginBottom: Spacing.lg,
    fontWeight: "600",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Spacing.xl,
  },

  footerText: {
    color: Colors.textSecondary,
  },

  register: {
    color: Colors.primary,
    marginLeft: 5,
    fontWeight: "700",
  },
});
 