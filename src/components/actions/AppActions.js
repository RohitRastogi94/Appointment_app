import TYPES from '../../redux/types/ActionTypes'

export const AppActions = {

    setUserDetails: (data) => ({
        type: TYPES.SET_USER_DETAILS,
        payload: data
    }),

};