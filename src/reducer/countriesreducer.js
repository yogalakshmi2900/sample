const initialState = {
  List  : []
}

function CountriesReducer(state = initialState, action) {
  switch (action.type) {
    case "LIST_DATA":
      return Object.assign({}, state, {
        List  : action.payload
      })
      default:
        return state
  }
}

export default CountriesReducer;
