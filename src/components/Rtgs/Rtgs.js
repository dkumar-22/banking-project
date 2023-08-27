import { useState, useEffect } from "react";
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Input from "../Input/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useDataLayerValue } from "../../ContextAPI/DataLayer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import InputArea from './components/InputArea'
// import InputSelect from './components/InputSelect'

function App() {
    function errorToast(msg) {
        toast.error(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    }

    function successToast(msg) {
        toast.success(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    }

    const [data, setData] = useState(null);
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [{ details }, dispatch] = useDataLayerValue();

    useEffect(() => {
        axios
            .get(
                "http://localhost:8080/api/v1/beneficiary/" + details.accountNo,
                {
                    headers: {
                        Authorization:
                            "Bearer " + sessionStorage.getItem("jwtToken"),
                    },
                }
            )
            .then((res) => {
                console.log(res);
                setBeneficiaries(res.data);
            })
            .catch((e) => console.error(e));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    function writeLog() {
        axios
            .post(
                "http://localhost:8080/api/v1/sendTransaction",
                {
                    senderAccNo: details.accountNo,
                    receiverAccNo: data.toAcc,
                    amount: data.amount,
                    transactionType: "IMPS",
                    message: data.remarks,
                    transDate: data.date,
                },
                {
                    headers: {
                        Authorization:
                            "Bearer " + sessionStorage.getItem("jwtToken"),
                    },
                }
            )
            .then((res) => console.log(res))
            .catch((e) => console.error(e));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        axios
            .put(
                `http://localhost:8080/api/v1/transfer/${details.accountNo}/${data.toAcc}/${data.amount}`,
                {},
                {
                    headers: {
                        Authorization:
                            "Bearer " + sessionStorage.getItem("jwtToken"),
                    },
                }
            )
            .then((res) => {
                console.log(res);
                if (res.data === "Insufficient Balance") {
                    errorToast("Insufficient Balance");
                } else {
                    writeLog();
                    successToast("Transaction Successful");
                }
            })
            .catch((e) => console.error(e));
    };

    return (
        <form className="my-12 max-w-2xl mx-auto" onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12"></div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Initiate RTGS Payment
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Please fill the account information correctly.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-12">
                            <Input
                                type="text"
                                name="fromAcc"
                                placeholder=""
                                label="From Account"
                                handleFunction={handleChange}
                                required={true}
                                value={details.accountNo}
                                disabled={true}
                            />
                        </div>

                        <div className="sm:col-span-5">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Select Beneficiary
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={data?.toAcc}
                                    label="Age"
                                    onChange={handleChange}
                                    name="toAcc"
                                >
                                    {beneficiaries.map((b, idx) => (
                                        <MenuItem
                                            id={idx}
                                            value={b.receiverAccNo}
                                        >
                                            {b.nickname}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <div className="sm:col-span-12">
                            <Input
                                type="text"
                                name="amount"
                                placeholder=""
                                label="Amount"
                                handleFunction={handleChange}
                                required={true}
                            />
                        </div>

                        <div className="sm:col-span-12">
                            <Input
                                type="date"
                                name="date"
                                placeholder=""
                                label="Transaction Date"
                                handleFunction={handleChange}
                                required={true}
                            />
                        </div>

                        <div className="sm:col-span-12">
                            <Input
                                type="text"
                                name="maturity-instructions"
                                placeholder=""
                                label="Maturity Instructions"
                                handleFunction={handleChange}
                                required={true}
                            />
                        </div>

                        <div className="sm:col-span-12">
                            <Input
                                type="text"
                                name="remarks"
                                placeholder=""
                                label="Remark"
                                handleFunction={handleChange}
                                required={false}
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
            </div>
            <ToastContainer />
        </form>
    );
}

export default App;
