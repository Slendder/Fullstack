const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          <ul>
            {course.parts.map((part) => (
              <li key={part.id}>
                {part.name}: {part.exercises}{" "}
                {part.exercises > 1 ? "exercise" : "exercises"}
              </li>
            ))}
          </ul>
          <p>
            Total of exercises:{" "}
            <strong>
              {course.parts.reduce((total, part) => total + part.exercises, 0)}
            </strong>
          </p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Course courses={courses} />
    </div>
  );
};

export default App;
