import React ,{useState,useEffect}from 'react';
import './form.css'
import { useNavigate } from 'react-router-dom';
import { ButtonSecondary } from '../../dash_buttons/buttons';
import { SimpleHeading } from '../../../component/headings/heading';
import { Dashboard } from '../../structure/structure';
import CustomDropdown from '../form-component/formcomponents';
import Popup from '../../../component/popup/popup';
import { ButtonPrimary } from '../../../component/button/button';


export function FormGroup(props) {
  const { sequence, label, inputType, name, value, onChange,id } = props;
 
  return (
    <div className="form-group">
    
      <div className="lable">
      {!sequence?null:<span className="sequence">{sequence}</span>}
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
          <label htmlFor={`radio${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
}


function CreateOrder(props) {
  const [formData, setFormData] = useState({
    name: '',
    mobile:'',
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


  const [names, setNames] = useState([]);
  
  useEffect(() => {
    // Fetch the data from the API when the component mounts
    fetch(process.env.REACT_APP_API_URL+'api/category')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        
        // Ensure data.product is an array before combining properties
        if (Array.isArray(data)) {
          const combinedInfoArray = data.map((item) => `${item._id} - ${item.name}`);
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
 
  const options = names;
  const [selectedOption, setSelectedOption] = useState('Select an option');

  const handleSelect = (selectedValue) => {
    setSelectedOption(selectedValue);
   
    
  };
  console.log(formData.mobile)

  const placeorder = async () => {
    try {
      var cat_id = "";
      for (let cat of options) {
        if (cat.split(' - ')[1] == selectedOption) {
          cat_id = cat.split(' - ')[0];
          break;
        }
      }
      const response = await fetch(process.env.REACT_APP_API_URL +'api/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          partner:props.data._id,
          customerName:formData.name,
          customerPhone:formData.mobile,
         category:cat_id
        }),
      });

      console.log(response.status)


      if(response.status == 402){
        set_message('You have 0 iCredits')
        setShowPopup(true)
      }
      else if(response.status != 200){
        set_message('Something went wrong. Plesae try again.')
        setShowPopup(true)
      }

      if (response.ok) {
        localStorage.setItem('refreshPage','true');
        window.location = '/orders'
      } else {
        console.error('Failed to place the order');
        // Handle the error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error placing the order:', error);
      // Handle any network or other errors
    }
  };
 
  
  
  const [showPopup, setShowPopup] = useState(false);
  const [popup_message,set_message] = useState('Ops! Something went wrong')

    return (
      <Dashboard data={props.data}>
         <Popup
        show={showPopup}
        heading={'Sorry'}
        message={popup_message}
        isNotification={true}
        onConfirmPopup={(result) => {
          setShowPopup(false);
        }}
      />
          <SimpleHeading text = {"Create New Order"}/>
          <div className='form' style={{marginTop:"0"}}>
          <FormGroup sequence="" label="*Customer Name" inputType="text"  name="name" value={formData.name} onChange={handleInputChange} id='name' />
          <FormGroup sequence="" label="Customer Phone No." inputType="number"  name="mobile" value={formData.mobile} onChange={handleInputChange} id='name'/>

          <CustomDropdown
          lable="*Category"
          sequence=""
        options={options.map(option => option.split(' - ')[1])}
        selectedValue={selectedOption}
        onSelect={handleSelect}
        dropdownStyle={{}}
        optionStyle={{}}
      />

          <div onClick={placeorder} style={{width:'100%',cursor:'pointer'}}><ButtonPrimary text="Place Order" /></div>
        </div>
      </Dashboard>
    );
  
    }
export default CreateOrder;
