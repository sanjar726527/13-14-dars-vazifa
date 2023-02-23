import React, { useContext } from "react";
import { Context } from "../../context/context";

export const ProductCard = ({ product }) => {
  const [data, setData] = useContext(Context);

  const onAdd = (e) => {
    const exist = data.find((p) => p.id === e.id);
    if (exist) {
      const newProducts = data.map((p) =>
        p.id === e.id ? { ...exist, qty: exist.qty + 1 } : p
      );
      setData(newProducts);
    } else {
      setData([...data, { ...e, qty: 1 }]);
    }
  };
  const onRemove = (e) => {
    const exist = data.find((p) => p.id === e.id);
    if (exist.qty === 1) {
      const newProducts = data.filter((p) => p.id !== e.id);
      setData(newProducts);
    } else {
      const newProducts = data.map((p) =>
        p.id === e.id ? { ...exist, qty: exist.qty - 1 } : p
      );
      setData(newProducts);
    }
  };

  return (
    <div className="card-row">
      {product.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.img} alt="image" />
          <span className="active">
            <button
              className="btn btn-warning"
              color="white"
              onClick={() => onAdd(item)}
            >
              Add card
            </button>
          </span>
          <h3>{item.title}</h3>
          <p>{item.price} sum</p>
        </div>
      ))}
    </div>
  );
};
