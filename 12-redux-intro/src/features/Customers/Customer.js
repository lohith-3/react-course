import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer);
  console.log(customer);
  const { fullName } = customer;
  return (
    <>
      <h2>👋 Welcome, {fullName}</h2>
    </>
  );
}

export default Customer;
