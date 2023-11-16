const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showItem(index) {
    if (index < 0) {
        index = items.length - 1;
    } else if (index >= items.length) {
        index = 0;
    }

    currentIndex = index;

    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function nextItem() {
    showItem(currentIndex + 1);
}

function prevItem() {
    showItem(currentIndex - 1);
}

setInterval(nextItem, 5000); 

function goToPage(url) {
    if (url !== "Pages") { 
        window.location.href = url; 
    }
}

const item = document.querySelectorAll('.carousel-item1');
let currIndex = 0;

function showItem(index) {
    if (index < 0) {
        index = item.length - 1;
    } else if (index >= item.length) {
        index = 0;
    }

    currentIndex = index;

    item.forEach((items, i) => {
        items.classList.toggle('active', i === index);
    });
}
function nextItem() {
    showItem(currentIndex + 1);
}
setInterval(nextItem, 3000);
