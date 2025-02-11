// haal de data op
const API_URL = "https://pgm.cmsdevelopment.be/api/student";

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

async function getRandomStudent() {
  const resp = await fetch(testAPIurl);
  const data = await resp.json();
  console.log(data.students[randomIndex(data.students)]);
}

// getRandomStudent();

// mijn gegevens
const myself = {
  firstname: "Frederick",
  lastname: "Roegiers",
  nickname: "F-Rogers",
  classname: "PGM-78",
  email: "frederick@rogerthat.be",
  age: 21,
  avatar:
    "https://ahsdevelopers.github.io/zeghetmetkleur/assets/images/team/ZegHetMetKleur-Frederick-Roegiers.webp",
  motto: "Yamaha XJ600",
  about: "I like big problems and I cannot lie",
  hobbies: ["haken", "breien", "kantklossen"],
};

// Maak een functie die jouw persoonlijke data naar de API stuurt (zoals Maarten 'Baller' Ighade)
async function addDocent() {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(myself),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    // b4e6c1bf-ffc7-47ef-b882-8dcc85a53833

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

addDocent();
