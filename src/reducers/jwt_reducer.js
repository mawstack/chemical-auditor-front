export default (jwtToken = null, action) => {
    switch(action.type) {
        case "JWT_TOKEN":
            return jwtToken;
        default:
            return null;
    }
}