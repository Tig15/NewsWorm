import { FlatList } from "react-native";
import FeedItems from "./FeedItems";

const FeedSection = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={(item) => <FeedItems {...item.item} />}
      keyExtractor={(item, index) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={{
        paddingTop: 25,
        paddingLeft: 25,
      }}
    />
  );
};

export default FeedSection;
