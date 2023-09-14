import { StyleSheet, Switch, View } from "react-native";

// components
import MainContainer from "../components/containers/MainContainer";
import StyledText from "../components/texts/StyledText";
import SettingItems from "../components/settings/SettingItems";
import { colors } from "../config/Theme";
import { useContext, useState } from "react";
import SettingButtons from "../components/settings/SettingButtons";
import { ThemeContext } from "../context/ThemeContext";

export default function Settings() {
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const [isActive, setIsActive] = useState(theme.mode === "dark");

  const handleSwitch = () => {
    updateTheme();
    setIsActive((previousState) => !previousState);
  };

  const date = new Date().toDateString();

  return (
    <MainContainer style={styles.container}>
      <StyledText style={styles.header} big>
        User
      </StyledText>
      <View style={styles.section}>
        <SettingItems label="Name">
          <StyledText small>Aman Srivastava</StyledText>
        </SettingItems>
        <SettingItems label="Joined On">
          <StyledText small>{date}</StyledText>
        </SettingItems>
      </View>

      <StyledText style={styles.header} big>
        Theme Switch
      </StyledText>
      <View style={styles.section}>
        <SettingItems label="Theme">
          <Switch
            value={isActive}
            onValueChange={handleSwitch}
            thumbColor={isActive ? activeColors.DORK : activeColors.TINT}
            trackColor={{
              false: "skyblue",
              true: activeColors.TINT,
            }}
          />
        </SettingItems>
      </View>

      <StyledText style={styles.header} big>
        Theme Settings
      </StyledText>
      <View style={styles.section}>
        <SettingButtons
          label="Light"
          icon="lightbulb-on"
          isActive={theme.mode === "light" && !theme.system}
          onPress={() => updateTheme({ mode: "light" })}
        />
        <SettingButtons
          label="Dark"
          icon="weather-night"
          isActive={theme.mode === "dark" && !theme.system}
          onPress={() => updateTheme({ mode: "dark" })}
        />
        <SettingButtons
          label="System"
          icon="theme-light-dark"
          isActive={theme.system}
          onPress={() => updateTheme({ system: true })}
        />
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginTop: 20,
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 20,
  },
});
