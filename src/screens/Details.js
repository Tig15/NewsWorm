import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// components
import MainContainer from "../components/containers/MainContainer";
import StyledText from "../components/texts/StyledText";

//config
import { post } from "../config/Data";
import { colors } from "../config/Theme";

export default function Home() {
  return (
    <MainContainer>
      <Image style={styles.img} source={{ uri: post[0].image }} />
      <View style={styles.textContent}>
        <StyledText bold>{post[0].title}</StyledText>
        <View style={styles.details}>
          <Image style={styles.profile} source={{ uri: post[0].profile }} />
          <Text style={styles.textContainer}>{post[0].author}</Text>
        </View>
        <View style={styles.content}>
          <Text style={{ width: "100%", marginBottom: 20 }}>
            {post[0].description}
          </Text>
          <Text style={{ width: "100%" }}>{post[0].content}</Text>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: colors.TINT,
            width: "42%",
            padding: 6,
            position: "absolute",
            top: 450,
            left: 40,
          }}
          onPress={() => Linking.openURL(post[0].url)}
        >
          <Text style={{ fontSize: 12, color: colors.ACC }}>
            Check Out More On This
          </Text>
        </TouchableOpacity>
        <View style={styles.pub}>
          <Text style={styles.published}>{post[0].date}</Text>
        </View>
      </View>
    </MainContainer>
  );
}

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
    height: 300,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textContent: {
    flex: 1,
    height: 600,
    padding: 20,
    backgroundColor: colors.PRIMA,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    top: -30,
  },
  details: {
    position: "absolute",
    top: 80,
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
    bottom: 80,
    left: 280,
  },
  published: {
    fontSize: 10,
    opacity: 0.4,
  },
  content: {
    marginTop: 80,
    marginLeft: 7,
    padding: 10,
  },
});
