import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider } from 'react-redux';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';


const MAKE_HAPPY = 'MAKE_HAPPY';
const MAKE_UNHAPPY = 'MAKE_UNHAPPY';

function happyReducer(state = true, action) {
    switch (action.type) {
        case MAKE_HAPPY:
            return true;

            case MAKE_UNHAPPY:
                return false;
                default:
                    return state;

    }
}

const reducer = combineReducers({
    amIHappy: happyReducer,
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

ReactDOM.render(<Provider store={store}><App /></Provider>,  document.getElementById('root'));


export function makeHappy(){
    return{
        type: MAKE_HAPPY,

    }
}

export function makeUnhappy(){
    return {
        type: MAKE_UNHAPPY,
    }
}