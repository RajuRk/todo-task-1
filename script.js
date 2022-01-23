async function getFoods() {
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    { method: "GET" }
  );
  const meals = await data.json();
  const randomMeals = meals.categories;
  return randomMeals;
}

getFoods();

async function displayFoods() {
  const users = await getFoods();
  const userList = document.querySelector(".user-list");
  userList.innerHTML = "";
  users.forEach((user) => {
    userList.innerHTML += `
         <div class="card-columns">
          <div class="card">
            <img class="card-img-top" src="${user.strCategoryThumb}" alt="${user.strCategory}">
            <div class="card-body">
              <h4 class="card-title">${user.strCategory}</h4>
              <p>${user.strCategoryDescription}</p>
            </div>
          </div>
        </div>`;
  });
}

displayFoods();