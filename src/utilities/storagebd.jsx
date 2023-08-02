/* let AddToDb = (id) => {
    let shopingCart;
    let storedCart = localStorage.getItem('shoping-cart');
    if (storedCart) {
        shopingCart = JSON.parse(storedCart);
    }
    else {
        shopingCart = {};
    }

    let quantity = shopingCart[id];
    if (quantity) {
        let newQuantity = quantity + 1;
        shopingCart[a] = newQuantity;
    }
    else {
        shopingCart[id] = 1;
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))
}
let removeDb = (id) => {
    let storedCart = localStorage.getItem('shoping-cart');
    if(storedCart){
        let shopingCart = JSON.parse(storedCart);
        if(id in shopingCart){
            delete shopingCart[id];
            localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
        }
    }
}
export {
    AddToDb,
    removeDb
}; */
let addToDb = (id) => {
    console.log(id)
    let shopingCart;
    let storedCart = localStorage.getItem('shoping-cart');
    if(storedCart){
        shopingCart = JSON.parse(storedCart);
    }
    else{
        shopingCart = {};
    }
    let quantity = shopingCart[id];
    if(quantity){
        let newQuantity = quantity + 1;
        shopingCart[id] = newQuantity
    }
    else{
        shopingCart[id] = 1;
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
}
let removeItem = id => {
    let storedCart = localStorage.getItem('shoping-cart');
    if(storedCart){
        let shopingCart = JSON.parse(storedCart);
        if(id in shopingCart){
            delete shopingCart[id];
            localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
        }
    }
}



export {
    addToDb,
    removeItem
};