import { useState } from "react";

const UpdateObject = () => {
  const [customer, setCustomer] = useState({
    name: "Emily",
    address: {
      city: "Mexico",
      zipCode: 890587,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        city: "London",
      },
    });
  };

  return (
    <div>
      Name: {customer.name}
      City:{customer.address.city}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default UpdateObject;
