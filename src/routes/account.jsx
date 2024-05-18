import { AiOutlinePlus } from "react-icons/ai";
import AccountCard from "../components/accountCard/account";
import Button from "../components/button/button";
import { api } from "../services/axios";
import { useState, useEffect } from "react";
import { formatCurrency } from "../utils/formatCurrency";

export default function Account() {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    api
      .get("/accounts")
      .then((res) => setAccounts(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div>
        <header>
          <h1 className="text-3xl py-4">Account Query</h1>
          <hr className="py-4" />
        </header>
        <section className="flex items-center justify-between">
          <h2 className="text-2xl">Accounts</h2>
          <Button title="New Account">
            <AiOutlinePlus />
          </Button>
        </section>
        <hr className="my-4" />
        <div className="flex gap-2">
          {accounts.length ? (
            accounts.map((account) => (
              <AccountCard
                key={account.id}
                name={account.name}
                balance={formatCurrency(account.balance)}
              />
            ))
          ) : (
            <div>There are no Account registered yet</div>
          )}
        </div>
      </div>
    </div>
  );
}
