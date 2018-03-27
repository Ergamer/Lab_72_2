import axios from '../../axios-pizza';


export const FETCH_PIZZAS_LIST = 'FETCH_PIZZAS_LIST';
export const GET_PIZZA_INFO = 'GET_PIZZA_INFO';
export const FETCH_PIZZAS_LIST_REQUEST = 'FETCH_PIZZAS_LIST_REQUEST';
export const FETCH_PIZZAS_LIST_SUCCESS = 'FETCH_PIZZAS_LIST_SUCCESS';
export const FETCH_PIZZAS_LIST_ERROR = 'FETCH_PIZZAS_LIST_ERROR';




export const fetchPizzasListRequest = () => {
    return {type: FETCH_PIZZAS_LIST_REQUEST};
};

export const fetchPizzasListSuccess = (pizzas) => {
    return {type: FETCH_PIZZAS_LIST_SUCCESS, pizzas}
};

export const fetchPizzasListError = () => {
    return {type: FETCH_PIZZAS_LIST_ERROR}
};

export const getPizzaInfo = () => {
  return dispatch => {
      dispatch(fetchPizzasListRequest());
      axios.post('/pizzas.json').then(response => {
          dispatch(fetchPizzasListSuccess(response.data));
      }, error => {
         dispatch(fetchPizzasListError());
      });
  }
};

export const fetchPizzasList = () => {
    return dispatch => {
        dispatch(fetchPizzasListRequest());
        axios.get('/pizzas.json').then(response => {
            console.log(response.data)
            dispatch(fetchPizzasListSuccess(response.data));
        }, error => {
            dispatch(fetchPizzasListError());
        });
    }
};