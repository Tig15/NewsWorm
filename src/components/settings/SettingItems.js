import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../config/Theme";
import StyledText from "../texts/StyledText";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const SettingItems = ({ children, label }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <View style={[{ backgroundColor: activeColors.NAV }, styles.settingItems]}>
      <StyledText style={[{ color: activeColors.TINT }, styles.label]}>
        {label}
      </StyledText>
      {children}
    </View>
  );
};

export default SettingItems;

const styles = StyleSheet.create({
  settingItems: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    marginHorizontal: 10,
    marginBottom: 2,
  },
  label: {
    fontStyle: "italic",
  },
});
