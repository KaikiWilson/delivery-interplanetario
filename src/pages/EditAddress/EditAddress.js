// EditAddress.js
import React, { useState } from 'react';
import AddressForm from '../AddressForm/AddressForm';
import './EditAddres.css'

const EditAddress = () => {
  const [addresses, setAddresses] = useState([]);

  const handleSubmit = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };

  const handleEdit = (index, updatedAddress) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index] = updatedAddress;
    setAddresses(updatedAddresses);
  };

  return (
    <div>
      <h1>Addresses</h1>
      <AddressForm onSubmit={handleSubmit} addresses={addresses} />
      <h2>Existing Addresses</h2>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>
            <p>Planet: {address.planet}</p>
            <p>Location: {address.location}</p>
            <button onClick={() => handleEdit(index, address)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditAddress;
