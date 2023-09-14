import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { colors } from "../../config/Theme";

const MainContainer = ({ children, style, ...props }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.PRIMA} barStyle="dark-content" />
      <ScrollView
        style={[{ backgroundColor: colors.TERT }, style]}
        {...props}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
