import React from "react";
import DeleteIcon from '@mui/icons-material/Delete'; //copied from Material-UI for the delete button icon


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        {/* and simply place the component name on the desired spot*/}
        <DeleteIcon /> 
      </button>
    </div>
  );
}

export default Note;
