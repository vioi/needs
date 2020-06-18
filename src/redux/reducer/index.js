/**
 * reducer
 */

import { combineReducers } from 'redux'
import { type } from '../action';
const ebikeData = (state, action) => {
    switch (action.type) {
        case type.SWITCH_MENU:
            return {
                ...state,
                menuName:action.menuName
            };

        case type.MENU_PULL:
            return {
                ...state,
                menuState:action.menuState
            } 
        case type.MENU_PUSH:
            return {
                ...state,
                menuState:action.menuState
            }       
        default:
            return {...state};
    }
};

export default ebikeData;