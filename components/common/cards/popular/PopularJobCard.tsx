import React from "react";
import { View, Text } from "react-native";

import styles from "./popularjobcard.style";

interface PopularJobCardProps {
  item: number;
  job_id: any;
}

export default function PopularJobCard({ item }: PopularJobCardProps) {
  return (
    <View>
      <Text>PopularJobCard</Text>
    </View>
  );
}
