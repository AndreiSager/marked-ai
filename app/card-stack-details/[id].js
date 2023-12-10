import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import CardStack from "../../components/stackdetails/stack/CardStack";

import { ScreenHeaderBtn } from "../../components";

import { COLORS, SIZES, icons } from "../../constants";

const CardStackDetails = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.chevronLeft}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView>
          <View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text>Thumbnail</Text>
              <View>
                <Text>Title</Text>
                <Text>Description</Text>
              </View>
            </View>
            <Text>Tags</Text>
          </View>

          <CardStack />
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default CardStackDetails;
