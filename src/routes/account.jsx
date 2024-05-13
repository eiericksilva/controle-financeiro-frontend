export default function Account() {
  const account = {
    id: 1,
    name: "2024-05-09T23:47:01Z",
    balance: "EXPENSE",
    /*       user: User, */
  };

  return (
    <div id="transaction">
      <div>
        <h1 className="text-3xl pb-4">Account Query</h1>
        <hr />
        <ul>
          <li>{account.id}</li>
          <li>{account.name}</li>
          <li>{account.balance}</li>
          {/*           <li>{account.user}</li> */}
          {/*           <li>{transaction.subcategory}</li> */}
        </ul>
      </div>
    </div>
  );
}
