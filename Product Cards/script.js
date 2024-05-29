const mostPopularProducts = document.querySelector('.most-popular-products')


const jsonFile = './products.json'

fetch(jsonFile).then(response => {
    // console.log(response.json());
    return response.json();
}).then(data=>{
    // console.log(data);
    data.map(product => {
        // console.log(product);
        const {id, name, price, images} = product
        console.log(id, name, price, images);
        mostPopularProducts.innerHTML += `<div class="product-card" data-product-id="${id}">
        <div class="product-card_container">
          <div class="product-card_btn cart" data-tooltip="add to cart">
            <span class="material-symbols-outlined">shopping_cart</span>
          </div>
          <div class="product-card_btn fav" data-tooltip="add to wishlist">
            <span class="material-symbols-outlined">favorite</span>
          </div>
          <div class="product-card_img">
              <img src="${images[0].url}" alt="T-shirt-black">
          </div>
        </div>
        <div class="product-card_description">
          <div class="product-card_text">${name}</div>
          <div class="product-card_price">${price}</div>
        </div>
        <div class="product-card_color">
        ${
            images.map((image)=> {
                const {url,color} = image

                return `<button class="product-card_btn-radio " data-img="${url}"><span style="background-color: ${color};"></span></button>`
            }).join('')
        }
          

        </div>
      </div>`

    })

    const radioBtns = document.querySelectorAll('.product-card_btn-radio')

    radioBtns.forEach(radioBtn => {
        radioBtn.addEventListener('click', ()=>{
            let productCard = radioBtn.parentElement.parentElement,
                productImg = productCard.querySelector('.product-card_img > img'),
                prRadioBtns = productCard.querySelectorAll('.product-card_btn-radio')
            console.log(productImg);

            if(radioBtn.parentElement.parentElement === productCard){
                prRadioBtns.forEach(radioBtn => radioBtn.classList.remove('selected'))
                radioBtn.classList.add('selected')
                productImg.src = radioBtn.dataset.img;
            }
        })
    })

})