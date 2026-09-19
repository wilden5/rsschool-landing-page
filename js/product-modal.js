document.addEventListener('DOMContentLoaded', () => {
    const MENU_OFFER_GRID = document.querySelector('.menu-offer__grid');
    const MODAL_OVERLAY = document.querySelector('.modal-overlay');
    let currentProduct = null;
    let currentProductBasePrice = 0;

    const createModalWindow = (product) => {
        return `
            <div class="modal">
                <img class="modal__product-image" src="${product.image}" alt="${product.description}">
                <div class="modal__product-details">
                <div class="product-info-wrapper">
                    <h2 class="product-details__title">${product.name}</h2>
                    <p class="product-details__description">${product.description}</p>
                </div>
                <div class="product-details__size">
                    <h3 class="product-details__size-title">Size</h3>
                    <div class="feature-button-wrapper">
                        <button class="product-details__feature-button feature-size active" data-add-price='${product.sizes.s['add-price']}'>
                            <span class="feature-button-icon-wrapper">S</span>
                            ${product.sizes.s.size}
                        </button>
                        <button class="product-details__feature-button feature-size" data-add-price='${product.sizes.m['add-price']}'>
                            <span class="feature-button-icon-wrapper">M</span>
                            ${product.sizes.m.size}
                        </button>
                        <button class="product-details__feature-button feature-size" data-add-price='${product.sizes.l['add-price']}'>
                            <span class="feature-button-icon-wrapper">L</span>
                            ${product.sizes.l.size}
                        </button>
                    </div>
                </div>
                <div class="product-details__additives">
                    <h3 class="product-details__size-title">Additives</h3>
                    <div class="feature-button-wrapper">
                        <button class="product-details__feature-button feature-additives" data-add-price='${product.additives[0]['add-price']}'>
                            <span class="feature-button-icon-wrapper">1</span>
                            ${product.additives[0].name}
                        </button>
                        <button class="product-details__feature-button feature-additives" data-add-price='${product.additives[1]['add-price']}'>
                            <span class="feature-button-icon-wrapper">2</span>
                            ${product.additives[1].name}
                        </button>
                        <button class="product-details__feature-button feature-additives" data-add-price='${product.additives[2]['add-price']}'>
                            <span class="feature-button-icon-wrapper">3</span>
                            ${product.additives[2].name}
                        </button>
                    </div>
                </div>
                <div class="price-wrapper">
                    <p class="product-details__price-text">Total:</p>
                    <p class="product-details__price-value">${product.price}</p>
                </div>
                <div class="product-details__notification">
                    <svg class="product-details__notification-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_147811_7961)">
                            <path d="M8 7.66663V11" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 5.00667L8.00667 4.99926" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_147811_7961">
                                <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="product-details__notification-text">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                </div>
                <button class="product-details__close-button">Close</button>
            </div>
        </div>
            `;
    }

    const openModalWindow = (product) => {
        MODAL_OVERLAY.innerHTML = createModalWindow(product);
        MODAL_OVERLAY.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        currentProduct = product;
        currentProductBasePrice = parseFloat(product.price);
    }

    const closeModalWindow = () => {
        MODAL_OVERLAY.classList.add('hidden');
        document.body.style.overflow = '';
    }

    const updateProductPrice = () => {
        const priceElement = document.querySelector('.product-details__price-value');
        const clickedButton = event.target.closest('.product-details__feature-button');
        const isSizeButton = clickedButton.classList.contains('feature-size');
        const isAdditiveButton = clickedButton.classList.contains('feature-additives');

        if (isSizeButton) {
            document.querySelectorAll('.feature-size').forEach(button => {
                button.classList.remove('active');
            });
        } else if (isAdditiveButton) {
            document.querySelectorAll('.feature-additives').forEach(button => {
                button.classList.remove('active');
            });
        }

        clickedButton.classList.add('active');

        const activeSizeButton = document.querySelector('.feature-size.active');
        const activeAdditiveButton = document.querySelector('.feature-additives.active');
        let totalProductPrice = currentProductBasePrice;

        if (activeSizeButton) {
            totalProductPrice += parseFloat(activeSizeButton.dataset.addPrice);
        }
        if (activeAdditiveButton) {
            totalProductPrice += parseFloat(activeAdditiveButton.dataset.addPrice);
        }

        priceElement.textContent = totalProductPrice.toFixed(2);
    }

    MENU_OFFER_GRID.addEventListener('click', (event) => {
        const productCard = event.target.closest('.menu-offer__product');

        if(productCard) {
            const productId = parseInt(productCard.dataset.productId);
            const product = window.PRODUCTS.find(p => p.id === productId);
            openModalWindow(product);
        }
    });

    MODAL_OVERLAY.addEventListener('click', (event) => {
        if (event.target === MODAL_OVERLAY || event.target.closest('.product-details__close-button')) {
            closeModalWindow();
        }

        if (event.target.closest('.product-details__feature-button')) {
            updateProductPrice();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !MODAL_OVERLAY.classList.contains('hidden')) {
            closeModalWindow();
        }
    });
})