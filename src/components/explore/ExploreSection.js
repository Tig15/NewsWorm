import { FlatList } from "react-native";
import ExploreItems from "./ExploreItems";

const ExploreSection = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={(item) => <ExploreItems {...item.item} />}
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

export default ExploreSection;
