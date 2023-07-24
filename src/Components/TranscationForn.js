import { useState } from 'react'

function TransactionsForm({ transactionsData, setTransactionsData }) {
    const [formDetails, setFormDetails] = useState({
        date: "",
        description: "",
        category: "",
        amount: 0,
    })

    const { date, description, category, amount } = formDetails;


    const onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(formDetails)

        // copy formDetails and add new key-value id
        const updatedFormDetails = {...formDetails, id: transactionsData.length + 1}

        const updatedTransactionsData = [...transactionsData, updatedFormDetails]

        // console.log(updatedTransactionsData)

        setTransactionsData(updatedTransactionsData)

        // clear form inputs after submitting
        setFormDetails({ 
            date: "",
            description: "",
            category: "",
            amount: 0
        })
    }

    const changeFormDetails = (event) => {
        setFormDetails({...formDetails, [event.target.name]: event.target.value})
    }

    return (
        <form className="transaction_form" onSubmit={onFormSubmit}>
            <h2>Add Transaction</h2>
            <div>
                <label htmlFor="date">Date</label>
                <input id="date" name="date" type="date" onChange={changeFormDetails} value={date} />
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" onChange={changeFormDetails} value={description}/>
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <input id="category" type="text" name="category" onChange={changeFormDetails} value={category}/>
            </div>

            <div>
                <label htmlFor="amount">Amount</label>
                <input id="amount" type="text" name="amount" onChange={changeFormDetails} value={amount} />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
};

export default TransactionsForm;