export default (jwtToken = null, action) => {
    switch(action.type) {
        case "JWT_TOKEN":
            return action.payload;
        default:
            return jwtToken;
    }
}