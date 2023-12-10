import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "28%",
    margin: SIZES.xSmall,
    rowGap: 6,
  },
  stackThumbnail: {
    width: "100%",
    aspectRatio: 0.8,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
  },
  stackTitle: {
    width: "100%",
    textAlign: "center",
  },
});

export default styles;