import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { Colors, Spacing, Typography } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
    const navigation = useNavigation<any>();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/appIcon.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>My Sunshine</Text>

      <Text style={styles.subtitle}>Organize your day with love ❤️</Text>

      <ActivityIndicator
        size="large"
        color={Colors.primary}
        style={styles.loader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing.lg,
  },

  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: Spacing.lg,
  },

  title: {
    fontSize: Typography.title,
    fontWeight: "700",
    color: Colors.primary,
  },

  subtitle: {
    marginTop: Spacing.sm,
    fontSize: Typography.body,
    color: Colors.textSecondary,
    textAlign: "center",
  },

  loader: {
    marginTop: Spacing.xl,
  },
});
