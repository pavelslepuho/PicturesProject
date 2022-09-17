const pictureSize = (imgSelector) => {
    let pictures = document.querySelectorAll(imgSelector);

    pictures.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            item.children.forEach(elem => {
                if (elem.tagName === "P") {
                    elem.style.display = 'none';
                } else if (elem.tagName === "IMG") {
                    elem.setAttribute('src', `../assets/img/sizes-${i + 1}-1.png`);
                }
            });
        });
    });

    pictures.forEach((item, i) => {
        item.addEventListener('mouseout', () => {
            item.children.forEach(elem => {
                if (elem.tagName === "P") {
                    elem.style.display = 'block';
                } else if (elem.tagName === "IMG") {
                    elem.setAttribute('src', `../assets/img/sizes-${i + 1}.png`);
                }
            });
        });
    });


};


export default pictureSize;