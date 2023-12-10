import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

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

export default styles;
