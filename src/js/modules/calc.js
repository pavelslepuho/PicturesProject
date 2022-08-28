const calc = () => {
    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        resultBlock = document.querySelector('.calc-price'),
        result = 0,
        form = resultBlock.closest('form'),
        base = {};

    function calcResult(block, event) {
        block.addEventListener(event, () => {
            if (!size.value || !material.value) {
                resultBlock.textContent = 'Пожалуйста, заполните размер и материал';
            } else if (promocode.value === 'IWANTPOPART') {
                result = Math.round(((+size.value) * (+material.value) + (+options.value || 1)) * 0.7);
                resultBlock.textContent = `${result} BYN`;
            } else {
                result = (+size.value) * (+material.value) + (+options.value);
                resultBlock.textContent = `${result} BYN`;
            }
            base = {
                size: size.value,
                material: material.value,
                options: options.value,
                result
            };
        });
    }

    calcResult(size, 'change');
    calcResult(material, 'change');
    calcResult(options, 'change');
    calcResult(promocode, 'input');

    form.addEventListener('submit', () => {
        let formData = new FormData(form),
            json = JSON.stringify(base);
        let response = fetch('http://localhost:3000/calc', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: json
        })
        .then(result => {
            let res = result.json();
            console.log(res);
        });

    });

};

export default calc;