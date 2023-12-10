import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./stacks.style";
import StackCard from "../../common/cards/stack/StackCard";

const stacksExample = [
  {
    id: "1",
    title: "Science",
  },
  {
    id: "2",
    title: "Math",
  },
  {
    id: "3",
    title: "Algorithms",
  },
  {
    id: "4",
    title: "Leetcode",
  },
];

const Stacks = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Stacks of Cards</Text>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={{}}
        data={stacksExample}
        numColumns={3}
        renderItem={({ item }) => <StackCard id={item.id} title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Stacks;
