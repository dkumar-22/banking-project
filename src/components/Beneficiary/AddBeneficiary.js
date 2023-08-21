import { useState } from 'react'
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Input from '../Input/Input'
// import InputArea from './components/InputArea'
// import InputSelect from './components/InputSelect'
import axios from "axios"
import { useDataLayerValue } from '../../ContextAPI/DataLayer'


function App() {
  const [{ details }, dispatch] = useDataLayerValue();
  const [data, setData] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    if (data.accountNumber !== data.confirmAccountNumber) {
      alert("Account numbers do not match");
      return;
    }
    e.preventDefault()
    console.log(data)
    axios.post("http://localhost:8080/api/v1/sendBeneficiary", {
      name: data.name,
      receiverAccNo: data.accountNumber,
      nickname: data.nickname,
      accountNo: details.accountNo
    }).then((res) => console.log(res)).catch((e) => console.error(e))

  }

  return (
    <form style={{ marginTop: "150px" }} className="my-12 max-w-2xl mx-auto" onSubmit={handleSubmit}>


      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Add Beneficiary</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Please fill the account information correctly.</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <Input
              type="text"
              name="name"
              placeholder=""
              label="Beneficiary name*"
              handleFunction={handleChange}
              required={true}
            />
          </div>

          <div className="sm:col-span-3">
            <Input
              type="text"
              name="nickname"
              placeholder=""
              label="Nick name*"
              handleFunction={handleChange}
              required={true}
            />
          </div>

          <div className="sm:col-span-3">
            <Input
              type="text"
              name="accountNumber"
              placeholder=""
              label="Beneficiary account number*"
              handleFunction={handleChange}
              required={true}
            />
          </div>

          <div className="sm:col-span-3">
            <Input
              type="text"
              name="confirmAccountNumber"
              placeholder=""
              label="Re-enter account number*"
              handleFunction={handleChange}
              required={true}

            />
          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
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
  )
}

export default App