import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../config/Theme";
import StyledText from "../texts/StyledText";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const FeedItems = ({
  image,
  title,
  author,
  profile,
  date,
  content,
  description,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[{ backgroundColor: activeColors.PRIMA }, styles.container]}
      {...props}
      onPress={() =>
        navigation.navigate("Details", {
          image,
          title,
          author,
          profile,
          date,
          content,
          description,
        })
      }
    >
      <Image style={styles.img} source={{ uri: image }} />
      <View style={styles.textContent}>
        <StyledText bold>{title}</StyledText>
        <View style={styles.details}>
          <Image style={styles.profile} source={{ uri: profile }} />
          <Text style={[{ color: activeColors.SECO }, styles.textContainer]}>
            {author}
          </Text>
        </View>
        <View style={styles.pub}>
          <Text style={[{ color: activeColors.TINT }, styles.published]}>
            {date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeedItems;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 250,
    marginRight: 20,
    borderRadius: 25,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 120,
    objectFit: "fill",
  },
  textContent: {
    padding: 10,
  },
  details: {
    position: "absolute",
    top: 110,
    left: 20,
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 30,
    objectFit: "cover",
  },
  textContainer: {
    fontSize: 14,
    marginTop: 10,
  },
  pub: {
    width: "100%",
    position: "absolute",
    top: 160,
    left: 130,
  },
  published: {
    fontSize: 10,
    opacity: 0.4,
  },
});
