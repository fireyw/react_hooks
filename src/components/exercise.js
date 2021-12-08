import {createStore} from 'redux';

const initialState = {
    counter: 0,
    text: '',
    list: []
}

//액션타입정의
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST'


function increase() {
    return {
        type: INCREASE
    }
}

const decrease = () => ({
    type: DECREASE
})

const change_text = text => ({
    type: CHANGE_TEXT,
    text
})

const add_to_list = item => ({
    type: ADD_TO_LIST,
    item
})

function reducer(state=initialState, action){
    switch(action.type){
        case INCREASE:
            return {
                ...state,
                counter: state.counter +1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter -1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            }

    }
}

const store = createStore(reducer)

console.log(store.getState());

const listener = () => {
    const state = store.getState()
    console.log('listener: ', state);
}

const unsubscribe= store.subscribe(listener);
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(change_text('fireyw'));
store.dispatch(add_to_list('a'));
store.dispatch(add_to_list('b'));
