document.addEventListener('DOMContentLoaded', async () => {
    const RESPONSE = await fetch ('products.json');
    window.PRODUCTS = await RESPONSE.json();
    const COFFEE_CATEGORY = 'coffee';
    const TEA_CATEGORY = 'tea';
    const DESSERT_CATEGORY = 'dessert';

    const MENU_OFFER_GRID = document.querySelector('.menu-offer__grid');
    const MENU_OFFER_BUTTONS = document.querySelectorAll('.menu-offer__button');
    const COFFEE_BUTTON = document.querySelector('.menu-offer__coffee-button');
    const TEA_BUTTON = document.querySelector('.menu-offer__tea-button');
    const DESSERT_BUTTON = document.querySelector('.menu-offer__desert-button');

    const createProductCard = (product) => {
        return `
                <div class="menu-offer__product" data-product-id='${product.id}'>
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

    const handleMenuOfferActiveButton = (activeCategory) => {
        MENU_OFFER_BUTTONS.forEach(button => {
            button.classList.remove('active');
        })

        if (activeCategory === COFFEE_CATEGORY) {
            COFFEE_BUTTON.classList.add('active');
        }

        if (activeCategory === TEA_CATEGORY) {
            TEA_BUTTON.classList.add('active');
        }

        if (activeCategory === DESSERT_CATEGORY) {
            DESSERT_BUTTON.classList.add('active');
        }
    }

    COFFEE_BUTTON.addEventListener('click', () => {
        handleMenuOfferActiveButton(COFFEE_CATEGORY);
        displayProducts(COFFEE_CATEGORY);
        document.dispatchEvent(new CustomEvent('categoryChanged'));
    })

    TEA_BUTTON.addEventListener('click', () => {
        handleMenuOfferActiveButton(TEA_CATEGORY);
        displayProducts(TEA_CATEGORY);
        document.dispatchEvent(new CustomEvent('categoryChanged'));
    })

    DESSERT_BUTTON.addEventListener('click', () => {
        handleMenuOfferActiveButton(DESSERT_CATEGORY);
        displayProducts(DESSERT_CATEGORY);
        document.dispatchEvent(new CustomEvent('categoryChanged'));
    })

    displayProducts(COFFEE_CATEGORY);
})