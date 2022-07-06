// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('');

  const handleChange = e => {
    setUsername(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitUsername(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          onChange={handleChange}
          value={username}
          type="text"
          id="usernameInput"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
