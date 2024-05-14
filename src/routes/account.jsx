import AccountCard from "../components/accountCard/account";
import Button from "../components/button/button";

export default function Account() {
  return (
    <div>
      <div>
        <header>
          <h1 className="text-3xl pb-4">Account Query</h1>
          <hr className="py-4" />
        </header>
        <section className="flex items-center justify-between">
          <h2 className="text-2xl pb-4">Accounts</h2>
          <Button title="New Account" />
        </section>
        <hr className="mb-4" />
        <div className="flex gap-2">
          <AccountCard name="Nubank" balance="56,70" />
          <AccountCard name="Carteira" balance="4.556,60" />
        </div>
      </div>
    </div>
  );
}
