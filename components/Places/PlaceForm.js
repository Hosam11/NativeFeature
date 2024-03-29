import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { Place } from "../../models/place";

export default function PlaceForm({ onPlaceAdded }) {
  const [enterdTitle, setEnteredTitle] = useState();
  const [pickedLocation, setPickedLocation] = useState();
  const [selectedImage, setSelectedImage] = useState();

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function selectImageHandler(image) {
    setSelectedImage(image);
  }

  const onPickLocation = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  function savePlaceHandler() {
    console.log(enterdTitle, pickedLocation, selectedImage);

    const place = new Place(enterdTitle, selectedImage, pickedLocation);

    onPlaceAdded(place);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}> Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enterdTitle}
        />
      </View>
      <ImagePicker onSelecteImageHandler={selectImageHandler} />
      <LocationPicker onPickLocation={onPickLocation} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
