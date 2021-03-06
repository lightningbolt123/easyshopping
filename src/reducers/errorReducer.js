import { GET_ERRORS } from '../actions/catalogue/types';

const initialState = {
    msg: '',
    status: ''
}

export default function errors (state=initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                msg: action.payload.msg,
                status: action.payload.status
            };
        default:
            return state;
    }
}