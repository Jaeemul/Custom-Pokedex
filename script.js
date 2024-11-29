const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const image = document.getElementById("pokemon-image");
const types = document.getElementById("types");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");



const fetchPokemon = async () => {
  try {
    const pokemonNameorId = input.value.toLowerCase();
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameorId}`);
    const data = await res.json();
    pokemonName.innerText = data.name.toUpperCase();
    pokemonId.innerText = `#${data.id}`;
    image.innerHTML = `<img id="sprite" src="${data.sprites.front_default}">`
    hp.innerText = data.stats[0].base_stat;
    attack.innerText = data.stats[1].base_stat;
    defense.innerText = data.stats[2].base_stat;
    specialAttack.innerText = data.stats[3].base_stat;
    specialDefense.innerText = data.stats[4].base_stat;
    speed.innerText = data.stats[5].base_stat;
    height.innerText = `Height: ${data.height}`
    weight.innerText = `Weight: ${data.weight}`
    data.types.forEach((type)=>{
      types.innerHTML += `<span id="${type.type.name}" class="types">${type.type.name}</span> `;
    })
    console.log(data)
  } catch (err) {
    alert("Pokémon not found")
    console.log("Pokémon not found."+err);
  }
};

const resetUI =()=>{
  types.innerHTML = "";
}

searchBtn.addEventListener("click", ()=>{
  resetUI();
  fetchPokemon();
});
