let pikachu = {
    name: "Pikachu",
    health: 45,
    image: "/Pokemon/Images/pikachu.png",
    level: 8,
  };
  
  let bulbasaur = {
    name: "Bulbasaur",
    health: 70,
    image: "/Pokemon/Images/bulbasaur.png",
    level: 12,
  };
  
  let oranguru = {
    name: "Oranguru",
    health: 170,
    image: "/Pokemon/Images/oranguru.png",
    level: 45,
  };
  
  let drowzee = {
    name: "Drowzee",
    health: 90,
    image: "/Pokemon/Images/drowzee.png",
    level: 33,
  };
  
  let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
  let randomPokemon;
  
  //Skrevet om variablene til objekt
  let player = {
    name: "Bjarne",
    image: "/Pokemon/Images/pokemonTrainerIdle.png",
    pokemon: [],
  };
  //let playerName = "Bjarne";
  //let playerImage = "/Pokemon/Images/pokemonTrainerIdle.png";
  //let playerPokemon = [];
  
  let app = document.getElementById("app");
  
  updateView();
  
  function updateView() {
    getRandomPokemon();
    app.innerHTML = /*HTML*/ `
    <div class="container">
      <div class="opposingPokemon">
          <div>${randomPokemon.name} </div>
          <div>lvl: ${randomPokemon.level}</div>
          <img src="${randomPokemon.image}">
      </div>
      
      <div class="bottomScreen">
          <div class="player">
              <img src="${player.image}"> <!-- (playerImage) -->
              <div>${player.name}</div>   <!-- (playerName) -->
          </div>
  
          <div class="buttonContainer">
              <button onclick="catchPokemon()">Fang</button>    
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>       
          </div>
  
      </div>
    </div>
    `;
  }
  
  function caughtPokemonView() {
    app.innerHTML = /*HTML*/ `
    <div class="caughtContainer">
      <h1>Du fanget ${player.pokemon[player.pokemon.length - 1].name}</h1> <!-- (PlayerPokemon) -->
      <div class="buttonContainer">
                <button onclick="updateView()">Finn en annen</button>
                <button onclick="showPokemon()">Vis dine pokemon</button>       
            </div>
    </div>
    `;
  }
  
  function catchPokemon() {
    player.pokemon.push(randomPokemon);  //(playerPokemon)
    caughtPokemonView();
  }
  //Oppdatert til å vises på siden i tillegg til console (Husk ev CSS)
  function showPokemon() {
    let pokemonList = '';
    for (let i = 0; i < player.pokemon.length; i++) {
      pokemonList += /*HTML*/`
          <div>
              <img src="${player.pokemon[i].image}">${player.pokemon[i].name}
              (health: ${player.pokemon[i].health}, level: ${player.pokemon[i].level})
          </div>
      `;
  }
    app.innerHTML = /*HTML*/ `
    <div class="myCatches">${pokemonList}</div>
    <button onclick="updateView()">Finn en annen</button>
    `;
    console.log(player.pokemon);  //(playerPokemon)
  }
  
  function getRandomPokemon() {
    let randomNum = Math.floor(Math.random() * possiblePokemon.length);
    randomPokemon = possiblePokemon[randomNum];
  }