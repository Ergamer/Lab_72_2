import {
    FETCH_PIZZAS_LIST, FETCH_PIZZAS_LIST_ERROR, FETCH_PIZZAS_LIST_REQUEST,
    FETCH_PIZZAS_LIST_SUCCESS, GET_PIZZA_INFO
} from "./actions";


const initialState = {
    pizzas: {},
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PIZZAS_LIST:
            return {...state, pizzas: action.pizzas};
        case GET_PIZZA_INFO:
            return {...state, pizzas: action.pizzas};
        case FETCH_PIZZAS_LIST_REQUEST:
            return {...state, loading: true};
        case FETCH_PIZZAS_LIST_SUCCESS:
            return {...state, pizzas: action.pizzas || {}, loading: false};
        case FETCH_PIZZAS_LIST_ERROR:
            return {...state, loading: false};
        default:
            return state;
    }
};

export default reducer;