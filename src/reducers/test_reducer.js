const defaultState = {};

export default (state = defaultState, action) => {
    switch(action.type) {
        case "RECORD":
            return state;
        default:
            return state;
    };
};