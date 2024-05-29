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
const describe = document.querySelector('.desc')[0]



const fetchData = async () => {
    try {
            const name = pokemonName.value 
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) 

            if(!response.ok){
                throw new Error('Could Not Fetch Resource')
            }
            
            const data = await response.json()
            
            // describe.innerHTML(data.name);
            console.log(data);
        
        } 
        catch (error) {
            console.log(error);
        }

}

searchBtn.addEventListener('click',fetchData)