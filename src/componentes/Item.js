import React from "react";
import { Link } from "react-router-dom";
import "../componentes/Item.css";

const Item = ({ info }) => {
  return (    
      
      <div className="forma card" style={{ width: "18rem" }}>
        <img src={info.image} class="card-img" alt=""></img>
        <div class="card-body">
          <h1 class="card-title font">{info.title}</h1>
          <Link to={`/item/${info.id}`} className="btn-success btn">
            Detalle
          </Link>
        </div>
      </div>
    
  );
};
export default Item;
