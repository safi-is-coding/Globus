const pokemonName = document.querySelector('#pokemonName');
const container = document.querySelector('.container');
const filterContainer = document.querySelector('.filterContainer');
const searchBtn = document.querySelector('#search');
const api = "https://pokeapi.co/api/v2/pokemon/?limit=200";

const fetchData = async () => {
    try {
        const response = await fetch(api);
        const data = await response.json();

        container.style.display = 'flex';
        filterContainer.style.display = 'none';
        container.innerHTML = ''; // Clear the container

        data.results.forEach((pokemon, index) => {
            const pokemonId = index + 1;
            container.innerHTML += `
                <div class="card" onclick="redirectToPokemonPage(${pokemonId})">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg" alt="pokemon image" id="pokemonImage">
                    <div class="cardDetails">
                        <p id="pokemonType">#${pokemonId}</p> 
                        <h4 id="charName">${pokemon.name.toUpperCase()}</h4>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        container.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
};

const fetchFilterData = async (pname) => {
    try {
        const response = await fetch(api);
        const data = await response.json();

        const matchedPokemon = data.results.find(pokemon => pokemon.name.toLowerCase() === pname);

        if (matchedPokemon) {
            const pokemonId = data.results.indexOf(matchedPokemon) + 1;

            container.style.display = 'none';
            filterContainer.style.display = 'flex';
            filterContainer.innerHTML = `
                <div class="card" onclick="redirectToPokemonPage(${pokemonId})">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg" alt="pokemon image" id="pokemonImage">
                    <div class="cardDetails">
                        <p id="pokemonType">#${pokemonId}</p> 
                        <h4 id="charName">${matchedPokemon.name.toUpperCase()}</h4>
                    </div>
                </div>
            `;
        } else {
            filterContainer.innerHTML = `<p style="color:red;">Pokemon not found</p>`;
        }
    } catch (error) {
        filterContainer.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
};

pokemonName.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        fetchFilterData(pokemonName.value.toLowerCase());
    }
});

searchBtn.addEventListener('click', () => {
    fetchFilterData(pokemonName.value.toLowerCase());
});

function redirectToPokemonPage(id) {
    window.location.href = `pokemonPage.html?id=${id}`;
}

fetchData();
