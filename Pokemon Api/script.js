const pokemonName = document.querySelector('#pokemonName');
const container = document.querySelector('.container');
const filterContainer = document.querySelector('.filterContainer');
const searchBtn = document.querySelector('#search');
const api = "https://pokeapi.co/api/v2/pokemon/?limit=200";
let URL = '';

const fetchData = async () => {
    try {
        const response = await fetch(api);
        const data = await response.json();

        container.style.display = 'flex'
        filterContainer.style.display = 'none'

        data.results.forEach((pokemon, index) => {
            container.innerHTML += `
                
                    <div class="card" onclick='getUrl("https://pokeapi.co/api/v2/pokemon/${index+1}/")'>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg" alt="pokemon image" id="pokemonImage">
                        <div class="cardDetails">
                            <p id="pokemonType">#${index+1}</p> 
                            <h4 id="charName">${pokemon.name.toUpperCase()}</h4>
                        </div>
                    </div>
                `;
        });

        

    } catch (error) {
        container.innerHTML = `<p style="color:red;">${error}</p>`;
    }
};

const fetchFilterData = async (pname) => {
    try {
        const response = await fetch(api);
        const data = await response.json();

        // console.log(data);

        data.results.forEach((pokemon, index) => {

            if(pokemon.name.toLowerCase() === pname){
                
                container.style.display = 'none'
                filterContainer.style.display = 'flex'
                filterContainer.innerHTML = `
                
                <div class="card" onclick='getUrl("https://pokeapi.co/api/v2/pokemon/${index+1}/")'>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg" alt="pokemon image" id="pokemonImage">
                    <div class="cardDetails">
                        <p id="pokemonType">#${index+1}</p> 
                        <h4 id="charName">${pokemon.name.toUpperCase()}</h4>
                    </div>
                </div>
            `;
            }
            
        });

    } catch (error) {
        filterContainer.innerHTML = `<p style="color:red;">${error}</p>`;
    }
};


pokemonName.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        console.log('clicked');
        fetchFilterData(pokemonName.value.toLowerCase());
    }
});





function getUrl(u) {
    URL = u;
    console.log(URL);
    localStorage.setItem('url',URL)
    window.location.href = '/Pokemon Api/pokemonPage.html'
}


searchBtn.addEventListener('click', ()=> {
    fetchFilterData(pokemonName.value.toLowerCase());
})

fetchData();

