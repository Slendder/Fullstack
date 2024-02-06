const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]

    let total_exercises = 0
    for (const i of parts) {
        total_exercises += i.exercises
    }

    const Total = (prop) => {   
        return (
          <div>
            <p> {parts.name}: {parts.exercises} </p>
            <p>Total number of exercise: {prop.total_exercises}.</p>
          </div>
        )
      }

    return (
      <div>
        <p>{course}</p>
        <Total total_exercises={total_exercises} />
      </div>
    )
  }

export default App