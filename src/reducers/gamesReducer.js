const initState = {
    popular : [],
    newGames : [],
    upcoming : [],
    searched: []
}

const gamesReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            };
            case "FETCH_SEARCHED":
                return{
                    ...state,
                    search: action.payload.searched, 
                }
        default:
            return {...state}
    }
}

//Action



export default gamesReducer;