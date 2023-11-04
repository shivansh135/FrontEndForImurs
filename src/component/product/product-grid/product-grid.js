import React, { useEffect, useState } from 'react';
import { Productcard } from './productCard/productCard';
import './product-grid.css';

export default function ProductGrid(props) {
  const [products, setProducts] = useState([]);
  const infoValue = props.info; // Store props.info in a constant variable

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
        bullets: item.bullets,
      }));
      setProducts(mappedProducts);
    }
  }, [infoValue]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust this number to control how many products are shown on each page.

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <li
        key={i}
        className={`page-item ${currentPage === i ? 'active' : ''}`}
      >
        <a
          className="page-link"
          onClick={() => handlePageChange(i)}
        >
          {i}
        </a>
      </li>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {visibleProducts.map((product) => (
          <div className="col-6 col-sm-4" key={product.id}>
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
        <nav aria-label="...">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <a
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </a>
            </li>
            {paginationItems}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
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
 