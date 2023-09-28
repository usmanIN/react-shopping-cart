
const action = {
    setData: function(data){
        return {
            type:"SET_DATA",
            payload: data,
        }
    },
    setCategories: function(data){
        return {
            type:"SET_CATEGORIES",
            payload: data,
        }
    },
    addItem: function(data){
        return {
            type:"ADD_ITEM",
            payload:data,
        }
    },
    delItem: function(data){
        return {
            type:"REMOVE_ITEM",
            payload:data,
        }
    },
    getCartItem: function(){
        return {
            type: 'CART_ITEM',
        }
    }
}


export default action;