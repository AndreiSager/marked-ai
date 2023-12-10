import { View, Text, TouchableOpacity } from "react-native";

import styles from "./cardstackscard.style";

const CardStacksCard = ({ id, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.stackThumbnail}></TouchableOpacity>
      <Text style={styles.stackTitle} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
};

export default CardStacksCard;
