import { View, Text } from "react-native";

import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../constants";

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

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  stackThumbnail: {
    aspectRatio: 1,
  },
  stackTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  stackDescription: {},
  stackTags: {},
  stackTag: {},
});
