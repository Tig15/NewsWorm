import { StyleSheet, Text, View } from "react-native";

// components
import MainContainer from "../components/containers/MainContainer";
import StyledText from "../components/texts/StyledText";
import FeedSection from "../components/feeds/FeedSection";
import ExploreSection from "../components/explore/ExploreSection";

//config
import { post } from "../config/Data";
import { explore } from "../config/Type";

export default function Home() {
  return (
    <MainContainer>
      <StyledText big style={styles.header}>
        Card-Feeds
      </StyledText>
      <FeedSection data={post} />
      <StyledText big style={styles.header}>
        Explore
      </StyledText>
      <ExploreSection data={explore} />
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginLeft: 20,
  },
});
