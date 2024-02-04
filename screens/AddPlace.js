import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

export default function AddPlace({ navigation }) {
  async function addPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces", { place: place });
  }

  return <PlaceForm onPlaceAdded={addPlaceHandler} />;
}
