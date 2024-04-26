import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
import noteService from './services/notes.js';

const App = () => {
  const [notes, setNotes] = useState(Note.getAll());
  const [newNote, setNewNote] = useState("");
  console.log("as")
  console.log(notes)
  const [showAll, setShowAll] = useState(true);

    useEffect(() => {
        noteService
            .getAll()
            .then(response => {setNotes(response.data)})  }, [])

    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }

        noteService      .update(id, changedNote)      .then(response => {        setNotes(notes.map(note => note.id !== id ? note : response.data))      })  }

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() > 0.5
        }

        noteService      .create(noteObject)      .then(response => {        setNotes(notes.concat(response.data))        setNewNote('')      })  }

    const addNote = event => {
      event.preventDefault()
      const noteObject = {
          content: newNote,
          important: Math.random() > 0.5,
      }

      axios
          .post('http://localhost:3001/notes', noteObject)
          .then(response => {

              setNotes(notes.concat(response.data))
              setNewNote('')
          })
  }


  console.log("render", notes.length, "notes");

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };
  
    const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);
  return (
    <div>
      <h1>Notes</h1>
      <div>
        {" "}
        <button onClick={() => setShowAll(!showAll)}>
          {" "}
          show {showAll ? "important" : "all"}{" "}
        </button>{" "}
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
