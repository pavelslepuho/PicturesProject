const accordeon = () => {
    let accordionBlock = document.querySelectorAll('.accordion-heading');

    accordionBlock.forEach(item => {
        item.nextElementSibling.style.cssText = `
            height: 0px;
            overflow: hidden;
            padding-top: 0rem;
            padding-bottom: 0rem;
            min-height: 0px;
            opacity: 0;
        `;

        item.addEventListener('click', function () {
            let state = 0;

            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                state = 1;
            }

            accordionBlock.forEach(block => {
                block.classList.remove('active');
                block.nextElementSibling.style.cssText = `
                    transition: 0.5s all;
                    height: 0px;
                    overflow: hidden;
                    padding-top: 0rem;
                    padding-bottom: 0rem;
                    min-height: 0px;
                    opacity: 0;
                `;
            });

            if (state === 1) {
                item.classList.add('active');
            }

            if (item.classList.contains('active')) {
                item.nextElementSibling.style.cssText = `
                    transition: 0.5s all;
                    height: auto;
                    overflow: visible;
                    opacity: 1;
                `;
            } else {
                item.nextElementSibling.style.cssText = `
                    transition: 0.5s all;
                    height: 0px;
                    overflow: hidden;
                    padding-top: 0rem;
                    padding-bottom: 0rem;
                    min-height: 0px;
                    opacity: 0;
                `;
            }
        });
    });
};

export default accordeon;