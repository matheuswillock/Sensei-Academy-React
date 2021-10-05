import React from "react";

function SenseiItem(props) {
  return(
    <article className="senseis-item">

      <header>
        <img src={props.img} alt={props.usernameSensei}/>

        <div>
          <strong>{props.title}</strong>

          <span>{props.specialist}</span>
        </div>

      </header>

      <p>{props.description}</p>

      <footer>
        <button type="button">
          Aulas
        </button>
      </footer>

    </article>
  );
}

export default SenseiItem;