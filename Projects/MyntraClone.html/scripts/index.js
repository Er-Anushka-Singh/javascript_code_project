let bagItems = [];
 onLoad();

function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

 function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if(bagItems.length>0) { bagItemCountElement.innerText = bagItems.length;
    bagItemCountElement.style.visibility = 'visible';
 }else{
  bagItemCountElement.style.visibility = 'hidden';
 }

}

displayItemsOnHomePage();
function displayItemsOnHomePage(){

  let itemsContainerElement = document.querySelector('.items-container');

  if(!itemsContainerElement){
    return;
  }

let innerHTML = '';
items.forEach(item =>{
  innerHTML += `
   <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <div class="rating">
          ${item.rating.stars} ⭐ |  ${item.rating.count} 
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="orignal-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>
      </div>
  `;
});

itemsContainerElement.innerHTML = innerHTML;

}
// let item ={
//   item_image :'images/1.jpg',
//   rating:{
//     stars:4.5,
//     noOfReviews : 1400,
//   },
//   company_name:'Carlton London',
//   item_name:'Rhodium-Plated CZ Floral studs',
//   current_price: 606,
//   orginal_price: 1045,
//   discount_percentage: 42,
// }

// itemsContainerElement.innerHTML=`
//  <div class="item-container">
//         <img class="item-image" src="${item_image}" alt="item image">
//         <div class="rating">
//           ${item.rating.stars} ⭐ |  ${item.rating.noOfReviews} 
//         </div>
//         <div class="company-name">${item.company_name}</div>
//         <div class="item-name">${item.item_name}</div>
//         <div class="price">
//           <span class="current-price">Rs ${item.current_price}</span>
//           <span class="orignal-price">Rs ${item.orginal_price}</span>
//           <span class="discount">(${item.discount_percentage}% OFF)</span>
//         </div>
//         <button class="btn-add-bag">Add to Bag</button>
//     </div>
//       </div>
// `;