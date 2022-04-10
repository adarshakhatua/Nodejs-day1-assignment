import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
    // Create add and remove functions here that changes the
    // state.
    const changeBook=(value)=>{setInv({books:inv.books+value,notebooks:inv.notebooks,pens:inv.pens})}
    const changeNoteBook=(value)=>{setInv({books:inv.books,notebooks:inv.notebooks+value,pens:inv.pens})}
    const changePens=(value)=>{setInv({books:inv.books,notebooks:inv.notebooks,pens:inv.pens+value})}
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{changeBook(1)}}>+</button>
        <button className="circlularButton" onClick={()=>{inv.books?changeBook(-1):changeBook(0)}}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{changeNoteBook(1)}}>+</button>
        <button className="circlularButton" onClick={()=>{inv.notebooks?changeNoteBook(-1):changeBook(0)}}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>{changePens(1)}}>+</button>
        <button className="circlularButton" onClick={()=>{inv.pens?changePens(-1):changePens(0)}}>-</button>
        <span>{inv.pens}</span>
      </div>
            {/* calculate total and show it */}
      total: {inv.books+inv.notebooks+inv.pens}
    </div>
  );
};