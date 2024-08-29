const divEle = document.querySelector(".card-container");

//Initiated a get request
const getDetails = async (id) => {
  const data = await fetch(`https://dummyjson.com/users/${id}`);

  if (!data.ok) {
    throw new Error("Failed to fetch the data");
  } else {
    return data.json();
  }
};

const makeCard = (data) => {
  const card = document.createElement("div");
  card.classList.add("user-card");

  const cardItems = `<img class="image" src="${data.image}" alt="Profile Image" />
      <h3>${data.firstName}</h3>
      <h3>${data.lastName}</h3>
      <p class="email">${data.email}</p>
      <button class="btn">View Profile</button>`;

  card.innerHTML = cardItems;
  divEle.appendChild(card);
};

const createCards = async (arr) => {
  try {
    const users = await Promise.all(arr.map((id) => getDetails(id)));
    users.forEach((item) => makeCard(item));
  } catch (error) {
    console.log("Error fetching the data");
  }
};

createCards([4, 7, 15, 26, 35, 37, 39]);
