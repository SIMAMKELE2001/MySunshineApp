import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import { Colors, Radius, Spacing, Typography } from "../../theme";

type AppInputProps = TextInputProps & {
  label: string;
};

export default function AppInput({ label, ...props }: AppInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.textSecondary}
        {...props}
      />
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
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    fontSize: Typography.body,
    backgroundColor: Colors.white,
    color: Colors.textPrimary,
  },
});
