document.addEventListener('DOMContentLoaded', () => {
    const PAGINATION_BUTTON = document.querySelector('.menu-offer__pagination-button');
    let visibleCardsCount = 4;

    const showCards = (count) => {
        const cards = document.querySelectorAll('.menu-offer__product');

        cards.forEach((card, index) => {
            if (index < count) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    const hasHiddenCards = () => {
        const cards = document.querySelectorAll('.menu-offer__product');
        return cards.length > visibleCardsCount;
    }

    const updatePaginationButton = () => {
        if (hasHiddenCards()) {
            PAGINATION_BUTTON.style.display = 'flex';
        } else {
            PAGINATION_BUTTON.style.display = 'none';
        }
    }

    const handlePaginationButtonClick = () => {
        visibleCardsCount = 8;
        showCards(visibleCardsCount);
        updatePaginationButton();
    }

    const resetPaginationButton = () => {
        visibleCardsCount = 4;
        showCards(visibleCardsCount);
        updatePaginationButton();
    }

    PAGINATION_BUTTON.addEventListener('click', handlePaginationButtonClick);

    document.addEventListener('categoryChanged', resetPaginationButton);
})