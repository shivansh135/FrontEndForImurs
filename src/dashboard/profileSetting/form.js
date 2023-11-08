import React, { useState } from 'react';
import './form.css';
import { SimpleHeading } from '../../component/headings/heading';
import { ButtonSecondary } from '../dash_buttons/buttons';
import { Dashboard } from '../structure/structure';

const FormGroup = (props) => (
  <div className="form-group">
    <div className="lable">
      <span className="sequence">{props.sequence}</span>
      {props.label}
    </div>
    {props.inputType !== 'none' && (
      <input
        type={props.inputType}
        name={props.name}
        value={props.value}
        id={props.id}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    )}
  </div>
);

const Profile_Settings = (props) => {
  const [flag, setFlag] = useState(false);

  const [formData, setFormData] = useState({
    name: props.data.name,
    zip: props.data.addresses.length > 0 ? props.data.addresses[0]['postalCode'] : '',
    address: props.data.addresses.length > 0 ? props.data.addresses[0]['street'] : '',
    city: props.data.addresses.length > 0 ? props.data.addresses[0]['city'] : '',
    State: props.data.addresses.length > 0 ? props.data.addresses[0]['state'] : '',
  });

  const [image, setImage] = useState(null); // State to store the selected image

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change for the image
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if(file){
      await setImage(file); // Store the selected image file
      console.log(file);
      document.querySelector(".uplodePhoto").style.backgroundImage = `url('${URL.createObjectURL(e.target.files[0])}')`;
      submitImage(file);
    }
  };

  const submitImage = (image) => {
    document.querySelector('.dashboard-body').style.pointerEvents = "none";
    document.querySelector('.dashboard-body').style.opacity = "0.7";

    if (image) {
      // Create a FormData object and append the image to it
      const imageFormData = new FormData();
      imageFormData.append('image', image);
      imageFormData.append('id',props.data._id)

      // Make a POST request to submit the image
      fetch(process.env.REACT_APP_API_URL + 'api/uploadPartnerLogo', {
        method: 'POST',
        body: imageFormData,
        credentials: 'include'
      })
        .then((response) => {
          // Handle the response
          if(response.status == 200){
            window.location.reload()
          }
          document.querySelector('.dashboard-body').style.pointerEvents = "all";
          document.querySelector('.dashboard-body').style.opacity = "1";
        })
        .catch((error) => {
          // Handle any errors
          document.querySelector('.dashboard-body').style.pointerEvents = "all";
           document.querySelector('.dashboard-body').style.opacity = "1";
        });
    }else{
      console.log('no img');
      document.querySelector('.dashboard-body').style.pointerEvents = "all";
           document.querySelector('.dashboard-body').style.opacity = "1";
    }
  };

  const submitForm = () => {
    setFlag(!flag)
    if (flag) {
      const dataToUpdate = {
        id: props.data._id,
        name: formData.name,
        postalCode: formData.zip,
        address: formData.address,
        city: formData.city,
        state: formData.State,
      };
      document.querySelector('.dashboard-body').style.pointerEvents = "none";
      document.querySelector('.dashboard-body').style.opacity = "0.7";
      fetch(process.env.REACT_APP_API_URL + 'api/updateaddress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(dataToUpdate),
      })
        .then((response) => {
          if(response.status == 200){
            window.location.reload()
            document.querySelector('.dashboard-body').style.pointerEvents = "all";
          document.querySelector('.dashboard-body').style.opacity = "1";
          }
        })
        .catch((error) => {
          // Handle any errors
          document.querySelector('.dashboard-body').style.pointerEvents = "all";
          document.querySelector('.dashboard-body').style.opacity = "1";
        });
    }
  };

  function deleteAllCookies() {
    const cookies = document.cookie.split(";");
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location = "/"
    }
  }
  

  return (
    <Dashboard data={props.data}>
      <div className="body">
        <div className="form">
          <SimpleHeading text="Profile Settings" />

          <div className="uplodePhoto" style={{backgroundImage:`${props.data.logo?"url('https://drive.google.com/thumbnail?export=view&id="+props.data.logo+"&cache-control=max-age=172800')":''}`}}>
            <label className="profileLable" htmlFor="profilePhoto">
              <img src="icons/upload.svg" alt="upload"/>
              <span>Upload your Logo</span>
            </label>
            <input
              id="profilePhoto"
              type="file"
              accept="image/*"
              onChange={handleImageChange} // Handle file input change for the image
              hidden
            />
          </div>

          <div className="g2">
            <FormGroup
              disabled={!flag}
              sequence="01"
              label="What's your brand name "
              inputType="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              id="name"
            />
            <FormGroup
              disabled={!flag}
              sequence="02"
              label="Zip Code"
              inputType="text"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              id="zip"
            />
          </div>

          <FormGroup
            disabled={!flag}
            sequence="03"
            label="Address "
            inputType="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            id="address"
          />

          <div className="g2">
            <FormGroup
              disabled={!flag}
              sequence="04"
              label="City "
              inputType="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              id="city"
            />
            <FormGroup
              disabled={!flag}
              sequence="05"
              label="State "
              inputType="text"
              name="State"
              value={formData.State}
              onChange={handleInputChange}
              id="state"
            />
          </div>

          <div onClick={submitForm}>
            <ButtonSecondary text={flag ? 'Save' : 'Edit'} />
          </div>

          <div style={{    color: "var(--jet-black)",
          fontFamily: "HK Grotesk-Light",
          fontSize: "16px",
          fontWeight: "300",
          letterSpacing: "0",
    lineHeight: "normal",
    opacity:" 0.4",
    position: "relative",marginBottom:'25px',alignSelf:'end',display:'flex',gap:"12px",justifyContent:'center',alignItems:'center'}}
    
    onClick={()=>{
      deleteAllCookies()
    }}
    
    >
            Logout
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Profile_Settings;
