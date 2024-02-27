import { useState } from "react";

const Filter = ({ persons }) => {
  const [filterByName, setFilterByName] = useState("");
  const handleFilterByName = (event) => {
    setFilterByName(event.target.value);
  };
  const filtered = persons.filter((person) =>
    person.name.toLowerCase().includes(filterByName.toLowerCase())
  );

  return (
    <div>
      filter shown with{" "}
      <input value={filterByName} onChange={handleFilterByName} />
      <ul>
        {filtered.map((person) => (
          <li key={person.id}>
            {" "}
            {person.name}: {person.number}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddPerson = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addName = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} already exists!`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      console.log(personObject);
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const AllPersons = ({ persons }) => {
  return (
    <div>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name}: {person.number}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} />
      <h2>Add a new</h2>
      <AddPerson persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <AllPersons persons={persons} />
    </div>
  );
};

export default App;
