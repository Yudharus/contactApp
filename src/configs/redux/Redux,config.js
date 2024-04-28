const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    dataContact: [],

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_DATACONTACT':
            return {
                ...state,
                dataContact: action.newValue
            }
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;