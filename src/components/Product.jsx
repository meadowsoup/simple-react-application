import styles from './Product.module.css'

function Product({name, price, category, inStock, id}) {
     return(
          <div className={styles.container}>
               <h2 className={styles.heading}>{name}</h2>
               <h3>Price ${price} </h3>
               <h4>{inStock ? "Buy Now": "Out of Stock"}</h4>
               <h5>{category}</h5>
               <h5>Product UPC {id}</h5>
          </div>
     );
}

export default Product;