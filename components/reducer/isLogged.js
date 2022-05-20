const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            if (sessionStorage.getItem("login") == 'yes') {
                console.log(sessionStorage.getItem("login"));
                return true;
            } else
                return false;
        default:
            return state;
    }
}

export default loggedReducer;