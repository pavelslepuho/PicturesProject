const showMoreStyles = () => {
    let btn = document.querySelector('.button-styles');

    btn.addEventListener('click', function() {
        getResource('http://localhost:3000/styles');
        this.classList.add('animated', 'fadeOutUp');
    });

    function getResource(url) {
        fetch(url)
        .then(response => {
            let res = response.json();
            return res;
        })
        .then(res => {
            res.forEach(item => {
                new Style(item.src, item.title, item.link, '#styles .row').showElements();
            });
        });
    }

    class Style {
        constructor(src, title, link, parentSelector) {
            this.src = src;
            this.title = title;
            this.link = link;
            this.parentSelector = parentSelector;
        }

        showElements() {
            let parent = document.querySelector(this.parentSelector),
                div = document.createElement('div');
            div.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            div.innerHTML = `
                <div class="styles-block">
                    <img src=${this.src} alt>
                    <h4>${this.title}</h4>
                    <a href=${this.link}>Подробнее</a>
                </div>
            `;
            parent.append(div);
        }
    }

};

export default showMoreStyles;