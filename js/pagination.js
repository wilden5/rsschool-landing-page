document.addEventListener('DOMContentLoaded', () => {
    const PAGINATION_BUTTON = document.querySelector('.menu-offer__pagination-button');
    const VISIBLE_CARDS_COUNT_DESKTOP = 8;
    const MOBILE_MEDIA_QUERY = window.matchMedia("(max-width: 768px)");
    let visibleCardsCountMobile = 4;

    const showCards = (count) => {
        const cards = document.querySelectorAll('.menu-offer__product');

        cards.forEach((card, index) => {
            card.style.display = index < count ? 'flex' : 'none';
        });
    }

    const hasHiddenCards = () => {
        const cards = document.querySelectorAll('.menu-offer__product');
        return cards.length > visibleCardsCountMobile;
    }

    const updatePaginationButton = () => {
        PAGINATION_BUTTON.style.display = hasHiddenCards() ? 'flex' : 'none';
    }

    const handlePaginationButtonClick = () => {
        visibleCardsCountMobile = VISIBLE_CARDS_COUNT_DESKTOP;
        showCards(visibleCardsCountMobile);
        updatePaginationButton();
    }

    const resetPaginationButton = () => {
        visibleCardsCountMobile = 4;
        showCards(visibleCardsCountMobile);
        updatePaginationButton();
    }

    const handleScreenChange = (event) => {
        if (event.matches) {
            resetPaginationButton();
        } else {
            showCards(VISIBLE_CARDS_COUNT_DESKTOP);
            PAGINATION_BUTTON.style.display = 'none';
        }
    };

    PAGINATION_BUTTON.addEventListener('click', handlePaginationButtonClick);

    MOBILE_MEDIA_QUERY.addEventListener('change', handleScreenChange);

    document.addEventListener('categoryChanged', () => {
        if (MOBILE_MEDIA_QUERY.matches) {
            resetPaginationButton();
        } else {
            showCards(VISIBLE_CARDS_COUNT_DESKTOP);
            PAGINATION_BUTTON.style.display = 'none';
        }
    });
})