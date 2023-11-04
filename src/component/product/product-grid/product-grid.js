import React, { useEffect, useState } from 'react';
import { Productcard } from './productCard/productCard';
import './product-grid.css';

export default function ProductGrid(props) {
  const [products, setProducts] = useState([]);
  const infoValue = props.info;

  useEffect(() => {
    if (infoValue) {
      const mappedProducts = infoValue.map(item => ({
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

  return (
    <div className="container">
         
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
        <nav aria-label="...">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <a
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </a>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
              >
                <a
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
