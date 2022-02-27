export const addEntry = (entry) => {
    return {
      type: "ADD_ENTRY",
      entry: entry
    };
  };
  
  export const deleteEntry = (id) => {
    return {
      type: "DELETE_ENTRY",
      id: id
    };
  };
  export const updateEntry = (entry, id) => {
    return {
      type: "UPDATE_ENTRY",
      entry: entry,
      id:id
    };
  };
  
  