export default function GetConfig() {
  return (
    <section className="getConfig">
      <h3>Configure New Devices</h3>
      <div className="flex">
        <form action="/home/config" method="POST">
          <div>
            <label for="ssid">SSID:</label>
            <input
              type="text"
              id="ssid"
              name="ssid"
              placeholder="MyWifiName!"
            ></input>
          </div>
          <div>
            <label for="password">Password:</label>
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
