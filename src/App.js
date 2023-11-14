import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Price from './component/price/price';
import Plan from './component/plans/plan';
import { Home } from './component/pricing/home';
import Product from './component/product/product';
import { NavbarLanding } from './component/navbarLanding/navbar';
import { FooterLanding, PropertyFooterWrapper } from './component/footer/footer';
import { Otp } from './component/login/login';
import Form from './component/form/form';
import { DashboardHome } from './dashboard/home/home';
import { Dashboard, TopNavigation } from './dashboard/structure/structure';
import Success from './component/login/success';
import Profile_Settings from './dashboard/profileSetting/form';
import { Cancillation, ContactUS, Privacy, TandC } from './component/legal/cancillation';
import { DashboardPricing } from './dashboard/dashboardPricing/dashboardPricing';
import { OrdersB2B } from './dashboard/orders/orderpage';
import { Portfolio, Suvinor } from './dashboard/portfolio/portfolio';
import { useLocation } from 'react-router-dom';
import Productdash from './component/product/productdash';

import { OrderSample, Orderd2csample } from './dashboard/new-form/forms/order-sample';
import CreateOrder from './dashboard/new-form/forms/order-form';
import CheckOut from './dashboard/checkout/checkout';
import { TailSpin } from 'react-loader-spinner';
import { LandingDash } from './component/landingDash/landingDash';
import { CategoryWindow, D2COrdersummry, PriceD2C, SubCategoryWindow } from './component/pricingD2c/priced2c';
import { OtpD2C } from './component/login/loginD2C';
import Profile_SettingsD2C from './component/profileSettingD2C/form';
import { ExploreWindow } from './component/exploremore/explore';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.querySelector('.landingMain').scrollTo({
      top:((document.querySelector('.landingMain').scrollTop == 1)?2:1),
      behavior:'smooth'
    });
  }, [pathname]);

  return null;
}

function CheckRelode(){
  if (localStorage.getItem('refreshPage') == 'true' && window.location.pathname !== '/processPayment') {
    localStorage.setItem('refreshPage', 'false');
    window.location.reload();
  }
}

function LandingRoutes({data={}}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching your product data from an API or other source
    const fetchData = async () => {
      // Replace this with your actual data-fetching logic
      const response = await fetch(process.env.REACT_APP_API_URL + 'api/product'); // Example API endpoint
      const data = await response.json();
      setProducts(data.product);
     
    };

    fetchData();
  }, []);

  console.log(data)
  return (
    <Router>
      <LandingDash>
      <ScrollToTop/>

        <NavbarLanding />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/register" element={<Form />} />
            <Route path="/plans" element={<Plan value={''} />} />
            <Route path="/explore" element={<ExploreWindow/>} />

            <Route path='/orderD2C' element={<PriceD2C/>}/>
            <Route path='/samples' element={<Orderd2csample data={products}/>} />
            <Route path='/category' element={data.phone?<CategoryWindow/>:<OtpD2C/>}/>
            
            <Route path='/sub_category' element={data.phone?<SubCategoryWindow/>:<OtpD2C/>}/>

            <Route path="/account" element={data.phone?<Profile_SettingsD2C data={data}/>:<OtpD2C />} />

            <Route path="/Partnerlogin" element={<Otp />} />
            <Route path="/dashboard" element={<Success/>}></Route>
            <Route path='/registration' element={<Form/>} />
            <Route path='/privacy' element={<Privacy/>} />
            <Route path='/refundpolicy' element={<Cancillation/>} />
            <Route path='/termsandconditions' element={<TandC/>} />
            <Route path='/contactus' element={<ContactUS/>} />
            <Route path='/xxyyzz' element={<Success/>} />


            <Route path='/checkout' element={<D2COrdersummry/>}/>
            
          </Routes>
        <FooterLanding />
      </LandingDash>
      
    </Router>
  );
}

function DashboardRoutes(props) {
  const [products, setProducts] = useState([]);
  const [suvenirProducts, setSuvenirProducts] = useState([]);
  const [portfolioProducts, setPortfolioProducts] = useState([]);
  useEffect(() => {
    // Simulate fetching your product data from an API or other source
    const fetchData = async () => {
      // Replace this with your actual data-fetching logic
      const response = await fetch(process.env.REACT_APP_API_URL + 'api/product'); // Example API endpoint
      const data = await response.json();
      setProducts(data.product);
      console.log(data.product)
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const suvenirList = products.filter(product => product.display.suvenir);
      const portfolioList = products.filter(product => product.display.portfolio);

      setSuvenirProducts(suvenirList);
      setPortfolioProducts(portfolioList);
     
    }
  }, [products]);

  console.log(suvenirProducts)
  console.log(portfolioProducts)

  
  


  return (
    <Router>
      <CheckRelode/>
        <Routes>
          <Route path="/dashboard" element={<DashboardHome data={props.data} />} />
          <Route path="/" element={<DashboardHome data={props.data} />} />
          <Route path="/pricing" element={<DashboardPricing data={props.data}/>} />
          <Route path="/orders" element={<OrdersB2B data={props.data}/>} />
          <Route path="/portfolio" element={<Portfolio data={props.data} portfolio={portfolioProducts}/> } />
          <Route path="/suvenir" element={<Suvinor data={props.data} suvenir={suvenirProducts}/>} />
          <Route  path='/profile' element={<Profile_Settings data={props.data}/>} />
          <Route path='/product' element={<Productdash data={props.data}/>}/>
          <Route path='/sample' element={<OrderSample data={props.data}/>} />
          <Route path='/createOrder' element={<CreateOrder data={props.data}/>} />
          <Route path='/processPayment' element={<CheckOut data={props.data}/>} />
          <Route path='/privacy' element={<Dashboard data={props.data}><Privacy/></Dashboard>} />
          <Route path='/refundpolicy' element={<Dashboard data={props.data}><Cancillation/></Dashboard>} />
          <Route path='/termsandconditions' element={<Dashboard data={props.data}><TandC/></Dashboard>} />
          <Route path='/contactus' element={<Dashboard data={props.data}><ContactUS/></Dashboard>} />
          <Route path='/xxyyzz' element={<Success/>} />
        </Routes>
    </Router>
  );
}

function App() {
  const [data, setData] = useState(null); // Initialize with null

  useEffect(() => {
    // Make an API call to check if the user is authenticated.
    // Replace this with your actual API call logic.
    fetch(process.env.REACT_APP_API_URL + 'api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('POST request failed');
        }
      })
      .then((data) => {
        if (data) {
          setData(data); // Update the data state
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array

  if (data === null) {
    return <Success />;
  }
  return data.user=='Partner' ? <DashboardRoutes data={data.data} /> : <LandingRoutes data={data.data}/>;
}

export default App;



