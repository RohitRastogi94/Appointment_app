import TYPES from '../../redux/types/ActionTypes';
import { createReducer } from 'reduxsauce';
import * as DefaultHandler from "../../redux/reducers/handlers";

export const HANDLERS = {
    [TYPES.SET_USER_DETAILS]: DefaultHandler.success,
}

export default createReducer(DefaultHandler.INITIAL_STATE, HANDLERS);
