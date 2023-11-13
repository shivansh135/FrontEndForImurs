import React ,{useState,useEffect}from 'react';
import './form.css'
import { BasicHeading, MainHeading } from '../headings/heading';
import { ButtonPrimary, ButtonSecondary } from '../button/button';
import { useNavigate } from 'react-router-dom';
import { Banner } from '../../dashboard/home/home';
import { ColabrationMarquee, InfiniteMarquee, RegistrationMarquee } from '../marquee/marquee';
import { ContactPhone } from '../contactus/contact';


function FormGroup(props) {
  const { sequence, label, inputType, name, value, onChange,id } = props;
 
  return (
    <div className="form-group">
      <div className="lable">
        {sequence!=""?<span className="sequence">{sequence}</span>:null}
        {label}
      </div>
      {inputType !== 'none' ? (
        <input type={inputType} name={name} value={value} id={id} onChange={onChange} />
      ) : null}

    </div>
  );
}
function RadioGroup(props) {
  const { options, name, value, onChange } = props;

  if (options.length === 0) {
    return null; // Return null when options are empty
  }
 

  return (
    <div className="button-radio" style={{ marginTop: '15px' }}>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`radio${index}`}
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
          />
          <label htmlFor={`radio${index}`}>{option.split('-')[1]}</label>
        </div>
      ))}
    </div>
  );
}


function Form() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    type:'',
    logo:''
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target)
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [isBlurred, setIsBlurred] = useState(false);
  const [names, setNames] = useState([]);

  useEffect(() => {
    // Fetch the data from the API when the component mounts
    fetch(process.env.REACT_APP_API_URL+'api/partnertype')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Ensure data.product is an array before combining properties
        if (Array.isArray(data.product)) {
          const combinedInfoArray = data.product.map((item) => `${item._id} - ${item.name}`);
          console.log(combinedInfoArray)
          setNames(combinedInfoArray);
        } else {
          console.error('data.product is not an array');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);



  console.log(formData.type)

  const register = () => {

    setIsBlurred(true);

    // After a few seconds (e.g., 2 seconds), remove the blur effect
    setTimeout(() => {
      setIsBlurred(false);
    }, 2000); 




    const { name, city, email, type } = formData;
    const logoInput = document.getElementById('logo');
    const logo = logoInput.files[0]; // Get the selected logo file
    
    
   
    // Create a FormData object to handle the multipart/form-data request
    if (name !=='' && city !== '' && email !== '' && type !=='')
    {
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', name);
    formDataToSubmit.append('email', email);
    formDataToSubmit.append('city', city);
    formDataToSubmit.append('type', type.split('-')[0]);
    formDataToSubmit.append('logo', logo); // Append the logo file
  
    fetch(process.env.REACT_APP_API_URL+'api/registerpatner', {
      method: 'POST',
      body: formDataToSubmit,
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          // Request was successful, handle the response here
  
          fetch(process.env.REACT_APP_API_URL+'api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
           
            credentials: 'include',
          })
            .then((response) => {
              if (response.ok) {
                // Request was successful, handle the response here
                return response.json();
              } else {
                // Request failed, handle errors here
                alert('POST request failed');
              }
            })
            .then((data) => {
              // Handle the response data as needed
              console.log(data);
            })
            .catch((error) => {
              // Handle network or other errors
              console.error('Error:', error);
            });
  
          return response.json();
        } else {
          // Request failed, handle errors here
          alert('POST request failed');
        }
      })
      .then((data) => {
        // Handle the response data as needed
        console.log(data);
        navigate('/dashboard');
        window.location.reload();
      })
      .catch((error) => {
        // Handle network or other errors
        console.error('Error:', error);
      });}
      else{
        alert('Please Fill in all the fields')
      }
  };
  


  console.log(names)

  const [logoText, setLogoText] = useState('Upload Logo');

  const handleFileChange = (event) => {
    const fileInput = event.target;
    
    if (fileInput.files.length > 0) {
      // User selected a file, update the text
      setLogoText('Edit Logo');
    } else {
      // User cleared the selection, reset the text
      setLogoText('Upload Logo');
    }
  }

    return (
      <div className={`body ${isBlurred ? 'blur-effect' : ''}`}>
        <Banner heading="Become a Partner" sub_heading="Adopt light, chic magazines for daily nostalgia" url="/banner/banner_4.jpg" style={{backgroundSize:'110% auto'}}/>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'80%',margin:'auto'}}>
          <BasicHeading text = {"Sign Up"}/>
          <label for="logo" className='logo-text'>
            <img src='/uplode.svg' style={{height:'100%',width:'auto'}}/>
           <span id='logoStatus'>{logoText}</span>
          </label>
          <input type='file' id="logo" hidden onChange={handleFileChange}/>

        </div> 
        <div className='form'>
        <div className="g2">
          <FormGroup sequence=""  label="*Brand Name" inputType="text" name="name" value={formData.name} onChange={handleInputChange} id='name'/>
          <FormGroup sequence="" label="*E-mail" inputType="text" name="email" value={formData.email} onChange={handleInputChange} id='email' />
        </div>
        <div className='g2'>
        <FormGroup sequence="" label="City based in" inputType="text" name="city" value={formData.city} onChange={handleInputChange} id='city' />
        {/* <FormGroup sequence="" label="Uplode Brand Logo ?" name="logo" inputType="file" id='logo'/> */}
        </div>
        <FormGroup sequence="" label="*You are a" inputType="none" />
        <RadioGroup
        options={names}
        name="type"
        value={formData.type}
        onChange={handleInputChange}
      />
        <div onClick={register}><ButtonPrimary style={{width:'100%'}} text="Register" /></div>
      </div>
<div style={{display:'flex',flexDirection:'column',gap:window.innerWidth <= 768 ?'20px':'40px'}}>
<ColabrationMarquee></ColabrationMarquee>
      <RegistrationMarquee></RegistrationMarquee>
       
</div>

<ContactPhone/>
     

      </div>
      
    );
  
    }
  export default Form;
