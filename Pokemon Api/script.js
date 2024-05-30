// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(response => {
//         if(!response.ok){
//             throw new Error('Could Not Fetch Resource')
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// const pokemonName = document.querySelector('#pokemonName')
// const searchBtn = document.querySelector('#search')
// const charName = document.querySelector('#charName')
// const charHeight = document.querySelector('#charHeight')
// const audio = document.querySelector('#playAudio')
// const pokemonImage = document.querySelector('#pokemonImage')
// const description = document.querySelector('.description')

// const fetchData = async () => {
//     try {
//             const name = pokemonName.value.toLowerCase()
//             const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

//             if(!response.ok){
//                 pokemonImage.style.display = 'none'
//                 throw new Error('Could Not Fetch Resource')
//             }
//             if(name === ''){
//                 pokemonImage.style.display = 'none'
//                 throw new Error('Please enter a character')
//             }

//             const data = await response.json()
//             const imageUrl = data.sprites.other.dream_world.front_default

//             // console.log(imageUrl);
//             charName.style.color = 'black'

//             charName.innerHTML = 'Name : ' + data.name.toUpperCase();
//             pokemonImage.src = imageUrl
//             charHeight.innerHTML = 'Height : ' + data.height;
//             // audio.innerHTML.src = data.cries.latest
//             // console.log(audio.innerHTML.src);

//             pokemonImage.style.display = 'block'
//             description.style.backgroundColor = 'rgb(255, 255, 181)'
//             // console.log(charName.innerHTML);

//             const audio = new Audio(data.cries.latest);
//             audio.play();

//         }
//     catch (error) {
//         charName.style.color = 'red'
//         charName.innerHTML = error;
//     }

// }

// searchBtn.addEventListener('click',fetchData)


const pokemonName = document.querySelector('#pokemonName')
const container = document.querySelector(".container");
const pokemonCard = document.querySelector("#pokemoCard");
const pokemonType = document.querySelector("#pokemonType");
const searchBtn = document.querySelector("#search");
const charName = document.querySelector("#charName");
const pokemonImage = document.querySelector("#pokemonImage");

let api = "https://pokeapi.co/api/v2/pokemon/?limit=100"

const fetchData = async () => {
  try {
    // const name = pokemonName.value.toLowerCase();
    
    const response = await fetch(api);

    const data = await response.json();

    for(i=0;i<data.results.length;i++){

        container.innerHTML += `<a href="#" id="pokemonCard">
            <div class="card">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${[i+1]}.png" alt="pokemon image" id="pokemonImage">
                <div class="cardDetails">
                    <p id="pokemonType">${data.count}</p>
                    <h4 id="charName">${data.results[i].name}</h4>
                </div>
            </div>
        </a>`;
        
    }        


   


    } catch (error) {
    // charName.style.color = "red";a
    container.innerHTML = error;
  }
}


fetchData();

pokemonName.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
    //   api = `https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`;
    console.log('clicked');
      fetchFilterData(pokemonName.value.toLowerCase());
    }
  });



// searchBtn.addEventListener('click',displayRandom)
