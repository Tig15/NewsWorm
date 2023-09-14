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
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Details({ route }) {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const { image, title, author, profile, date, content, description } =
    route?.params;

  return (
    <MainContainer
      style={[{ backgroundColor: activeColors.PRIMA }, styles.container]}
    >
      <Image style={styles.img} source={{ uri: image }} />
      <View
        style={[{ backgroundColor: activeColors.PRIMA }, styles.textContent]}
      >
        <StyledText style={styles.title} bold>
          {title}
        </StyledText>
        <View style={styles.content}>
          <Text
            style={{
              width: "100%",
              marginBottom: 20,
              color: activeColors.SECO,
            }}
          >
            {description}
          </Text>
          <Text style={{ width: "100%", color: activeColors.SECO }}>
            {content}
          </Text>
        </View>
        <View style={styles.details}>
          <Image style={styles.profile} source={{ uri: profile }} />
          <Text style={[{ color: activeColors.TINT }, styles.textContainer]}>
            {author}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: activeColors.TINT,
            width: "42%",
            padding: 6,
            position: "absolute",
            top: 370,
            right: 20,
          }}
          onPress={() => Linking.openURL(url)}
        >
          <Text style={{ fontSize: 12, color: activeColors.ACC }}>
            Check Out More On This
          </Text>
        </TouchableOpacity>
        <View style={styles.pub}>
          <Text style={styles.published}>{date}</Text>
        </View>
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  img: {
    width: "100%",
    height: 300,
  },
  textContent: {
    flex: 1,
    height: 450,
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    top: -30,
  },
  title: {
    paddingHorizontal: 10,
    width: "100%",
  },
  content: {
    marginLeft: 10,
    marginTop: 10,
  },
  details: {
    flexDirection: "row",
    position: "absolute",
    bottom: 45,
    left: 30,
    gap: 10,
  },
  textContainer: {
    marginTop: 10,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    objectFit: "cover",
  },
  pub: {
    position: "absolute",
    top: 4,
    right: 15,
  },
  published: {
    fontSize: 10,
    opacity: 0.4,
  },
});
