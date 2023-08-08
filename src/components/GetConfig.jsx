import React from 'react';

export default function GetConfig() {
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    const ssid = event.target.ssid.value;
    const pass = event.target.password.value;

    try {
      const response = await fetch('/home/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ssid, pass }),
      });

      const data = await response.json();
      console.log(data);
      // Handle success, maybe navigate the user or show a success message
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, maybe show an error message to the user
    }
  };

  return (
    <section className="getConfig">
      <h3>Configure New Devices</h3>
      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="ssid">SSID:</label>
            <input
              type="text"
              id="ssid"
              name="ssid"
              placeholder="MyWifiName!"
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Shh-Don't-Tell!"
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
