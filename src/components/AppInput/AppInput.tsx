import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import { Colors, Radius, Spacing, Typography } from "../../theme";
import { Ionicons } from "@expo/vector-icons";

type AppInputProps = TextInputProps & {
  label: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  isPassword?: boolean;
};

export default function AppInput({
  label,
  leftIcon,
  isPassword = false,
   ...props
}: AppInputProps) {
  const [hidePassword, setHidePassword] = useState(isPassword);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={22}
            color={Colors.textSecondary}
            style={styles.icon}
          />
        )}

        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.textSecondary}
          secureTextEntry={hidePassword}
          {...props}
        />
        {isPassword && (
          <Pressable onPress={() => setHidePassword(!hidePassword)}>
            <Ionicons
              name={hidePassword ? "eye-off" : "eye"}
              size={22}
              color={Colors.textSecondary}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },

  label: {
    fontSize: Typography.body,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
    fontWeight: "600",
  },

  input: {
    flex: 1,
    fontSize: Typography.body,
    color: Colors.textPrimary,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: Colors.primary,

    borderRadius: Radius.md,

    backgroundColor: Colors.white,

    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  icon: {
    marginRight: Spacing.sm,
  },
});
