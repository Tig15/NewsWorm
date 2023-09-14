import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../config/Theme";
import StyledText from "../texts/StyledText";

const FeedItems = ({ image, title, author, profile, date, ...props }) => {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: colors.PRIMA }, styles.container]}
      {...props}
    >
      <Image style={styles.img} source={{ uri: image }} />
      <View style={styles.textContent}>
        <StyledText bold>{title}</StyledText>
        <View style={styles.details}>
          <Image style={styles.profile} source={{ uri: profile }} />
          <Text style={styles.textContainer}>{author}</Text>
        </View>
        <View style={styles.pub}>
          <Text style={styles.published}>{date}</Text>
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
    color: colors.SECO,
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
