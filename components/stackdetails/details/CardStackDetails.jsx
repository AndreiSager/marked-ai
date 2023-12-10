import { View, Text } from "react-native";

import styles from "./cardstackdetails.style";

const CardStackDetails = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text>Thumbnail</Text>
        <View>
          <Text style={styles.stackTitle}>Title</Text>
          <Text>Description</Text>
        </View>
      </View>
      <Text>Tags</Text>
    </View>
  );
};

export default CardStackDetails;
