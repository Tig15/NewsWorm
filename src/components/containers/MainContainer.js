import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { colors } from "../../config/Theme";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const MainContainer = ({ children, style, ...props }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={activeColors.PRIMA} />
      <ScrollView
        style={[{ backgroundColor: activeColors.TERT }, style]}
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
