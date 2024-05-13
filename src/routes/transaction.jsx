export default function Transaction() {
  const transaction = {
    id: 1,
    timeStamp: "2024-05-09T23:47:01Z",
    transactionType: "EXPENSE",
    amount: 20.0,
    /*     category: "Oliveira da Silva", */
    /*     subcategory: "Oliveira da Silva", */
    expiredDate: "2024-07-25",
    description: "descrição blablabla",
    observation: "descrição blebleble",
    isConfirmed: true,
    /*     tags: "Oliveira da Silva", */
    /*     sourceAccount: "Oliveira da Silva", */
    /*     destinationAccount: "Oliveira da Silva", */
  };

  return (
    <div id="transaction">
      <div>
        <h1 className="text-3xl pb-4">Transaction Query</h1>
        <hr />
        <ul>
          <li>{transaction.id}</li>
          <li>{transaction.timeStamp}</li>
          <li>{transaction.transactionType}</li>
          {/*           <li>{transaction.category}</li> */}
          {/*           <li>{transaction.subcategory}</li> */}
          <li>{transaction.expiredDate}</li>
          <li>{transaction.description}</li>
          <li>{transaction.observation}</li>
          <li>{transaction.isConfirmed ? "Sim" : "Não"}</li>
          {/*           <li>{transaction.tags}</li> */}
          {/*           <li>{transaction.sourceAccount}</li> */}
          {/*           <li>{transaction.destinationAccount}</li> */}
        </ul>
      </div>
    </div>
  );
}
