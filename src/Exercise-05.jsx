const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
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
    }

    const Content = (prop) => { 
        return (
            <>
                <p>{prop.part[0].name}: {prop.part[0].exercises}.</p>
                <p>{prop.part[1].name}: {prop.part[1].exercises}.</p>
                <p>{prop.part[2].name}: {prop.part[2].exercises}.</p>
            </>
        )
    }
    return (
      <div>
        <h1>{course.name}</h1>
        <Content part={course.parts} />
        <p>Total Parts: {course.parts.length}.</p> 
      </div>
    )
  }
  
export default App