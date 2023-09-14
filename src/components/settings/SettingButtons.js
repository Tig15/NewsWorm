import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../config/Theme";
import StyledText from "../texts/StyledText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const SettingButtons = ({ label, icon, isActive, ...props }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <TouchableOpacity
      style={[{ backgroundColor: activeColors.NAV }, styles.settingItems]}
      {...props}
    >
      <View style={styles.labelGroup}>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={activeColors.TINT}
          style={styles.icon}
        />
        <StyledText style={[{ color: activeColors.TINT }, styles.label]}>
          {label}
        </StyledText>
      </View>
      <MaterialCommunityIcons
        name={
          isActive ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"
        }
        size={24}
        color={isActive ? activeColors.DORK : activeColors.TINT}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default SettingButtons;

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
    marginTop: 2,
  },
  labelGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
