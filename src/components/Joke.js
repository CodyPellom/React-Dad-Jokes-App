import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Joke() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    //axios pulls in dadjoke api to use
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => setJoke(res.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchJoke = () => {
      axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => setJoke(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <div className="card text-white bg-dark mb-3">
        <div className="card-body">
          <h5 className="card-title">Dad Joke</h5>
          <p className="card-text">{joke.joke}</p>
          <a
            class="btn btn-primary active"
            aria-current="page"
            onClick={fetchJoke}
          >
            Another un'
          </a>
        </div>
      </div>
    </div>
  );
}
