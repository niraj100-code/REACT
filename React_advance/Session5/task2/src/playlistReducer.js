function playlistReducer(state, action) {
  switch (action.type) {
    case "ADD_SONG":
      return [
        ...state,
        {
          id: Date.now(),
          name: action.payload,
        },
      ];

    default:
      return state;
  }
}

export default playlistReducer;