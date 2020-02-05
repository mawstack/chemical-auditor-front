// API calling records > from here with thunk
// Form entry > via arguments

// General Redux Guide:
// Assuming 'entries' are an array of objects...
// The action "CREATE_ENTRY" would be called by the component with an entry passed in...
// Then the action comes to the entries reducer, is picked up by the switch...
// And the entries reducer returns a whole new 'all entries' array...
// With the current state it represents spread out PLUS that new entry (which has been set to the action's payload)

// Example Reducer syntax
// export default (state = [], action) => {
//   switch (action.type) {
//     case "CREATE_ENTRY":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// Example Action Creator syntax
// export const createEntry = (entry = {}) => {
//   return {
//     type: "CREATE_ENTRY",
//     payload: entry
//   };
// };

export const setJwtToken = (token = null) => {
  return {
    type: "JWT_TOKEN",
    payload: token
  }
}

export const setPdfTrigger = (pdfTrigger = null, action) => {
  return {
    type: "PDF_TRIGGER",
    payload: pdfTrigger
  }
}