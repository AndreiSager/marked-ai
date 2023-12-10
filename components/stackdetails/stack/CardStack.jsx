import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./cardstack.style";
import CardStackCard from "../../common/cards/stack/CardStackCard";

const CardStack = () => {
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

    {
      id: "9",
      title: "Science",
    },
    {
      id: "10",
      title: "Math",
    },
    {
      id: "11",
      title: "Algorithms",
    },
    {
      id: "12",
      title: "Leetcode",
    },
    {
      id: "13",
      title: "Leetcode Of The Century Some More Depression",
    },
  ];

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Text>Sort</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={stacksExample}
        numColumns={3}
        renderItem={({ item }) => (
          <CardStackCard id={item.id} title={item.title} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CardStack;
