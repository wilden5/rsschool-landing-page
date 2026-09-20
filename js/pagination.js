document.addEventListener('DOMContentLoaded', () => {
    const PAGINATION_BUTTON = document.querySelector('.menu-offer__pagination-button');
    const CARDS_LIMIT_DESKTOP = 8;
    const CARDS_LIMIT_MOBILE = 4;
    const MOBILE_MEDIA_QUERY = window.matchMedia("(max-width: 768px)");

    let visibleCardsCount = CARDS_LIMIT_MOBILE;

    const showCards = (count) => {
        const cards = document.querySelectorAll('.menu-offer__product');

        cards.forEach((card, index) => {
            card.style.display = index < count ? 'flex' : 'none';
        });
    }

    const hasHiddenCards = () => {
        const cards = document.querySelectorAll('.menu-offer__product');
        return cards.length > visibleCardsCount;
    }

    const updatePaginationButton = () => {
        PAGINATION_BUTTON.style.display = hasHiddenCards() ? 'flex' : 'none';
    }

    const handlePaginationButtonClick = () => {
        visibleCardsCount = CARDS_LIMIT_DESKTOP;
        showCards(visibleCardsCount);
        updatePaginationButton();
    }

    const resetPaginationButton = () => {
        visibleCardsCount = 4;
        showCards(visibleCardsCount);
        updatePaginationButton();
    }

    const handleScreenChange = (event) => {
        if (event.matches) {
            resetPaginationButton();
        } else {
            showCards(CARDS_LIMIT_DESKTOP);
            PAGINATION_BUTTON.style.display = 'none';
        }
    };

    PAGINATION_BUTTON.addEventListener('click', handlePaginationButtonClick);

    MOBILE_MEDIA_QUERY.addEventListener('change', handleScreenChange);

    document.addEventListener('categoryChanged', () => {
        if (MOBILE_MEDIA_QUERY.matches) {
            resetPaginationButton();
        } else {
            showCards(CARDS_LIMIT_DESKTOP);
            PAGINATION_BUTTON.style.display = 'none';
        }
    });
})