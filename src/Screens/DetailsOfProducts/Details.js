// Imports
import style from "./Details.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const productId = useParams().id;
  console.log(productId);

  const [productDetail, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        console.log(res);
        setProductDetails(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <>
      {isLoading ? (
        //loading spinner from bootstrap
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        //card for displaying the data from api
        <div className={style.center}>
          <div className={style.banner}>
            <div className={style.image}>
              <img src={productDetail.image} alt="..."></img>
            </div>
            <div className={style.description}>
              <div className={style.title}>{productDetail.title}</div>
              <div className={style.dtext}>
                <span>Description:-</span>
                {productDetail.description}
              </div>
              <div className={style.rating}>
                <div className={style.rpoints}>
                  <p>{productDetail.rating.rate}</p>
                  <p>/</p>
                  <p>5</p>
                </div>
                <div className={style.rcounts}>
                  <p>counts: </p>
                  <p>{productDetail.rating.count}</p>
                </div>
              </div>
              <div className={style.category}>
                <p>Category:</p>
                <p>{productDetail.category}</p>
              </div>
              <div className={style.price}>
                <span>₹</span>
                <p>{productDetail.price}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details; //exporting the function
