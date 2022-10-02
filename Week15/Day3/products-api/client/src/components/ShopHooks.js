import { useEffect, useState } from "react";

const ShopHooks = (props) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "/api/products/all"
        );
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const filter = () => {
    fetch(`/api/products/search?q=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <p>Search</p>
        <input
          type="text"
          onChange={(e) =>
            setSearch(e.target.value)
          }
        ></input>
        <button onClick={() => filter()}>
          Search
        </button>
      </div>
      <div>
        {products.map((user) => {
          return (
            <div
              key={user.id}
              style={{
                border: "1px solid black",
                display: "inline-block",
                padding: "25px",
                margin: "10px",
              }}
            >
              <h1>{user.name}</h1>
              <h3>{user.price}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ShopHooks;
