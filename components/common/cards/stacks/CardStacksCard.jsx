import { View, Text, TouchableOpacity } from "react-native";

import styles from "./cardstackscard.style";

const CardStacksCard = ({ item, id, title, handleCardStackPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.stackThumbnail}
        onPress={() => handleCardStackPress(item)}
      />
      <Text style={styles.stackTitle} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
};

export default CardStacksCard;
