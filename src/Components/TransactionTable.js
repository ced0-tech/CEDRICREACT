function TransactionsTable({ transactionsData }) {

    const displayTransactionsData = transactionsData.map(({id ,date ,description, category, amount}) => {
        
        return (
                    <tr key={id}>
                        <td>{date}</td>
                        <td>{description}</td>
                        <td>{category}</td>
                        <td>{amount}</td>
                    </tr>
        )
    })

    return (
        <div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>date</th>
                        <th>Description</th>
                        <th>category</th>
                        <th>amount</th>
                    </tr>
                </thead>
                <tbody>
                    {displayTransactionsData}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionsTable;