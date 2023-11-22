import React from "react";
import { View, Text } from "react-native";

import styles from "./popularjobcard.style";

interface PopularJobCardProps {
  item: number;
  job_id?: string;
}

export default function PopularJobCard({ item, job_id }: PopularJobCardProps) {
  return (
    <View>
      <Text>PopularJobCard</Text>
    </View>
  );
}
