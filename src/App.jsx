
const Hello = (prop) => {
  console.log(prop);
  return (
    <div>
      <p>Hello {prop.name}, you are {prop.age} years old right?</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'  
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='George' age={26 + 21}/>
      <Hello name={name} age={age} />
    </div>
  )
}

export default App