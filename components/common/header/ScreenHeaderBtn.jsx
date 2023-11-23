import React from "react";
import { TouchableOpacity, Image, ImageProps } from "react-native";

import styles from "./screenheader.style";

interface ScreenHeaderBtnProps {
  iconUrl: ImageProps;
  dimension: string;
  handlePress: () => {};
}
export default function ScreenHeaderBtn({
  iconUrl,
  dimension,
  handlePress,
}: ScreenHeaderBtnProps) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
}
