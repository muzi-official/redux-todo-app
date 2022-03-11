const initialData = {
  list: [],
};

const reducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((elen) => elen.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    case "REMOVE_TODO":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default reducers;
