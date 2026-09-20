document.addEventListener('DOMContentLoaded', () => {
    const PAGINATION_BUTTON = document.querySelector('.menu-offer__pagination-button');
    let visibleCardsCount = 4;

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