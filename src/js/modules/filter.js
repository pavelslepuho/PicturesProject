const filter = () => {
    let portfolio = document.querySelector('.portfolio-wrapper'),
        menu = document.querySelector('.portfolio-menu'),
        tabs = document.querySelectorAll('.portfolio-menu > li'),
        targets = document.querySelectorAll('.portfolio-block'),
        portfolioNo = document.querySelector('#portfolio .portfolio-no');

    menu.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            tabs.forEach(item => {
                item.classList.remove('active');
                if (item === e.target) {
                    item.classList.add('active');
                    let dataClass = item.getAttribute('data-class');
                    showPortfolio(targets, dataClass);
                }
            });
        }
    });

    function showPortfolio(group, attr) {
        let count = 0;
            
        group.forEach(item => {
            item.style.display = 'none';

            if (item.classList.contains(attr)) {
                item.classList.add('animated', 'fadeInUp');
                item.style.display = 'block';
                count++;
            }
        });

        if(count === 0) {
            portfolioNo.style.display = 'block';
        } else if (count < 5) {
            portfolio.style.justifyContent = 'center';
            portfolioNo.style.display = 'none';
        } else {
            portfolio.style.justifyContent = 'left';
            portfolioNo.style.display = 'none';
        }
    }

};

export default filter;