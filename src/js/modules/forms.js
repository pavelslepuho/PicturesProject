const forms = () => {
    let form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]'),
        blob;

    let messages = {
        sending: 'Отправляем данные...',
        success: 'Ваши данные отправлены!',
        failure: 'Ошибка'
    };

    let div = document.createElement('div'),
        img = document.createElement('img'),
        h4 = document.createElement('h4');

    div.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    div.setAttribute('data-message', 1);
    div.append(img, h4);

    upload.forEach(item => {
        item.addEventListener('input', (e) => {
            e.preventDefault();
            blob = item.files[0];
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let formData = new FormData(item);
            console.log(blob);
            formData.append('upload', blob);
            let data = JSON.stringify(Object.fromEntries(formData));

            h4.textContent = messages.sending;
            item.parentElement.append(div);
            img.setAttribute('src', './assets/img/spinner.gif');
            item.style.display = 'none';

            document.querySelectorAll('[data-modal]').forEach(item => {
                item.setAttribute('data-modal', true);
            });

            let response = fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: data
            })
                .then(response => response.json())
                .then(result => {
                    div.classList.add('animated', 'fadeInUp');
                    img.removeAttribute('src');
                    img.setAttribute('src', './assets/img/ok.png');
                    h4.textContent = messages.success;
                    item.style.display = 'none';
                    console.log(result);
                })
                .catch(error => {
                    h4.textContent = messages.failure;
                    item.parentElement.append(div);
                    item.style.display = 'none';
                })
                .finally(result => {
                    item.reset();
                    setTimeout(() => {
                        div.classList.remove('animated', 'fadeInUp');
                        div.remove();
                        item.style.display = 'block';
                        document.querySelectorAll('[data-modal=true]').forEach(item => item.style.display = 'none');
                        img.setAttribute('src', './assets/img/spinner.gif');
                        document.body.style.overflow = '';
                        document.body.style.paddingRight = '0px';
                    }, 4000);

                });
        });
    });


};

export default forms;