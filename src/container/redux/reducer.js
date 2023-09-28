export const dataRecord = (state=[],action) =>{

    switch(action.type){
        case "SET_DATA":
            return [action.payload];
        default:
            return state
    }
}
export const dataCategories = (state=[],action) =>{

    switch(action.type){
        case "SET_CATEGORIES":
            return [action.payload];
        default:
            return state
    }
}

export const dataCart = (state=[], action ) => {
    switch(action.type){
        case 'ADD_ITEM': 
            const newArr = [...state];
            const index = newArr.findIndex((element) => element.id == action.payload.id);
            if(index > -1){
                newArr[index].quantity += 1;
                newArr[index].price *= newArr[index].quantity;
            }else{
                action.payload['quantity'] = 1;
                newArr.push(action.payload)
            }           
            
            return newArr;
                
        case 'REMOVE_ITEM':
            return state.filter(function(element){
                return (element.id != action.payload.id) 
            })
        default:
            return state;
    }
}