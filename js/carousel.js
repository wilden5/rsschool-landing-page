document.addEventListener('DOMContentLoaded', () => {
    const SLIDER_CARDS = document.querySelector('.slider__cards');
    const SLIDER_CARD = document.querySelectorAll('.slider__card');
    const PREVIOUS_BUTTON = document.querySelector('.slider__left');
    const NEXT_BUTTON = document.querySelector('.slider__right');
    const INDICATORS = document.querySelectorAll('.progress-bar__item');

    let currentSlideIndex = 0;

    const updateSliderPosition = () => {
        SLIDER_CARDS.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }

    const updateIndicators = () => {
        INDICATORS.forEach((indicator, index) => {
            if (index === currentSlideIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    const nextSlide = () => {
        currentSlideIndex = (currentSlideIndex + 1) % SLIDER_CARD.length;
        updateSliderPosition();
        updateIndicators();
    }

    const previousSlide = () => {
        currentSlideIndex = (currentSlideIndex - 1 + SLIDER_CARD.length) % SLIDER_CARD.length;
        updateSliderPosition();
        updateIndicators();
    }

    NEXT_BUTTON.addEventListener('click', nextSlide);
    PREVIOUS_BUTTON.addEventListener('click', previousSlide);

    updateIndicators();
})