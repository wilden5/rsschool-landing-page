document.addEventListener('DOMContentLoaded', () => {
    const SLIDER_CARDS = document.querySelector('.slider__cards');
    const SLIDER_CARD = document.querySelectorAll('.slider__card');
    const SLIDER_TRACK = document.querySelector('.slider__track');
    const PREVIOUS_BUTTON = document.querySelector('.slider__left');
    const NEXT_BUTTON = document.querySelector('.slider__right');
    const INDICATORS = document.querySelectorAll('.progress-bar__item');

    let currentSlideIndex = 0;
    let startX = 0;

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

    const handleTouchStart = (event) => {
        startX = event.touches[0].clientX;
    }

    const handleTouchEnd = (event) => {
        const diff = startX - event.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? nextSlide() : previousSlide();
        }
    }

    NEXT_BUTTON.addEventListener('click', nextSlide);
    PREVIOUS_BUTTON.addEventListener('click', previousSlide);
    SLIDER_TRACK.addEventListener('touchstart', handleTouchStart);
    SLIDER_TRACK.addEventListener('touchend', handleTouchEnd);

    updateIndicators();
})