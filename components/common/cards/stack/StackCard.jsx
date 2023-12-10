import { View, Text } from "react-native";

import styles from "./stackcard.style";

const StackCard = ({ id, title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default StackCard;
