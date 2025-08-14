import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllProductModel } from "../../data/models/allProduct.model";
import * as AllProductService from "../../data/services/allProduct.service";
import styles from './DetailProductScreen.module.scss'

const ProductDetailScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<AllProductModel | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!id) return; 
      setLoading(true);
      try {
        const res = await AllProductService.fetchProductById(Number(id), new AllProductModel());
        setProduct(new AllProductModel(res));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Không tìm thấy sản phẩm</div>;

  return (
    <div  className={styles.productdetail}>
           <h1>{product.title}</h1>
      <div className={styles.container}>
    

      <div className={styles.containerLeft}>
      <img src={product.images} alt={product.title} />
      </div>

      <div className={styles.containerRight}>
      <p>{product.description}</p>
      <li>Category: {product.category}</li>
      <li>Price: ${product.price}</li>
      <li>Rating: {product.rating} ⭐</li>
      </div>
      
      </div>

      <div className={styles.review}>
      <h3>Reviews</h3>
      {product.reviews && product.reviews.length > 0 ? (
        <ul>
          {product.reviews.map((rev, idx) => (
            <li key={idx}>
              <strong>{rev.reviewerName}</strong> ({rev.rating}⭐) - {rev.comment}
            </li>
          ))}
        </ul>
      ) : (
        <p>Chưa có đánh giá</p>
      )}
      </div>
      
    </div>
  );
};

export default ProductDetailScreen;
