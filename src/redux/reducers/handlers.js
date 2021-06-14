
export const INITIAL_STATE = {
    response: null
}

export const request =  (state = INITIAL_STATE, action) => {
    return  { ...state,response :null }
}


export const success =  (state = INITIAL_STATE, action) => {    
    return  { ...state,response :action.payload }
}

export const failure =  (state = INITIAL_STATE, action) => {
    return  { ...state,response :action.payload }
}