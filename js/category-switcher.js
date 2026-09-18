document.addEventListener('DOMContentLoaded', async () => {
    const RESPONSE = await fetch ('../products.json');
    const PRODUCTS = await RESPONSE.json();
    const DEFAULT_CATEGORY = 'coffee';

    const MENU_OFFER_GRID = document.querySelector('.menu-offer__grid');
    const COFFEE_BUTTON = document.querySelector('.menu-offer__coffee-button');
    const TEA_BUTTON = document.querySelector('.menu-offer__tea-button');
    const DESSERT_BUTTON = document.querySelector('.menu-offer__desert-button');

    const createProductCard = (product) => {
        return `
                <div class="menu-offer__product">
                    <img class="product__image" src="${product.image}" alt="${product.description}">
                    <div class="product__details">
                        <h2 class="product__title">${product.name}</h2>
                        <p class="product__description">${product.description}</p>
                        <h3 class="product__price">$${product.price}</h3>
                    </div>
                </div>
            `;
    };

    const displayProducts = (category) => {
        const filteredProducts = PRODUCTS.filter((product) => product.category === category);
        MENU_OFFER_GRID.innerHTML = filteredProducts.map(createProductCard).join('');
    }

    displayProducts(DEFAULT_CATEGORY);
})