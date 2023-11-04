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
        bullets:item.bullets
      }));
      setProducts(mappedProducts);
    }
  }, [infoValue]);

  const numColumns = window.innerWidth >= 768 ? 3 : 2;

  const itemsPerPage = 6; // Number of products to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the number of total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get the current products to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = products.slice(startIndex, endIndex);

  return (
    <div className="container">
      <div className="row">
        {productsToDisplay.map((product) => (
          <div className={`col-${12 / numColumns}`} key={product.id}>
            <Productcard
              artwork={product.thumbnail}
              info={product}
              category={product.category}
              title={product.title}
            />
          </div>
        ))}
      </div>

      <div className="mt-5" style={{ display: "flex", justifyContent: "center" }}>
        <nav aria-label="Pagination">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
