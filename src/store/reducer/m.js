const init = {
    chiladMenuOne: '子菜单11',
    chiladMenuTwo:'子菜单22'
}
const reducer = (state = init, action) => {
    const { type, payload } = action
    switch (type) {
        case 'CHANGE_NAME1':
            return {...state,chiladMenuOne:payload}
        case 'CHANGE_NAME2':
            return {...state,chiladMenuTwo:payload}
        default:
            return state
    }
}
export default reducer

