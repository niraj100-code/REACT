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

    case "REMOVE_SONG":
      return state.filter((song) => song.id !== action.payload);

    default:
      return state;
  }
}

export default playlistReducer;