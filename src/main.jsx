import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import App from "./Part2/Exercise_06-10";

const promise = axios.get("http://localhost:3001/notes");
console.log(promise);

const promise2 = axios.get("http://localhost:3001/foobar");
console.log(promise2);

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: Math.random() < 0.5,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: Math.random() < 0.5,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: Math.random() < 0.5,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <App notes={notes} />
);
