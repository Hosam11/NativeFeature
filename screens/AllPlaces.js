import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

export default function AllPlaces({ route }) {
  const [allPlaces, setPlace] = useState([]);
  const isFocus = useIsFocused();

  useEffect(() => {
    if (route.params && isFocus) {
      setPlace((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocus, route]);

  return <PlacesList places={allPlaces} />;
}
