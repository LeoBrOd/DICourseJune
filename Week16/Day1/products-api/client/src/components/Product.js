import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

const Product = (props) => {
  const [product, setProduct] = useState([])
  const params = useParams();

  useEffect(()=>{
    fetch(`/api/products/p/${params.id}`)
    .then(res => res.json())
    .then(data => {
      setProduct(data)
    })
    .catch(e=>{
      console.log(e);
    })
  },[])


  return(
    <div>
      <h2>Product</h2>
      {
        product.map(item => {
          return(
            <div>
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
              <Link to='/'>Back to Shop</Link>
            </div>
          )
        })
      }
    </div>
  )
}
export default Product
