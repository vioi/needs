/*
 * action 类型
 */

export const type = {
    SWITCH_MENU : 'SWITCH_MENU',
    MENU_PULL:"MENU_PULL",
    MENU_PUSH:"MENU_PUSH"

}

// 菜单点击切换，修改面包屑名称
export function switchMenu(menuName) {
    return {
        type:type.SWITCH_MENU,
        menuName
    }
}

export function menuHandleState(menuState) {
    if(menuState =='pull'){
        return {
            type:type.MENU_PULL,
            menuState
        }
    }
 
    if(menuState == 'push'){
        return {
            type:type.MENU_PUSH,
            menuState
        }
    }
}