const container = document.querySelector('.container')
const header = document.querySelector('header')
let pokemonName = document.querySelector('h1')
const api = localStorage.getItem('url')

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const fetchData = async () => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        header.innerHTML = `
            <h1 id="pokemonName">${data.name.toUpperCase()}</h1>
            <button id="playBtn"><span class="material-symbols-outlined">volume_up</span></button>
        `

        // pokemonName.innerHTML = data.name.toUpperCase()

            container.innerHTML = `
                
            <img src="${data.sprites.other.dream_world.front_default}" alt="" id="pokemonImage">
            <div class="description">
                <div class="details">
                    <p id="id">Id : <span id="data">${data.id}</span></p>
                    <p id="height">Height : <span id="data">${data.height}</span></p>
                    <p id="category">Category : <span id="data">Speed</span></p>
                    <p id="weight">Weight : <span id="data">${data.weight}</span></p>
                    <p id="abilities">Abilities : <span id="data">${data.abilities[0].ability.name}</span></p>
                    <p id="base_experience">Experience : <span id="data">${data.base_experience}</span></p>
                </div>
                <div class="types">
                    <h5>Types</h5><br>
                    ${
                        data.types.map((type)=> `<button id="type">${type.type.name}</button>`).join('')
                    }
                </div>
            </div>
                `;
                
        
        document.querySelector('#playBtn').addEventListener('click', ()=> {
            const audio = new Audio(data.cries.latest); 
            audio.play()
        })
    
 
        

    } catch (error) {
        container.innerHTML = `<p style="color:red;">${error}</p>`;
        console.log(error);
    }
};

fetchData()

// console.log(api);