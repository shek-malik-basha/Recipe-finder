const BASE_URL =
  "https://www.themealdb.com/api/json/v1/1";

export async function searchMeals(query) {
  const response = await fetch(
    `${BASE_URL}/search.php?s=${query}`
  );

  const data = await response.json();

  return data.meals || [];
}
export async function getMealById(id) {
  const response = await fetch(
    `${BASE_URL}/lookup.php?i=${id}`
  );

  const data = await response.json();

  return data.meals[0];
}
export async function getRandomMeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );

  const data = await response.json();

  return data.meals[0];
}