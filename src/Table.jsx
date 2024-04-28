// Mock transaction data
const mockTransactions = [
  { id: 1, date: '2022-04-20', description: 'Salary', amount: 200000 },
  { id: 2, date: '2022-04-21', description: 'Rent', amount: -12000 },
  { id: 3, date: '2022-04-22', description: 'Groceries', amount: -2000 },
  { id: 4, date: '2022-04-22', description: 'Lunch', amount: 500 },
  { id: 5, date: '2022-04-21', description: 'Drinks', amount: -1000 },
    { id: 6, date: '2022-04-23', description: 'Bill'}
]
const Table = ({ transactions }) => {
  return (
    <>
    <table>
       
    <thead>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
        
     
     <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
              <td>{transaction.date}</td>
            <td>{transaction.category}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
     </tbody>
    </table>
    </>
  );
};


export default Table;
