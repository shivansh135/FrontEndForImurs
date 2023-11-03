import React,{useEffect,useState} from 'react';
import { Productcard } from './productCard/productCard';
import './product-grid.css'
export default function ProductGrid(props) {



  const [products, setProducts] = useState([]);
  const infoValue = props.info; // Store props.info in a constant variable
  
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

 
 

  // Function to create a row of columns
  const createRow = (start, end) => {
    return (
      <div className="row" key={`row-${start}-${end}`}>
        {products.slice(start, end).map((product) => (
          <div className={`col-${12 / numColumns}`} key={product.id}  >
            <Productcard artwork={product.thumbnail} info={product} category={product.category} title={product.title}/>
          </div>
        ))}
      </div>
    );
  };

  // Calculate the number of rows needed
  const numRows = Math.ceil(products.length / numColumns);

  // Create an array to store the rows
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    const start = i * numColumns;
    const end = start + numColumns;
    rows.push(createRow(start, end));
  }

  return (
    <div className="container">
      {/* Display 3 columns for larger screens (PCs and tablets) */}
      {window.innerWidth >= 768 && (
        <div className="row">
          {products.map((product) => (
            <div className="col-6 col-sm-4" key={product.id}>
               <Productcard artwork={product.thumbnail} info={product} category={product.category} title={product.title}/>
            </div>
          ))}
        </div>
      )}

      {/* Display 2 columns for small screens (mobile) */}
      {window.innerWidth < 768 && (
        <div className="row">
          {products.map((product) => (
            <div className="col-6 col-sm-4" key={product.id}>
               <Productcard artwork={product.thumbnail} info={product} category={product.category} title={product.title}/>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5" style={{ display: "flex", justifyContent: "center",display:'none' }}>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
