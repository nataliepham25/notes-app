import {useState} from "react";
import "./App.css"

const App = () => {
  const  [notes, setNotes] = useState([
// dummy data
{
  id: 1,
  title: "test note 1",
  content: "bla bla note1",
},
{
  id: 2,
  title: "test note 2 ",
  content: "bla bla note2",
},
{
  id: 3,
  title: "test note 3",
  content: "bla bla note3",
},
{
  id: 4,
  title: "test note 4 ",
  content: "bla bla note4",
},
{
  id: 5,
  title: "test note 5",
  content: "bla bla note5",
},
{
  id: 6,
  title: "test note 6",
  content: "bla bla note6",
},
]);
  return (
    <div className = "app-container">
      <form className = "note-form">
        <input 
        placeholder="title"
        required
        ></input>
        <textarea 
        placeholder = "Content"
        rows={10}
        required>          
        </textarea>
        <button type = "submit">
          Add Note
        </button>
      </form>
      <div className = "notes-grid">
        {/* an array */}
        {notes.map((note)=> (
        <div className = "note-item">
          <div className = "notes-header">
            <button>x</button>
          </div>
          <h2> Note Title</h2>
          <p> Note Content</p>
        </div>
        ))}
      </div>
    </div>
  )
}
export default App;