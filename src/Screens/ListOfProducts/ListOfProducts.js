import axios from "axios";
import style from "./ListOfProduct.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListOfProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className={style.plist}>
        {isLoading ? (
          // spinner from bootstrap
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
          {/* listing the items from api */}
            {products.map((product, index) => {
              return (
                <div className={style.card}>
                  <div className={style.img}>
                    <Link to={`/productDetails/${product.id}`}>
                      <img src={product.image} alt="sorry"></img>
                    </Link>
                  </div>
                  <div className={style.cdetails}>
                    <div className={style.ctext}>
                      <p>{product.title}</p>
                      <span>{product.description}</span>
                    </div>
                    <div className={style.price}>
                      <span>₹</span>
                      <p>{product.price}</p>
                    </div>
                    <div className={style.rating}>
                      <p>{product.rating.rate}</p>
                      <p>/</p>
                      <p>5</p>
                    </div>
                    <div className={style.count}>
                      <p>Counts: </p>
                      <span>{product.rating.count}</span>
                    </div>
                    <div className={style.category}>
                      <p>
                        Category: <span>{product.category}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default ListOfProducts;//exporting the function
