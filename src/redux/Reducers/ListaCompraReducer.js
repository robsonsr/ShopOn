import ActionsTypes from '../ActionTypes'

const initialState = {
    produtos: [],
    valorTotal: 0
}
const ListaCompraReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ActionsTypes.SET_PRODUTO_LISTA_COMPRA:
            return {
                ...state,
                produtos: [
                    ...state.produtos,
                    action.produto
                ]
            }
        case ActionsTypes.REMOVE_PRODUTO_LISTA_COMPRA:
            
            if(action.produto){
                const newListaProduto = state.produtos.filter(({ id }) => {
                    return action.produto?.id != id
                })
                return {
                    ...state,
                    produtos: [
                        ...newListaProduto
                    ]
                }
            }
            return {
                ...state,
            }
        case ActionsTypes.SET_VALOR_TOTAL:
            console.log("RE", action.valorTotal)
            return {
                ...state,
                valorTotal: action.valorTotal
            }
        default:
            return state;
    }
}

export default ListaCompraReducer;