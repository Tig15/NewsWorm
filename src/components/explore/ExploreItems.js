import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../config/Theme";
import StyledText from "../texts/StyledText";

const ExploreItems = ({ image, type, ...props }) => {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: colors.PRIMA }, styles.container]}
      {...props}
    >
      <Image style={styles.img} source={{ uri: image }} />
      <View style={styles.insider}>
        <Text style={styles.type}> {type} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreItems;

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: 110,
    marginRight: 20,
    borderRadius: 70,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: colors.DORK,
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
    color: colors.SECO,
  },
});
