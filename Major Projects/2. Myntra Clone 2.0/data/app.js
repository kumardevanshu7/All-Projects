let bagItems;
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

// for home page items
function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
    let innerHTMLs = '';
    item.forEach(item => {
        innerHTMLs += `<div class="item-container">
    <img src="${item.item_image}" alt="item image" class="item-img" />
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
    </div>
    <div class="company-name">${item.company_name}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
    <span class="current-price">Rs. ${item.current_prize}</span>
    <span class="original-price">Rs. ${item.original_price}</span>
    <span class="discount">(${item.dicount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">ADD to Bag</button> </div>`
    })

    itemsContainerElement.innerHTML = innerHTMLs;
}

// for bag
function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems))
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}