import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';  //added from Material-UI Package
import Fab from '@mui/material/Fab';            //added from Material-UI Package -- Floating Action Button
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);


  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setExpanded(false); //Revert the input area to its smaller size after a note is submitted
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">

        {/* if isExpanded true, it shows the input title, otherwise null/none */}
        {isExpanded ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null }

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Click here and take a note..."
          rows={isExpanded ? 3 : 1}  //if isExpanded is true, rows is set to 3, otherwise 1
        />
        <Zoom in={isExpanded ? true : false}> 
           {/* Instead of using the HTML element <button>, directly use the component Fab */}
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
       
      </form>
    </div>
  );
}

export default CreateArea;
