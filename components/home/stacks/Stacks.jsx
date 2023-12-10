import { View, Text, TouchableOpacity } from "react-native";

import styles from "./stacks.style";

const Stacks = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Stacks of Cards</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Stacks;
