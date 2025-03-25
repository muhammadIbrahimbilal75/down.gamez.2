// Games data
const games = {
  "Action Games": [
    "GTA San Andreas", "GTA Vice City", "GTA III", "GTA Liberty City Stories", "GTA Chinatown Wars",
    "Call of Duty Mobile", "PUBG Mobile", "Free Fire", "Fortnite Mobile", "Gangstar Vegas",
    "Gangstar New Orleans", "Max Payne Mobile", "Bully: Anniversary Edition", "Modern Combat 5",
    "Apex Legends Mobile", "Dead Effect 2", "Dead Trigger 2", "Shadowgun Legends", "Into the Dead 2", "N.O.V.A. Legacy"
  ],
  "Racing Games": [
    "Asphalt 9: Legends", "Asphalt 8: Airborne", "Need for Speed: No Limits", "Real Racing 3", "CSR Racing 2",
    "Grid Autosport", "F1 Mobile Racing", "Mario Kart Tour", "Beach Buggy Racing 2", "Horizon Chase - World Tour",
    "Drift Max Pro", "CarX Highway Racing", "Need for Speed: Most Wanted", "Rally Fury", "Traffic Rider"
  ]
};

// Function to generate game links
function generateGameLinks(category, gamesList) {
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  heading.textContent = category;
  section.appendChild(heading);

  const list = document.createElement("ul");
  gamesList.forEach(game => {
    const listItem = document.createElement("li");
    const apkpureLink = document.createElement("a");
    apkpureLink.href = `https://apkpure.com/search?q=${encodeURIComponent(game)}`;
    apkpureLink.textContent = `${game} (APKPure)`;
    apkpureLink.target = "_blank";

    const apkmirrorLink = document.createElement("a");
    apkmirrorLink.href = `https://www.apkmirror.com/?s=${encodeURIComponent(game)}`;
    apkmirrorLink.textContent = `${game} (APKmirror)`;
    apkmirrorLink.target = "_blank";

    listItem.appendChild(apkpureLink);
    listItem.appendChild(document.createTextNode(" | "));
    listItem.appendChild(apkmirrorLink);
    list.appendChild(listItem);
  });

  section.appendChild(list);
  return section;
}

// Render all games
const gamesListSection = document.getElementById("games-list");
for (const [category, gamesList] of Object.entries(games)) {
  gamesListSection.appendChild(generateGameLinks(category, gamesList));
}
