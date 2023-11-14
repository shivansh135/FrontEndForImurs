import React, { useState } from 'react';
import { Dashboard } from '../../structure/structure';
import { HedingSubheding, MainHeading } from '../../../component/headings/heading';
import CustomDropdown from '../form-component/formcomponents';
import { FormGroup } from './order-form';
import { ButtonSecondary } from '../../dash_buttons/buttons';
import { ButtonPrimary } from '../../../component/button/button';
import ProductGrid from '../../../component/product/product-grid/product-grid';

export const OrderSample = (props) => {
  if (!props.data.isnew) {
    window.location = "/orders";
  }

  const gsm_options = ['130 gsm', '170 gsm', '220 gsm', '300 gsm'];
  const paper_options = ['Matt art paper', 'Glossy art paper', 'Lustre paper', 'Metallic Paper', 'Silk Paper'];
  const lamination_options = ['Matt Laminated', 'Glossy Laminated', 'Silk Laminated', 'Feather Laminated'];
  const quantity_options = ['1', '2', '5', '10'];

  const [selectedGSM, setSelectedGSM] = useState('170 gsm');
  const [selectedPaper, setSelectedPaper] = useState('Matt art paper');
  const [selectedLamination, setSelectedLamination] = useState('Matt Laminated');
  const [selectedQuantity, setSelectedQuantity] = useState('1');
  const [address, setAddress] = useState(props.data.addresses.length > 0 ? props.data.addresses[0].street : '');
  const [city, setCity] = useState(props.data.addresses.length > 0 ? props.data.addresses[0].city : '');
  const [zip, setZip] = useState(props.data.addresses.length > 0 ? props.data.addresses[0].postalCode : '');
  const [isChecked, setIsChecked] = useState(false);

  const handleSelectGSM = (selectedValue) => {
    setSelectedGSM(selectedValue);
  };

  const handleSelectPaper = (selectedValue) => {
    setSelectedPaper(selectedValue);
  };

  const handleSelectLamination = (selectedValue) => {
    setSelectedLamination(selectedValue);
  };

  const handleSelectQuantity = (selectedValue) => {
    setSelectedQuantity(selectedValue);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = () => {
    if (address !== "" && city !== "" && zip !== "" && isChecked) {
      const data = {
        address,
        city,
        zipcode: zip,
        gsm: selectedGSM,
        paper: selectedPaper,
        lamination: selectedLamination,
        quantity: selectedQuantity,
        _id: props.data._id
      };
    
      
  
  
      const apiUrl = process.env.REACT_APP_API_URL + "api/paymentForSample";

      // Make the fetch request here
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      };

      fetch(apiUrl, requestOptions)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else if (response.status === 201) {
            window.location = '/login';
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then(data => {
          window.location = data.url;
        })
        .catch(error => {
          console.error("Error sending payment ID: " + error);
        });
    } else {
      alert('Please fill in all fields and check the checkbox.');
    }
  };

  return (
    <Dashboard data={props.data}>
      <HedingSubheding heading="Physical Sample" sub_heading="A non-customized copy of imurs printed as per your specifications to match your taste." />
      <img src="physical_sample.jpg" alt="sample_img" style={{ width: '80%', margin: 'auto', maxWidth: '540px' }} />
      <div style={{ display: 'flex', gap: '40px' }}>
        <CustomDropdown
          label="GSM"
          options={gsm_options}
          selectedValue={selectedGSM}
          onSelect={handleSelectGSM}
          recommend={1}
          dropdownStyle={{}}
          optionStyle={{}}
        />
        <CustomDropdown
          label="Paper"
          options={paper_options}
          selectedValue={selectedPaper}
          onSelect={handleSelectPaper}
          recommend={0}
          dropdownStyle={{}}
          optionStyle={{}}
        />
      </div>
      <div style={{ display: 'flex', gap: '40px' }}>
        <CustomDropdown
          label="Lamination"
          options={lamination_options}
          selectedValue={selectedLamination}
          onSelect={handleSelectLamination}
          dropdownStyle={{}}
          recommend={0}
          optionStyle={{}}
        />

        <CustomDropdown
          label="Quantity"
          options={quantity_options}
          selectedValue={selectedQuantity}
          onSelect={handleSelectQuantity}
          recommend={1}
          dropdownStyle={{}}
          optionStyle={{}}
        />
      </div>
      <hr></hr>
      <div className='form' style={{ margin: '0' }}>
        <FormGroup label="Address" inputType="text" id="address" value={address} onChange={handleAddressChange} />
        <div className='g2' style={{ flexDirection: 'row' }}>
          <FormGroup label="Enter City" inputType="text" id="city" value={city} onChange={handleCityChange} />
          <FormGroup label="Enter Zipcode" inputType="text" id="zip" value={zip} onChange={handleZipChange} />
        </div>
      </div>
      <div className='chackbox-group'>
        <input type="checkbox" id="conf" name="conf" value="conf" style={{ width: '30px' }} checked={isChecked} onChange={handleCheckboxChange} />
        <label htmlFor="conf">
          I understand that sampling charge is a nominal fee and has nothing to do with the actual price of the product.
        </label>
      </div>
      <div style={{ width: 'fit-content', margin: 'auto' }}>
        <div onClick={handleSubmit} style={{ width: 'fit-content', cursor: 'pointer' }}>
          <ButtonPrimary text="Pay ₹299" />
        </div>
      </div>
    </Dashboard>
  );
};

export const Orderd2csample = (props)=>
{



  console.log(props.data);

  return(

    <div className="body">
    <MainHeading name="Imurs gratest hits"/>
    <ProductGrid info={props.data} flag={1} />
  </div>
  )





}