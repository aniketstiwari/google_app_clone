import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
  const [note, SetNote] = useState({
    title: "",
    content: ""
  })

  const [expand, setExpand] = useState(false);

  const ExpandNote = () => {
    setExpand(true);
  }

  const ShrinkNote = () => {
    setExpand(false);
  }

  const InputEvent = (event) => {
    const {name, value} = event.target;
    SetNote( (prevValue) => {
      return {...prevValue, [name]: value}
    })
  }

  const onSubmit = () => {
    props.passNote(note);
    SetNote({
      title: "",
      content: ""
    })
  }

  return(
    <>
      <div className="main_note">
        <form>
          {expand ? <input 
            type="text" 
            placeholder="title" 
            autoComplete="off" 
            name="title" 
            onChange={InputEvent} 
            value={note.title}   
          
          /> : null}
          <textarea 
            rows="" 
            column="" 
            placeholder="Write a Note..." 
            onChange={InputEvent} 
            name="content"
            onClick={ExpandNote}
            onDoubleClick={ShrinkNote}
            value={note.content}>  
          </textarea>
          {expand ? <Button onClick={onSubmit}>
            <AddIcon className="plus_sign" />
          </Button> : null}
        </form>
      </div>      
    </>
  )
}

export default CreateNote;