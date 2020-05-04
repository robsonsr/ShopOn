import ActionsTypes from '../ActionTypes'


const setProdutoLista = (produto) => {
    return {
        type: ActionsTypes.SET_PRODUTO_LISTA_COMPRA,
        produto
    }
}

const removerProdutoLista = (produto) => {
    return {
        type: ActionsTypes.REMOVE_PRODUTO_LISTA_COMPRA,
        produto
    }
}

const setValueTotal = (valorTotal) => {
    console.log("AC", valorTotal)
    return {
        type: ActionsTypes.SET_VALOR_TOTAL,
        valorTotal
    }
}

export default {
    setProdutoLista,
    removerProdutoLista,
    setValueTotal
}