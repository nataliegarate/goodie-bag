
const initialState = {candies: []}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ALL:
      return {candies: [...action.candies]}
    default:
      return state
  }
}

export default rootReducer
