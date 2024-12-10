import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [fetchedData, seFetchedData] = useState({
    isLoading: false,
    data: initialValue,
    error: false,
  });

  useEffect(() => {
    // fetch("http://localhost:3000/places")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data, "hi");
    //     setAvilablPlaces(data.places);
    //   });

    (async () => {
      seFetchedData((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      try {
        const data = await fetchFn();
        seFetchedData((prevState) => ({
          ...prevState,
          data,
          isLoading: false,
        }));
      } catch (e) {
        seFetchedData((prevState) => ({
          ...prevState,
          error: {
            message: e.message || "Something Wrong With Fetching Data",
          },
        }));
      }
    })();
  }, []);

  return { ...fetchedData, seFetchedData };
}
