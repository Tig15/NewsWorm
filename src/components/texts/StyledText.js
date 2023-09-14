import { StyleSheet, Text } from "react-native";
import { colors } from "../../config/Theme";

const StyledText = ({ children, style, small, big, bold, ...props }) => {
  return (
    <Text
      style={[
        {
          color: colors.TINT,
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
