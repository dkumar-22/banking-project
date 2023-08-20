export const initialState = {
    logged: false,
    customerID: "",
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
        default:
            return state;
    }
}

export default reducer;
