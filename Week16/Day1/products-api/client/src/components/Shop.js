import {useState,useEffect} from 'react'
import {Link } from 'react-router-dom'

const Shop = (props) => {
  const[products, setProducts] = useState([]);
  const[txt,seTxt] = useState('');

  useEffect(()=>{
    const getData = async() =>{
      try{
        const res = await fetch('/api/products/all');
        const data = await res.json()
        setProducts(data)
      }
      catch(e){
        console.log(e);
      }
    }
    getData();
  },[])

  const serach = () => {
    fetch(`/api/products/search?q=${txt}`)
    .then(res=>res.json())
    .then(data=>{
      setProducts(data)
    })
  }

  return(
    <div>
      <h1>{props.title}</h1>
        <div>
          Serach: <input type="text" onChange={(e)=>seTxt(e.target.value)}/>
          <button onClick={()=>serach()}>Search</button>
        </div>
      {
        products.map(item=>{
          return(
            <div key={item.id}
            style={{border:'1px solid #000', display:'inline-block',padding:'25px',margin:'10px'}}
            >
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <Link to={`/product/${item.id}`}>Show Product</Link>
            </div>
          )
        })
      }
    </div>
  )
}
export default Shop
