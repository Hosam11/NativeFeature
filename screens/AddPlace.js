import PlaceForm from "../components/Places/PlaceForm";

export default function AddPlace({ navigation }) {
  function addPlaceHandler(place) {
    navigation.navigate("AllPlaces", { place: place });
  }

  return <PlaceForm onPlaceAdded={addPlaceHandler} />;
}
