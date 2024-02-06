const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
    const total_exercises = part1.exercises + part2.exercises + part3.exercises

    const Total = (prop) => {   
        return (
          <div>
            <p>Total number of exercise: {prop.total_exercises}.</p>
          </div>
        )
      }

    return (
      <div>
        <p>{course}</p>
        <p> {part1.name}: {part1.exercises} excercises.</p>
        <p> {part2.name}: {part2.exercises} excercises.</p>
        <p> {part3.name}: {part3.exercises} excercises.</p>
        <Total total_exercises={total_exercises}/> 
      </div>
    )
  }
  
  export default App