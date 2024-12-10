import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../utils/loc.js";
import { fetchAvilablePlaces } from "../utils/http.js";
import { useFetch } from "../hooks/useFetch.js";
import { data } from "autoprefixer";

async function fetchSortedAvilablePlaces() {
  const data = await fetchAvilablePlaces();

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        data.places,
        position.coords.latitude,
        position.coords.longitude
      );

      resolve(sortedPlaces);
    });
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isLoading,
    data: avilablPlaces,
    error,
  } = useFetch(fetchSortedAvilablePlaces, []);
  
  if (error) {
    return (
      <Error
        title="An error occurred!"
        message={error.message}
      />
    );
  }

  return (
    <Places
      title="Available Places"
      places={avilablPlaces}
      isLoading={isLoading}
      loadingContent="Fetching Place Data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

// improved by chatgpt

// import { useEffect, useState } from "react";
// import Places from "./Places.jsx";
// import Error from "./Error.jsx";
// import { sortPlacesByDistance } from "../loc.js";

// export default function AvailablePlaces({ onSelectPlace }) {
//   const [availablePlacesState, setAvailablePlacesState] = useState({
//     isLoading: false,
//     isFetchingLocation: false,
//     places: [],
//     error: null,
//   });

//   const fetchPlaces = async (abortController) => {
//     try {
//       setAvailablePlacesState((prevState) => ({
//         ...prevState,
//         isLoading: true,
//       }));

//       const response = await fetch("http://localhost:3000/places", {
//         signal: abortController.signal,
//       });
//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error("Failed to fetch places");
//       }
//       return data.places;
//     } catch (error) {
//       if (error.name !== "AbortError") {
//         throw error;
//       }
//     }
//   };

//   const fetchUserLocation = (places) => {
//     setAvailablePlacesState((prevState) => ({
//       ...prevState,
//       isFetchingLocation: true,
//     }));

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const sortedPlaces = sortPlacesByDistance(
//           places,
//           position.coords.latitude,
//           position.coords.longitude
//         );

//         setAvailablePlacesState((prevState) => ({
//           ...prevState,
//           isLoading: false,
//           isFetchingLocation: false,
//           places: sortedPlaces,
//         }));
//       },
//       (error) => {
//         setAvailablePlacesState((prevState) => ({
//           ...prevState,
//           isLoading: false,
//           isFetchingLocation: false,
//           error: {
//             message:
//               error.message || "Unable to fetch your location. Please try again!",
//           },
//         }));
//       }
//     );
//   };

//   useEffect(() => {
//     const abortController = new AbortController();

//     (async () => {
//       try {
//         const places = await fetchPlaces(abortController);
//         if (places) {
//           fetchUserLocation(places);
//         }
//       } catch (error) {
//         setAvailablePlacesState((prevState) => ({
//           ...prevState,
//           isLoading: false,
//           error: {
//             message: error.message || "Something went wrong. Please try again!",
//           },
//         }));
//       }
//     })();

//     return () => abortController.abort(); // Cleanup on unmount
//   }, []);

//   if (availablePlacesState.error) {
//     return (
//       <Error
//         title="An error occurred!"
//         message={availablePlacesState.error.message}
//       />
//     );
//   }

//   return (
//     <Places
//       title="Available Places"
//       places={availablePlacesState.places}
//       isLoading={availablePlacesState.isLoading || availablePlacesState.isFetchingLocation}
//       loadingContent={
//         availablePlacesState.isFetchingLocation
//           ? "Fetching your location..."
//           : "Fetching Place Data..."
//       }
//       fallbackText="No places available."
//       onSelectPlace={onSelectPlace}
//     />
//   );
// }
