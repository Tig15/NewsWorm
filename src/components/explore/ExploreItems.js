import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../config/Theme";
import StyledText from "../texts/StyledText";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ExploreItems = ({ image, type, ...props }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <TouchableOpacity
      style={[
        { backgroundColor: activeColors.PRIMA, borderColor: activeColors.DORK },
        styles.container,
      ]}
      {...props}
    >
      <Image style={styles.img} source={{ uri: image }} />
      <View style={styles.insider}>
        <Text style={[{ color: activeColors.SECO }, styles.type]}>
          {" "}
          {type}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: 110,
    marginRight: 20,
    borderRadius: 70,
    overflow: "hidden",
    borderWidth: 1.5,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.3,
  },
  insider: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  type: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ExploreItems;
