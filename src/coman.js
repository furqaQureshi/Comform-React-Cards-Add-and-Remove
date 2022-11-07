
const initialState = {
    card: [],
    orders: [],
    totalPrice: 0,
    // totalPrice : 0,
    // product: [],
    // numberCart:0,
    // numberCart:0,
   
    // totalQuantities: 0,
    // quantity: 0,
    // price: 0
  }
  const reducer = (state = initialState, action) => {
    let findPro;
    let index;
    switch (action.type) {
         let totalOrders = [...state.orders, action.payload]
           let totalQty = totalOrders.length;
          // let totalQty = [...state.quantity]
           let totalPrice = 0;
           for (let i = 0; i < totalOrders.length; i++) {
             if (totalOrders[i] === action.payload){
              totalPrice += parseInt(totalOrders[i].price)        
             }
           }
           console.log(totalOrders)
           return{
            ...state,
            orders: [...totalOrders]
           }
           case 'DEC':
            var arr = [...state.orders];
            var idx =  arr.indexOf(action.payload)
            if (idx >= 0) {
                arr.splice(idx, 1);
            }
            console.log(arr, idx,);
             return{
                ...state, orders: [...arr],
              }
              const filter = [...state, totalQty => totalQty !== action.payload];
              return {
                ...state,
                card: filter,
                card: totalQty.card.filter((product) => product.id - action.payload),
              }
      // case 'ADD_TO_CARD':
      //   const {product,quantity} = action.payload;
      //   const check = state.card.find(pr => pr.id === product.id);
      //   if(check){
      //     return state;
      //   }
      // else{
      //     const Tprice = state.totalPrice = product.price * quantity;
      //     const Tquantity = state.totalQuantity + quantity;
      //     product.quantity = quantity;
      // return{
      //   ...state, card: [...state.card],totalPrice: Tprice, totalQuantity:
      //   Tquantity
      // }
      // }
      // case "deposit":
      //     return { ...state, card: [...state.card, action.payload] }
      // case 'withdraw':
      //   const filtered = state.card.filter(product => product.id !== action.payload);
      //   return {
      //     ...state,
      //     card: filtered,
      //   }
      //     case 'INC':
      //      let totalOrders = [...state.orders, action.payload]
      //      let totalQty = totalOrders.length;
      //     // let totalQty = [...state.quantity]
      //      let totalPrice = 0;
      //      for (let i = 0; i < totalOrders.length; i++) {
      //        if (totalOrders[i] === action.payload){
      //         totalPrice += parseInt(totalOrders[i].price)        
      //        }
      //      }
        //    for (let i = 0; i < totalPrice.length; i++) {
        //     if (totalPrice[i] === action.payload){
        //      totalPrice += parseInt(totalPrice[i].price)        
        //     }
        //   } 
          //  console.log(totalOrders, totalPrice)
          //  return{
          //   ...state,
          //   orders: [...totalOrders]
          //   // , totalPrice: [...totalPrice]
          //  }
          //  case 'DEC':
          //   var arr = [...state.orders];
          //   var idx =  arr.indexOf(action.payload)
          //   if (idx >= 0) {
          //       arr.splice(idx, 1);
          //       console.log(idx);
          //   }
          //    return{
          //       ...state, orders: [...arr],
          //     }
          //     const filter = [...state, totalQty => totalQty !== action.payload];
          //     return {
          //       ...state,
          //       card: filter,
          //       card: totalQty.card.filter((product) => product.id - action.payload),
          //     }
      //   case 'INCREASE_QUANTITY':
      //     console.log("INCREASE_QUANTITY",action.payload.quantity);
      //     state.numberCart++
      //     state.card[action.payload].quantity++;
      //    return{
            
      //        ...state,
      //    }
      // case 'DECREASE_QUANTITY':
      //     let quantity = state.card[action.payload].quantity;
      //     if(quantity>1){
      //         state.numberCart--;
      //         state.card[action.payload].quantity--;
      //     }
        
      //     return{
      //       state 
      //     }
        // case "INC":
      //   const { product, quantity } = action.payload;
      //   console.log('INC',product,quantites)
      //   // console.log('INC',product,quantity)
      //   const price = state.totalPrice + quantites * quantity;
      //   // const price = state.totalPrice + quantites * product;
      //   const quantites = state.totalQuantities + product.price;
      //   // product.quantity = quantites;
      //   findPro = state.card.find(product => product.id === action.payload);
      //   index = state.card.findIndex(product =>  product.id === action.payload);
      //   findPro.quantity += 1;
      //   state.card[index] = findPro;
      //   return {
      //     ...state,
      //     totalPrice: state.totalPrice +  product.price, 
      //     totalQuantities: state.totalQuantities + 1
      //   }
      // case 'DEC':
      //   index = state.card.filter(product => product.id === action.payload);
      //   console.log('DEC',product)
      //   if (findPro.quantity > 1) {
      //     findPro.quantity -= 1;
      //     state.card[index] = findPro;
      //     return {
      //       ...state,
      //       totalPrice: state.totalPrice - findPro.price, 
      //       totalQuantities: state.totalQuantities - 1
      //     }
      //   }
      // case 'ADD_QUANTITY':
      //   console.log("ADD TO CARDS")
      //   return {
      //     ...state,
      //     card: state.card.map(product =>
      //       product.id === action.id
      //         ? {...product, quantity: product.quantity + 1}
      //         : product,
      //     ),
      //   };
      // case 'SUB_QUANTITY':
      //   console.log('Delete');
      //   return {
      //     ...state,
      //     card: state.card.map(product =>
      //       product.id === action.payload
      //         ? {
      //             ...product,
      //             quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
      //           }
      //         : product,
      //     ),
      //   };
    
      // }
      // case 'INCREASE':
      // if (action.type === "INCREASE") {
      //   console.log("DELETE TO CARDS")
      //   // let tempcart = cart.map((item) => {
      //     if (state.id === action.payload.id) {
      //       return { ...state, quantity: state.quantity + 1 };
      //     }
      //     return state;
      //   // });
      //   // return tempcart;
      // }
      // case 'DECREASE':
      // if (action.type === "DECREASE") {
      //   console.log("ADD TO CARDS")
      //   // let tempcart = cart.map((item) => {
      //     if (state.id === action.payload.id) {
      //       return { ...state, quantity: state.quantity - 1 };
      //     }
      //     return state;
      //   // });
      //   // return tempcart;
      // }
  
      //   case 'INCREASE_QUANTITY':
      //     state.numberCart++
      //     state.Carts[action.payload].quantity++;
      //    return{
      //        ...state
      //    }
      // case 'DECREASE_QUANTITY':
      //     let quantity = state.Carts[action.payload].quantity;
      //     if(quantity>1){
      //         state.numberCart--;
      //         state.Carts[action.payload].quantity--;
      //     }
      //     console.log("Delete to cart");
  
      // case 'INC':
      //   console.log('Add to cart')
      //   findPro = state.product.find(product => product.id === action.payload);
      //   findPro = state.card.find(product => product.id === action.payload);
      //   index = state.card.findIndex(product => product.id === action.payload);
      //   findPro.price = state.card[0].price
      //   findPro.quantity += 1;
      // case 'Quantity':
      //   let addedItem = state.items.find(item=> item.id === action.id) 
      //   if(addedItem.quantity === 1){
      //       let new_items = state.addedItems.filter(item=>item.id !== action.id)
      //       let newTotal = state.total - addedItem.price
      //       return{
      //           ...state,
      //           addedItems: new_items,
      //           total: newTotal
      //       }
      //   }
      //   else {
      //       addedItem.quantity -= 1
      //       let newTotal = state.total - addedItem.price
      //       return{
      //           ...state,
      //           total: newTotal
      //       }
      //   }
      //   case 'INCREASE_QUANTITY':
      //   console.log("CARDS ADDS");
      //     state.numberCart++
      //     state.card[action.payload].quantity++;
      //    return{
      //        ...state
      //    }
      // case 'DECREASE_QUANTITY':
      //   console.log("CARDS DELETE");
      //     let quantity = state.card[action.payload].quantity;
      //     if(quantity>1){
      //         state.numberCart--;
      //         state.card[action.payload].quantity--;
      //     }
      //     return{
      //         ...state
      //     }
      // 
      // return{
      //   ...state,
      //   totalPrice = filter(state.totalPrice = totalQty, totalQuantity: state.totalQty - 1)
      //   //totalPrice: state.totalPrice =  totalQuantity - totalQty
      // }
      //    [...state,
      //    totalPrice: state.totalPrice]
      //     const filter = state.card.filter(product => product.id !== action.payload);
      // return {
      //   ...state,
      //   card: filter,
      // }
      //   state.card[0] = findPro;
      //   return {
      //     ...state,
      //     totalPrice: state.totalPrice + parseInt(findPro.price), totalQuantity: state.totalQuantity + 1
      //   }
      // case 'DEC':
      //   console.log('Delete');
      //   findPro = state.card.find(product => product.id === action.payload);
      //   index = state.card.findIndex(product => product.id === action.payload);
      //   if (findPro.quantity > 1) {
      //     findPro.quantity -= 1;
      //     state.card[index] = findPro;
      //     return {
      //       ...state,
      //       totalPrice: state.totalPrice - parseInt(findPro.price), totalQuantity: state.totalQuantity - 1
      //     }
      //   }
      // case "INCREASE":
      //   console.log("i ma a Add to INCREASE")
      //   state.push({
      //     card:   action.productID,
      //     card: card + 1
      // });
      // return { card: [...state, action.payload] };
      // case "DECREASE":
      //   console.log("i ma a Add to DECREASE")
      //   state.push({
      //     card:   action.productID,
      //     card: card - 1
      // });
      // return { card: [...state, []] };
      // case 'INC':
      //   console.log('hii my nam eis furqan') 
      //   findPro = state.card.find(product => product.id === action.payload);
      //   index = state.card.findIndex(product => product.id === action.payload);
      //   findPro.quantity += 1;
      //   state.card[index] = findPro;
      //   return{          
      //     ...state,
      //     totalPrice: state.totalPrice + findPro.price, totalQuantity: state.totalQuantity + 1 
      //   } 
      //   case 'DEC':
      //     console.log('hii my name is Osama') 
      //     findPro = state.card.find(product => product.id === action.payload);
      //   index = state.card.findIndex(product => product.id === action.payload);
      //   // if(findPro.quantity > 1){
      //     findPro.quantity -=1;
      //     state.card[index] = findPro;
      //     return{
      //       ...state,
      //       totalPrice: state.totalPrice -  findPro.price, totalQuantity: state.totalQuantity -1
      //     }
      // }
      // case 'REMOVE':
      //   // findPro = state.card.find(product => product.id === action.payload);
      //   const filtered =  state.card.filter(product => product.id !== action.payload);
      //   return{
      //     ...state,
      //     card: filtered,
      //     // totalPrice: state.totalPrice - findPro.price * findPro.quantity, totalQuantity: state.totalQuantity - findPro.quantity
      //   }
      // }
      // }
  
      // case "withdraw":
      //   return {
      //   }
      // if (action.type === "INCREASE") {
      //   let card = card.map((item) => {
      //     if (item.id === action.payload.id) {
      //       return { ...item, quantity: item.quantity + 1 };
      //     }
      //     return item;
      //   });
      //   return card;
      // }
      // if (action.type === "DECREASE") {
      //   let card = card.map((item) => {
      //     if (item.id === action.payload.id) {
      //       return { ...item, quantity: item.quantity - 1 };
      //     }
      //     return item;
      //   });
      //   return card;
      // }
      // case "INCREASE":
      //   return { ...state, card: action.payload + 1 }
      //   case "DECREASE":
      //     return { ...state, card: action.payload - 1 }
      default:
        return state;
    }
  }
  
  export default reducer;
  
  
  
  
  
  
  
  
  
  //https://codesandbox.io/embed/build-a-shopping-cart-with-react-redux-exodg