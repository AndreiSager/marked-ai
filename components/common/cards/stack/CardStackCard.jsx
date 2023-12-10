import { View, Text, TouchableOpacity } from "react-native";

import styles from "./cardstackcard.style";

const CardStackCard = ({ id, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.stackThumbnail}></TouchableOpacity>
      <Text style={styles.stackTitle} numberOfLines={2}>
        {id}
      </Text>
    </View>
  );
};

export default CardStackCard;
