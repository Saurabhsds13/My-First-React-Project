import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
export default function Hook1() {
  var [category, setCategory] = useState("xyz\n");
  var [api, setApi] = useState([]);
  var x1 = useRef();
  var myfun3 = () => {
    // alert();
    console.log(x1.current.value);
    setCategory(x1.current.value);
  };

  useEffect(() => {
    console.log(category, "useEffect");
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((result) => {
        console.log(result);
        console.log(result.data);
        setApi(result.data);
      });
  }, [category]);

  return (
    <div>
      <br />
      <hr />
      <p>{category}</p>

      <input className="btn btn-outline-success" type="textbox" ref={x1} />
      <hr />
      <button onClick={myfun3}>Fetch</button>
      <hr />
      <div class="container">
        <div class="row">
          {api.length > 0 &&
            api.map((xyz) => (
              <div class="col-xl-3">
                <img src={xyz.image} class="img-fluid"></img>
                <h2>{xyz.price}</h2>
                <p>{xyz.title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
