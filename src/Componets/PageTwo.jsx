import React from "react";

function PageTwo(props) {
  return (
    <div>
      <div className="card shadow m-4 p-2 bg-light border-danger border-start">
        <h5>{props.title}</h5>
        <p>{props.discritpion1}</p>
        <p>{props.discritpion2}</p>
        <button className="btn btn-danger">{props.button}</button>
      </div>
    </div>
  );
}

export default PageTwo;
