export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                // copy current value of STATE object
                ...state,
                // create new 'transactions' array by filtering out the PAYLOAD that is passed to the deleteTransaction ACTION function (DISPATCH functionality) 
                transactions: state.transactions.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}