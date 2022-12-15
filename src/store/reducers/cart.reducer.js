import { cartTypes } from '../types'

const {ADD_TO_CART,REMOVE_FROM_CART,CONFIRM_ORDER} =cartTypes

const initialState = {
    items:[],
    total:0
}

const cartReducer=(state=initialState, action)=>{
   return state
}

export default cartReducer