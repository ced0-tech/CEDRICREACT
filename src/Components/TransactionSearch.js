import { useState } from "react";

function TransactionSearch({ transactionsData, setTransactionsData }) {
    const [searchTerm, setSearchTerm] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault();

        const filteredTransactions = transactionsData.filter((transaction) => {
            if (transaction.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                return transaction
            }
        })

        setTransactionsData(filteredTransactions)
    }

    const onInputChange = (event) => {
        setSearchTerm(event.target.value)
    }
    
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input id="search_input" className="search_input" type="text" onChange={onInputChange} value={searchTerm} placeholder="Search by description" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default TransactionSearch;