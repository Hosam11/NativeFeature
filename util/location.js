const GOOGLE_API_KEY = "AIzaSyCc7vaGUVU7HQJRavRfu7P4Ph2BhC6Xxco";

export function getMapPreview(lat, lng) {
  console.log(lat, lng);
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}zoom=&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
}

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }

  const data = await response.json();
  // console.log("\ndata:", data, "\n");
  const address = data.results[0].formatted_address;
  console.log(address);
  return address;
}
