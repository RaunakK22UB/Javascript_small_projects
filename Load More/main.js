const productContainer = document.querySelector('.products-container');
const loadMoreBtn = document.querySelector('.load-more');


let currentStep =0; 
async function fecthProducts(getCurrentStep) {
    try {

        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${getCurrentStep === 0 ? 0 : getCurrentStep * 10}`, {
            method: 'GET'
        });

        const result = await response.json();
        console.log(result)

        if (result && result.products) displayProducts(result.products);

    } catch (error) {
        console.log(error);
    }
}



function displayProducts(productList) {
    console.log(productList);
    productList.forEach((productItem) => {
        const productWrapper = document.createElement('div');
        const productTitle = document.createElement('p');
        const productThumbnail = document.createElement('img');
        const productDesc = document.createElement('p');
        const productPrice = document.createElement('p');

        productThumbnail.src = productItem.thumbnail;
        productTitle.textContent = productItem.title;
        productDesc.textContent = productItem.description;
        productPrice.textContent = productItem.price;

        // class name to the newlly created elements 

        productThumbnail.classList.add('product-image');
        productTitle.classList.add('product-tittle');
        productDesc.classList.add('product-description');
        productPrice.classList.add('product-price');
        productWrapper.classList.add('product-item-wrapper');



        productWrapper.appendChild(productThumbnail);
        productWrapper.appendChild(productTitle);
        productWrapper.appendChild(productDesc);
        productWrapper.appendChild(productPrice);

        productContainer.appendChild(productWrapper);

        console.log(productContainer.children.length);

        if(productContainer.children.length === 100){
            loadMoreBtn.setAttribute('disabled','true')
        }

    })
}
fecthProducts();

loadMoreBtn.addEventListener('click',()=>{
    fecthProducts((currentStep +=1));
})