import { Text, StyleSheet } from "react-native";
import { Colors, Typography } from "../../theme";

export default function AppTitle() {
  return <Text style={styles.title}>My Sunshine</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: Colors.primary,
    fontSize: Typography.title,
    fontWeight: "bold",
  },
});
