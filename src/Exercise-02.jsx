const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    const Header = (prop) => {
      return (
        <div>
          <p>{prop.course}.</p>
        </div>
      )
    }

    const Part = (prop) => {
        return (
            <>
                <p> {prop.name}: {prop.content} exercises.</p>
            </>
        )
    }

    const Content = () => {
        return (
          <div>
            <Part name={part1} content={exercises1} />
            <Part name={part2} content={exercises2} />
            <Part name={part3} content={exercises3} />
          </div>
        )
      }
  
    const Total = (prop) => {   
      return (
        <div>
          <p>Total number of exercise: {prop.total_exercises}.</p>
        </div>
      )
    }
  
    return (
      <div>
        <Header course={course} />
        <Content parts={[part1, exercises1, part2, exercises2, part3, exercises3]} />
        <Total total_exercises={exercises1 + exercises2 + exercises3}/>
      </div>
    )
  }
  
  export default App