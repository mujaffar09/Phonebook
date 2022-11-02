
import React from 'react'
import { useState } from 'react'

const Addnames = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]) 

    
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber]=useState('')
  const [filterPerson,setFilterPerson]=useState('')

  const handleChange= setValue=> e =>setValue(e.target.value)
  const handleAddNewPerson= e => {
    e.preventDefault()
 if(persons.find(person=>person.name===newName)){
   alert(`${newName} is already added to phonebook`)
 }else{
    const newPerson = {name:newName, number:newNumber}

    setPersons(persons.concat(newPerson))

    setNewName('')
    setNewNumber('')
  }
}
  return (
    <div>
      <h1>Phonebook</h1>
      <p>filter shown with{' '}
 <input value={filterPerson} onChange={handleChange(setFilterPerson)}/>   
   </p>
   <h2>Add a New</h2>
      <form onSubmit={handleAddNewPerson}>
        <div>
          name: <input value={newName} onChange={handleChange(setNewName)} />
        </div>
        <div>
          number: {' '}
          <input value={newNumber} onChange={handleChange(setNewNumber)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person=>person.name.toLowerCase().includes(filterPerson))
      .map(person => (
       
        <div key={person.name}>{person.name} {person.number}</div>
        
))}
    </div>
  )
}

export default Addnames