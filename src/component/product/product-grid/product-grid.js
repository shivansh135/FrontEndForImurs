import React, { useEffect, useState } from 'react';
import { Productcard } from './productCard/productCard';
import './product-grid.css';

export default function ProductGrid(props) {
  const [products, setProducts] = useState([]);
  const infoValue = props.info; // Store props.info in a constant variable
  
  const flag = props.flag;
  useEffect(() => {
    if (infoValue) {
      const mappedProducts = infoValue.map((item) => ({
        id: item._id,
        title: item.title,
        thumbnail: item.thumbnail,
        category: item.category,
        custmerCity: item.custmerCity,
        custmerName: item.custmerName,
        customerImg: item.customerImg,
        discription: item.discription,
        feedBack: item.feedBack,
        feedBackTitle: item.feedBackTitle,
        pdf: item.pdf,
        images: item.images,
        bullets: item.bullets
      }));
      setProducts(mappedProducts);
    }
  }, [infoValue]);

  // Number of items to display per page
  const itemsPerPage = 6;
  // Current page state
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current items to display
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Total number of pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
console.log(products)
  return (
    flag===0?<div className="container">
         
           {window.innerWidth > 768 && (
        <div className="row">
          {currentItems.map((product) => (
            <div className="col-6 col-sm-4" key={product.id}>
               <Productcard artwork={product.thumbnail} info={product} category={product.category} title={product.title}/>
            </div>
          ))}
        </div>
      )}

    
      {window.innerWidth <= 768 && (
        <div className="row">
          {currentItems.map((product) => (
            <div className="col-6 col-sm-4" key={product.id}>
               <Productcard artwork={product.thumbnail} info={product} category={product.category} title={product.title}/>
            </div>
          ))}
        </div>
      )}
    
      <div className="mt-5" style={{ display: "flex", justifyContent: "center" }}>
        <nav aria-label="Pagination">
          <ul className="pagination" style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <a style={{backgroundColor:'transparent',border:'none'}} 
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
              </a>
            </li>
            {currentPage + ' / ' + totalPages}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <a  style={{backgroundColor:'transparent',border:'none'}}
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>:(
      <div className='sample-cont'>
{products.map((product) => (
            <div className="col-6 col-sm-4" key={product.id}>
               <Productcard artwork={product.thumbnail} info={product} category={product.category} title={product.title}/>
            </div>
          ))}
      </div>
    )
  );
}
 