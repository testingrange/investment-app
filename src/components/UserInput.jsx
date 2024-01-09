export default function UserInput({ onChange, userData }) {
  return (
      <section id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="ininvest">Initial Investment</label>
            <input
              type="number"
              required
              name="ininvest"
              value={userData["ininvest"]}
              id="ininvest"
              onChange={(event) => onChange("ininvest", event.target.value)}
            ></input>
          </p>
          <p>
            <label htmlFor="anninvest">Annual Investment</label>
            <input
              type="number"
              required
              name="anninvest"
              value={userData["anninvest"]}
              id="anninvest"
              onChange={(event) => onChange("anninvest", event.target.value)}
            ></input>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expret">Expected Return</label>
            <input
              type="number"
              required
              name="expret"
              value={userData["expret"]}
              id="expret"
              min="1"
              max="100"
              onChange={(event) => onChange("expret", event.target.value)}
            ></input>
          </p>
          <p>
            <label htmlFor="duration">Duration</label>
            <input
              type="number"
              required
              name="duration"
              value={userData.duration}
              id="duration"
              min="1"
              max="50"
              onChange={(event) => onChange("duration", event.target.value)}
            ></input>
          </p>
        </div>
      </section>
  );
}
