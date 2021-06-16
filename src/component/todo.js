import React, { useState } from "react";
import todo from "../images/todo.svg";
import "../App.css";

const Todo = () => {
  const [inputdata, setinputdata] = useState("");
  const [items, setitems] = useState([]);
  const addItem = () => {
    if (!inputdata) {
    } else {
      setitems([...items, inputdata]);
      setinputdata("");
    }
  }

  const deleteItem = (id)=>{

    const updatedItems= items.filter((elem,ind)=>{

        return ind!=id;

    });

    setitems(updatedItems);
       
  }
  const removeAll = ()=>{
      setitems([]);  
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="todopic" />
            <figcaption>Add Your List Here 😉</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Tasks..."
              onClick={addItem}
              value={inputdata}
              onChange={(e) => setinputdata(e.target.value)}
            />
            <i className="fa fa-plus add-btn" title="Add item" onClick={addItem}></i>
          </div>
          <div className="showItems">
             {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{elem}</h3>
                  <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=> deleteItem(ind)}></i>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
