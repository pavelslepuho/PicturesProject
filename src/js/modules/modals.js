const modals = () => {
    let generalClientWidth = document.documentElement.clientWidth,
        btnPressed = false;

    function bindModal(triggerSelector, modalDialogSelector, modalCloseSelector, destroy = false) {
        let modalTrigger = document.querySelectorAll(triggerSelector),
            modalDialog = document.querySelector(modalDialogSelector),
            modalClose = document.querySelectorAll(modalCloseSelector);

        modalTrigger.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                showModal(modalDialog);
                btnPressed = true;
                if (destroy) {
                    item.remove();
                }
            });
        });

        modalClose.forEach(item => {
            item.addEventListener('click', () => {
                hideModal(modalDialog);
            });
        });

        modalDialog.addEventListener('click', (e) => {
            if (e.target === modalDialog) {
                hideModal(modalDialog);
            }
        });
    }

    function showModal(modalDialog) {
        modalDialog.style.display = 'block';
        document.body.style.overflow = 'hidden';
        let modalClientWidth = document.documentElement.clientWidth;
        document.body.style.paddingRight = modalClientWidth - generalClientWidth + 'px';
    }

    function hideModal(modalDialog) {
        modalDialog.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.paddingRight = '0px';
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            let display;
            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = "block";
                }
            });

            if (!display) {
                let dialog = document.querySelector(selector);
                showModal(dialog);
            }
        }, time);
    }

    function showModalByScroll(modalSelector, button, destroy = false) {

        window.addEventListener('scroll', function scroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.body.scrollHeight - 20 && !btnPressed) {
                let modal = document.querySelector(modalSelector);
                showModal(modal);
                destroy = true ? document.querySelector(button).remove(): false;
                window.removeEventListener('scroll', scroll);

            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-close', true);
    showModalByTime('.popup-consultation', 60000);
    showModalByScroll('.popup-gift', '.fixed-gift', true);

};

export default modals;