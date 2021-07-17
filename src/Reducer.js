export const initialState= {
    name:'Amit',
    city: 'Gurgaon'
}

const Reducer = (state= initialState, action)=>{


    switch (action.type) {
        case 'UPDATE_CITY':
        return {
            ...state,
            city: action.value
        }

        case 'UPDATE_NAME':
        return {
            ...state,
            name: action.value
        }
            
           
        default:
            return state;
    }


}

export default Reducer;