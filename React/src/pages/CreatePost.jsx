import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const hero = { name, alias };

    setIsPending(true);

    fetch('http://127.0.0.1:8000/heroes/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hero)
    }).then(() => {
      console.log('New hero added');
      setIsPending(false);
      navigate('/');
    })
  }

  return (
    <div>
      <h2>Add a superhero!</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Alias:</label>
        <input
          type="text"
          required
          value={alias}
          onChange={(event) => setAlias(event.target.value)}
        />
        {!isPending && <button> Confirm </button>}
        {isPending && <button disabled> Loading </button>}
      </form>
    </div>
  );
}

export default CreatePost;
