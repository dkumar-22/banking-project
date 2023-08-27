import { useEffect, useState } from "react";
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Input from "../Input/Input";
// import InputArea from './components/InputArea'
// import InputSelect from './components/InputSelect'
import validator from "validator";
import axios from "axios";
import { useDataLayerValue } from "../../ContextAPI/DataLayer";
function Setp() {
    const [data, setData] = useState(null);
    const [{ details }, dispatch] = useDataLayerValue();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return { ...prev, [name]: value };
        });
    };
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (data?.loginpass) validate(data.loginpass);
    }, [data]);

    const validate = (value) => {
        //console.log('val',value)
        if (
            validator.isStrongPassword(value, {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
            })
        ) {
            setErrorMessage("Is Strong Password");
        } else {
            setErrorMessage("Is Not Strong Password");
        }
        //console.log('err',errorMessage)
    };

    const handleSubmit = (e) => {
        if (data.transPass !== data.confirmTransPass) {
            alert("Transaction Password do not match");
            return;
        }
        if (data.loginpass !== data.confirmloginpass) {
            alert("Login Password do not match");
            return;
        }
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/user/updatePassword/"+details.customerID, data)
            .then((res) => {
                console.log(res);
                alert(JSON.stringify("Password Changed Succesfully"));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <form
            style={{ marginTop: "150px" }}
            className="my-12 max-w-2xl mx-auto"
            onSubmit={handleSubmit}
        >
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Set New Password
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Please fill the information correctly.
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    * Information is mandatory.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <Input
                            type="password"
                            name="loginpass"
                            placeholder=""
                            label="Login Password*"
                            onChange={(e) => validate(e.target.value)}
                            handleFunction={handleChange}
                            required={true}
                        />

                        {errorMessage === "" ? null : (
                            <span
                                style={{
                                    fontWeight: "bold",
                                    color: "red",
                                }}
                            >
                                {errorMessage}
                            </span>
                        )}
                    </div>

                    <div className="sm:col-span-3">
                        <Input
                            type="password"
                            name="confirmloginpass"
                            placeholder=""
                            label="Confirm Login Password*"
                            handleFunction={handleChange}
                            required={true}
                        />
                    </div>

                    <div className="sm:col-span-3">
                        <Input
                            type="password"
                            name="transPass"
                            placeholder=""
                            label="Transaction Password*"
                            handleFunction={handleChange}
                            required={true}
                        />
                    </div>

                    <div className="sm:col-span-3">
                        <Input
                            type="password"
                            name="confirmTransPass"
                            placeholder=""
                            label="Confirm Transaction Password*"
                            handleFunction={handleChange}
                            required={true}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    );
}

export default Setp;
