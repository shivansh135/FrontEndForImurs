import React, { useState } from 'react';
import { Dashboard } from '../../structure/structure';
import { HedingSubheding } from '../../../component/headings/heading';
import CustomDropdown from '../form-component/formcomponents';
import { FormGroup } from './order-form';
import { ButtonSecondary } from '../../dash_buttons/buttons';
export const OrderSample = (props) => {


  if(!props.data.isnew){
    window.location = "/orders"
  }

  const gsm_option = ['130 gsm', '170 gsm', '220 gsm', '300 gsm'];
  const paper_options = ['Matt art paper', 'Glossy art paper', 'Lustre paper', 'Metallic Paper', 'Silk Paper'];
  const lamination_option = ['Matt Laminated', 'Glossy Laminated', 'Silk Laminated', 'Feather Laminated'];
  const quantity_option = ['1', '2', '5', '10'];

  const [selected_gsm, set_selected_gsm] = useState('170 gsm');
  const [selected_paper, set_selected_paper] = useState('Matt art paper');
  const [selected_lamination, set_selected_lamination] = useState('Matt Laminated');
  const [selected_quantity, set_selected_quantity] = useState('1');

  const handleSelectGSM = (selectedValue) => {
    set_selected_gsm(selectedValue);
  };

  const handleSelectPaper = (selectedValue) => {
    set_selected_paper(selectedValue);
  };

  const handleSelectLamination = (selectedValue) => {
    set_selected_lamination(selectedValue);
  };

  const handleSelectQuantity = (selectedValue) => {
    set_selected_quantity(selectedValue);
  };

  const handleSubmit = (props) => {
    if (document.getElementById('address').value!="" && document.getElementById('city').value!=""  && document.getElementById('zip').value!=""  && document.getElementById('conf').checked ) {
      // Prepare the data to send
      const data = {
        address:document.getElementById('address').value,
        city: document.getElementById('city').value,
        zipcode:document.getElementById('zip').value,
        gsm: selected_gsm,
        paper: selected_paper,
        lamination: selected_lamination,
        quantity: selected_quantity,
        _id: props._id
      };
  console.log(data)
      // Make the fetch request here
      fetch(process.env.REACT_APP_API_URL+'api/order-sample', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response.data)
          if(response.status == 201){
            window.location.reload()
          }else{
            alert("Error")
          }
        })
        .catch((error) => {
          // Handle any errors, e.g., show an error message
        });
    } else {
      // Display an error message indicating that all fields must be filled and the checkbox must be checked.
      alert('Please fill in all fields and check the checkbox.');
    }
  };
  

  return (
    <Dashboard data={props.data}>
      <HedingSubheding heading="Physical Sample" sub_heading="Physical Sample Physical Sample HedingSubheding OrderSample" />
      <img src="physical_sample.jpg" alt="sample_img" style={{width:'80%',margin:'auto',maxWidth:'540px'}}/>
      <div style={{display:'flex',gap:'40px'}}>

        <CustomDropdown
            lable="GSM"
            options={gsm_option}
            selectedValue={selected_gsm}
            onSelect={handleSelectGSM}
            recommend={1}
            dropdownStyle={{}}
            optionStyle={{}}
        />
        <CustomDropdown
            lable="Paper"
            options={paper_options}
            selectedValue={selected_paper}
            onSelect={handleSelectPaper}
            recommend={0}
            dropdownStyle={{}}
            optionStyle={{}}
        />
      </div>
      <div style={{display:'flex',gap:'40px'}}>
        <CustomDropdown
            lable="Lamination"
            options={lamination_option}
            selectedValue={selected_lamination}
            onSelect={handleSelectLamination}
            dropdownStyle={{}}
            recommend={0}
            optionStyle={{}}
        />

        <CustomDropdown
            lable="Quantity"
            options={quantity_option}
            selectedValue={selected_quantity}
            onSelect={handleSelectQuantity}
            recommend={1}
            dropdownStyle={{}}
            optionStyle={{}}
        />
    </div>
    <hr></hr>
    <div className='form' style={{margin:'0'}}>
        <FormGroup label="Address" inputType="text" id="address" value={props.data.addresses.length>0?props.data.addresses[0]['street']:""} />
        <div className='g2' style={{flexDirection:'row'}}>
            <FormGroup label="Enter City" inputType="text" id="city" value={props.data.addresses.length>0?props.data.addresses[0]['city']:""}/>
            <FormGroup label="Enter Zipcode" inputType="text" id="zip" value={props.data.addresses.length>0?props.data.addresses[0]['postalCode']:""}/>
        </div>
    </div>
    <div className='chackbox-group'>
            <input type="checkbox" id="conf" name="conf" value="conf" />
            <label for="conf">
            I understand that sampling charge is a nominal fee and has nothing to do with the actual price of the product.            </label>
        </div>
    <div style={{width:'fit-content',margin:'auto'}}>
    <div onClick={() => handleSubmit(props.data, document.getElementById('form'))} style={{ width: 'fit-content', cursor: 'pointer' }}>
  <ButtonSecondary text="Submit" />
</div>

    </div>    
    </Dashboard>
  );
}
