const CONVENIENCE_FEE = 99;
let bagItemsObjects;
onLoad();

function onLoad() {
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
    generateItemHTML();
}

function displayBagSummary() {
    let bagSummaryElement = document.querySelector('.bag-summary');
    let totalItem = bagItemsObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemsObjects.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_prize;
    })

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEE;

    bagSummaryElement.innerHTML = `          
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items)</div>
    <div class="price-item">
      <div class="price-item-tag"> Total MRP</div>
      <div class="price-item-value">₹ ${totalMRP}</div>
    </div>
    <div class="price-item">
      <div class="price-item-tag"> Discount on MRP</div>
      <div class="price-item-value priceDetail-base-discount">-₹ ${totalDiscount}</div>
    </div>
    <div class="price-item">
      <div class="price-item-tag"> Convenience Fee</div>
      <div class="price-item-value">₹ 99</div>
    </div>
    <br>
    <div class="price-footer">
      <div class="price-item-tag"> Total Amount</div>
      <div class="price-item-value">₹ ${finalPayment}</div>
    </div>
  </div>
  <button class="btn-place-order">
    <div>PLACE ORDER</div>
  </button>`
}

function loadBagItemObjects() {
    bagItemsObjects = bagItems.map(itemId => {
        for (let i = 0; i < item.length; i++) {
            if (itemId == item[i].id) {
                return item[i];
            }
        }
    });
    console.log(bagItemsObjects);
}

function displayBagItems() {
    console.log(bagItems)
    let containerElement = document.querySelector('.bag-items-container');
    let innerHTML = '';
    bagItemsObjects.forEach(bagItems => {
        innerHTML += generateItemHTML(bagItems)
    });
    containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
    bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();
}

function generateItemHTML(item) {
    return `<div class="bag-item-container">
    <div class="item-left-part">
        <img src="/${item.item_image}" class="bag-item-img">
    </div>
    <div class="item-right-part">
        <div class="company">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
        <span class="current-price">Rs. ${item.current_prize}</span>
        <span class="original-price">Rs. ${item.original_price}</span>
        <span class="discount">(${item.dicount_percentage}% OFF)</span>
        </div>
        <div class="retrun-period">
            <span class="return-period-days">${item.rating_period} Days</span> retrun available
        </div>
        <div class="delivery-details">
            Delivery By
            <span class="delivery-details-days">${item.delivery_date}</span>
        </div>
    </div>
    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">x</div>
</div>`
}