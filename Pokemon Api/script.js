// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(response => {
//         if(!response.ok){
//             throw new Error('Could Not Fetch Resource')
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

const pokemonName = document.querySelector('#pokemonName')
const searchBtn = document.querySelector('#search')
const charName = document.querySelector('#charName')
const pokemonImage = document.querySelector('#pokemonImage')
const description = document.querySelector('.description')



const fetchData = async () => {
    try {
            const name = pokemonName.value.toLowerCase()
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) 

            if(!response.ok){
                pokemonImage.style.display = 'none'
                throw new Error('Could Not Fetch Resource')
            }
            if(name === ''){
                pokemonImage.style.display = 'none'
                throw new Error('Please enter a character')
            }
            
            const data = await response.json()
            const imageUrl = data.sprites.front_default

            // console.log(imageUrl);
            
            charName.innerHTML = data.name.toUpperCase();
            pokemonImage.src = imageUrl
            pokemonImage.style.display = 'block'
            description.style.backgroundColor = 'rgb(255, 255, 181)'
            // console.log(charName.innerHTML);
        
        } 
    catch (error) {
        charName.innerHTML = error;
    }

}

searchBtn.addEventListener('click',fetchData)


pokemonName.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchData();
    }
});
