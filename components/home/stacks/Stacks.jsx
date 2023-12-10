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
  {
    id: "5",
    title: "Science",
  },
  {
    id: "6",
    title: "Math",
  },
  {
    id: "7",
    title: "Algorithms",
  },
  {
    id: "8",
    title: "Leetcode",
  },
];

const Stacks = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Text>Sort</Text>
        </TouchableOpacity>
      </View>
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
