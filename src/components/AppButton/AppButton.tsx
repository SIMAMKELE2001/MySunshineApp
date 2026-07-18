import { Pressable, StyleSheet, Text } from "react-native";
import { Colors, Radius, Spacing, Typography } from "../../theme";

type AppButtonProps = {
  title: string;
  onPress: () => void;
};

export default function AppButton({ title, onPress }: AppButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: Radius.md,
    alignItems: "center",
  },

  text: {
    color: Colors.white,
    fontSize: Typography.body,
    fontWeight: "600",
  },
});
