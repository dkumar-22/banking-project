import { useState } from 'react'
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Input from '../Input'
// import InputArea from './components/InputArea'
// import InputSelect from './components/InputSelect'


function App() {
  const [data, setData] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => {
      return { ...prev, [name] : value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()   
  }

  return (
  <form className="my-12 max-w-2xl mx-auto" onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          </div>
        

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Initiate NEFT Payment</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Please fill the account information correctly.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-12">
              <Input
                type="text"
                name="fromAcc"
                placeholder=""
                label="From Account"
                handleFunction={handleChange}
                required={true}
              />
            </div>

            <div className="sm:col-span-12">
              <Input
                type="text"
                name="toAcc"
                placeholder=""
                label="To Account"
                handleFunction={handleChange}
                required={true}
              />
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
                name="remarkr"
                placeholder=""
                label="Remark"
                handleFunction={handleChange}
                required={false}
              />
            </div>
            <p className="mt-1 text-sm leading-6 text-gray-600 sm:col-span-12">Please Note : .</p>
            <p className="mt-1 text-sm leading-6 text-gray-600 sm:col-span-12">1.Transaction will be executed in the next working day If they are scheduled for sundays,National holidays.<br />
            2.Timing for NEFT Monday-Saturday(Except 2nd and 4th saturday)6:00 AM to 6:30 PM .</p>
           
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
      </div>
    </form>
  )
}

export default App