import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceIem from "./PlaceItem";
import { Colors } from "../../constants/colors";

export default function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.fallbackText}> No places found </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceIem place={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  fallbackText: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.primary200,
  },
});
