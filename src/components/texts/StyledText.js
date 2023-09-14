import { StyleSheet, Text } from "react-native";
import { colors } from "../../config/Theme";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const StyledText = ({ children, style, small, big, bold, ...props }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <Text
      style={[
        {
          color: activeColors.TINT,
          fontSize: small ? 14 : big ? 20 : 16,
          fontWeight: bold || big ? "bold" : "normal",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default StyledText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
