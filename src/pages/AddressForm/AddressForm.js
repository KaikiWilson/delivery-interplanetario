import React, { useState } from 'react';
import './AddressForm.css'
import blackArrow from './img/arrow-black.svg'
import { Link } from 'react-router-dom';

const AddressForm = () => {
  const [address, setAddress] = useState({
    planet: '',
    location: '',
  });

  const [addressList, setAddressList] = useState([]);


  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddressList([...addressList, address]);
    setAddress({
      planet: '',
      location: '',
    });
  };

  const handleDelete = (index) => {
    setAddressList(addressList.filter((_, i) => i !== index));
  };

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      
      <div className='before-header'>
        <header>
          <div className='black-arrow-box'>
            <img alt='black arrow' src={blackArrow} className='.material-symbols-outlined'/>
          </div>

          <h1>Address</h1>      
        </header>
      </div>

      <div className='before-main'>
        <main>
        <div className='shipping-billing-allbox'>
          <div className='shipping-and-billing-address-box'>
            <button className='shipping-address' a>
              Shipping Address
            </button>

            <button disabled className='billing-address'>
              Billing Address
            </button>
          </div>
        </div>

          <div className='search-address-box'>
            <div className='search-allbox'>
              <span class="material-symbols-outlined">
                search
              </span>

              <input disabled className='search-input' type='search' placeholder='Search the address here'/>
            </div>
          </div>
      
          <form onSubmit={handleSubmit}>
            <label className='label-planet'>
              Planet
              <input className='planet'
                type="text"
                name="planet"
                value={address.planet}
                onChange={handleChange}
                required
              />
            </label>
            <label className='label-location'>
              Location
              <input className='location'
                type="text"
                name="location"
                value={address.location}
                onChange={handleChange}
                required
              />
            </label>
            <div className='button-submit-box'>
              <button className='submit' type="submit">Submit</button>
            </div>
          </form>

          <div className='address-list-box'>
            {addressList.map((addr, index) => (
              <div className='card-list' key={index}>
                <p className='tag'>
                  house
                </p>

                <h3 className='title'>
                  {addr.planet}
                </h3>

                <h5 className='phone-number'>
                  {/* You can add more fields here */}
                </h5>

                <p className='location-address'>
                  {addr.location}
                </p>

                <div className='edit-and-delete-button-box'>
                  {/* Redirect to edit page without specific address */}
                  <button className='edit-addres' disabled>
                      Edit Address
                  </button>

                  <button className='delete-address' onClick={() => handleDelete(index)}>
                    Delete Address
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default AddressForm;
