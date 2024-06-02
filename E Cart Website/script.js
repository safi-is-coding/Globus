        // <div class="card">
        //     <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="image">
        //     <div class="details">
        //         <h5 id="title">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
        //         <h4 id="price">$ 109.95</h4>
        //         <p id="description">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
        //         <p id="rating">Rating : <b>3.9</b></p>
        //     </div>
        // </div>




const container = document.querySelector('.container')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const title = document.querySelector('#title')
const price = document.querySelector('#price')
const description = document.querySelector('#description')
const rating = document.querySelector('#rating')
const category = document.querySelector('#category')


const fetchData = async (categoryType) => {
    
    try{

        const response = await fetch('https://fakestoreapi.com/products')

        const data = await response.json()

        // console.log(data);

        container.innerHTML = ''
        for (i=0; i<data.length; i++){
            
            if(data[i].category === categoryType){
                container.innerHTML += `
                    <div class="card">
                        <img src="${data[i].image}" alt="image">
                        <div class="details">
                            <h5 id="title">${data[i].title}</h5>
                            <h4 id="price">$ ${data[i].price}</h4>
                            <p id="description">${data[i].description}</p>
                            <p id="rating">Rating : <b>${data[i].rating.rate}</b>&nbsp;&nbsp;&nbsp;Count : <b>${data[i].rating.count}</b></p>
                        </div>
                    </div>
                    `
            }
            else if(categoryType === 'show all'){
                container.innerHTML += `
                    <div class="card">
                        <img src="${data[i].image}" alt="image">
                        <div class="details">
                            <h5 id="title">${data[i].title}</h5>
                            <h4 id="price">$ ${data[i].price}</h4>
                            <p id="description">${data[i].description}</p>
                            <p id="rating">Rating : <b>${data[i].rating.rate}</b>&nbsp;&nbsp;&nbsp;Count : <b>${data[i].rating.count}</b></p>
                        </div>
                    </div>
                    `
            }
            
        }


    }catch(error){
        container.innerHTML = `<p>ERROR: ${error}</p>`
    }

    
}

window.onload(fetchData('show all'))

function displayCategory(){
    // console.log(category.value);

    fetchData(category.value)
}

