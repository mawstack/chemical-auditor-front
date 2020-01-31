export default (jwtToken = null) => {
    switch(action.type) {
        case "JWT_TOKEN":
            return jwtToken;
        default:
            return null;
    }
}