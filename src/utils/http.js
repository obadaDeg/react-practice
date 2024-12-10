export async function fetchAvilablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Faild to fetch places");
  }

  return data;
}

export async function updateAvilablePlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to update user data.');
  }

  

  return resData;
}
