var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {
   'itemName': item,
   'itemPrice': Math.floor(Math.random() * 100) + 1
 }
 cart.push(obj);
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length > 0) {
    if (cart.length === 1) {
      var itemInCart = cart[0];
      return `In your cart, you have ${itemInCart['itemName']} at $${itemInCart['itemPrice']}.`
    }
    else {
      var purse = [];
      for (var i = 0; i < cart.length; i++) {
        var itemCart = cart[i];
        purse.push(`${itemCart['itemName']} at $${itemCart['itemPrice']}`)
      }
      purse[purse.length - 1] = `and ${purse[purse.length - 1]}.`;
      purse = "In your cart, you have " + purse.join(", ");
      return purse;
    }
  }
  else {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
