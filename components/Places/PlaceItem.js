import { Image, Pressable, Text, View } from "react-native";

export default function PlaceIem({ place, onSelect }) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={place.uri} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address} </Text>
      </View>
    </Pressable>
  );
}
