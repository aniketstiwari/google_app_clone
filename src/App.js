import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {
  const [additem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevVal) => {
      return [...prevVal, note]
    })
  }

  const deleteItems = (id) => {
    setAddItem((prevVal) => {
      return prevVal.filter( (arrelem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <Header/>
      <CreateNote passNote={addNote}/>
      {additem.map( (val, index) => {
        return <Note key={index} id={index} title={val.title} content={val.content} onSelect={deleteItems}/>
      })}
      <Footer/>
    </>
  );
}

export default App;
