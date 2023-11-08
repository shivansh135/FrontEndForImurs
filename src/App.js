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
import { TopNavigation } from './dashboard/structure/structure';
import Success from './component/login/success';
import Profile_Settings from './dashboard/profileSetting/form';
import { Cancillation, ContactUS, Privacy, TandC } from './component/legal/cancillation';
import { DashboardPricing } from './dashboard/dashboardPricing/dashboardPricing';
import { OrdersB2B } from './dashboard/orders/orderpage';
import { Portfolio, Suvinor } from './dashboard/portfolio/portfolio';
import { useLocation } from 'react-router-dom';
import Productdash from './component/product/productdash';

import { OrderSample } from './dashboard/new-form/forms/order-sample';
import CreateOrder from './dashboard/new-form/forms/order-form';
import CheckOut from './dashboard/checkout/checkout';
import { TailSpin } from 'react-loader-spinner';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LandingRoutes() {
  return (
    <Router>
      <NavbarLanding />
      <ScrollToTop/>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/register" element={<Form />} />
          <Route path="/price" element={<Price />} />
          <Route path="/plans" element={<Plan value={''} />} />
          <Route path="/login" element={<Otp />} />
          <Route path="/dashboard" element={<Success/>}></Route>
          <Route path='/registration' element={<Form/>} />
          <Route path='/privacy' element={<Privacy/>} />
          <Route path='/refundpolicy' element={<Cancillation/>} />
          <Route path='/termsandconditions' element={<TandC/>} />
          <Route path='/contactus' element={<ContactUS/>} />
   

        </Routes>
      </div>
      <FooterLanding />
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

  if (localStorage.getItem('refreshPage') == 'true' && window.location.pathname !== '/processPayment') {
    localStorage.setItem('refreshPage', 'false');
    window.location.reload();
  }
  
  



  return (
    <Router>
      <div className="pages">
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
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  const [x, setX] = useState(1);
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
          setX(data.user === false ? true : false);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array

  if (x === 1 || data === null) {
    return (
      <Success/>
    );
  }

  return x ? <LandingRoutes /> : <DashboardRoutes data={data} />;
}


export default App;
