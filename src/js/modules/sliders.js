const sliders = (sliderSelector, direction, nextSelector, prevSelector) => {

    let sliderItem = document.querySelectorAll(sliderSelector),
        next = document.querySelector(nextSelector),
        prev = document.querySelector(prevSelector),
        slideNumber = 0,
        sliderTimer = setInterval(autoSlide, 3000);

    sliderItem.forEach(item => {
        item.style.display = 'none';
        item.classList.add('animated');
        sliderItem[slideNumber].style.display = 'block';
    });

    sliderItem[0].parentElement.addEventListener('mouseover', () => {
        clearInterval(sliderTimer);
    });

    sliderItem[0].parentElement.addEventListener('mouseout', () => {
        sliderTimer = setInterval(autoSlide, 3000);
    });

    try {
        next.addEventListener('click', () => {
            slideNumber += 1;
            sliderItem.forEach(item => item.style.display = 'none');

            if (slideNumber >= sliderItem.length) {
                slideNumber = 0;
            }

            sliderItem[slideNumber].classList.add(direction);
            sliderItem[slideNumber].style.display = 'block';
            clearInterval(sliderTimer);
        });

        prev.addEventListener('click', () => {
            slideNumber -= 1;
            sliderItem.forEach(item => item.style.display = 'none');

            if (slideNumber < 0) {
                slideNumber = sliderItem.length - 1;
            }

            sliderItem[slideNumber].classList.add('fadeInRight');
            sliderItem[slideNumber].style.display = 'block';
            clearInterval(sliderTimer);
        });
    }

    catch (e) {}
    
    function autoSlide() {
        slideNumber += 1;
        sliderItem.forEach(item => item.style.display = 'none');

        if (slideNumber >= sliderItem.length) {
            slideNumber = 0;
        }

        sliderItem[slideNumber].classList.add(direction);
        sliderItem[slideNumber].style.display = 'block';
    }

};

export default sliders;