export const initialState = {
    logged: false,
    customerID: "",
    jwtToken: "",
    adminLogged: false,
    details: {
        accountNo: "",
        customerID: "",
        firstName: "",
        lastName: "",
        currentAddress: "",
        permanentAddress: "",
        contactNo: "",
        aadharNo: "",
        panNo: "",
        dob: "",
        email: "",
        middleName: "",
        minAccountBalance: "",
        occupation: "",
    },
};

// console.log(initialState);

function reducer(state, action) {
    console.log("🕺", action);
    switch (action.type) {
        case "SET_LOGGED":
            return {
                ...state,
                logged: action.logged,
            };
        case "SET_CUSTOMERID":
            return {
                ...state,
                customerID: action.customerID,
            };
        case "SET_DETAILS":
            return {
                ...state,
                details: action.details,
            };
        case "SET_JWTTOKEN":
            return {
                ...state,
                jwtToken: action.jwtToken,
            };
        case "SET_ADMINLOGGED":
            return {
                ...state,
                adminLogged: action.adminLogged,
            };
        default:
            return state;
    }
}

export default reducer;
