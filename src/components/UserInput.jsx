export default function UserInput({ onUserInputChange, userData }) {

    return (
        <>
            <div id="user-input">
                <div className="input-group">
                    <label htmlFor="ininvest">Initial Investment</label>
                    <input type="number" name="ininvest" id="ininvest" onChange={onUserInputChange}></input>
                    <label htmlFor="anninvest">Annual Investment</label>
                    <input type="number" name="anninvest" id="anninvest" onChange={onUserInputChange}></input>
                </div>
                <div className="input-group">
                    <label htmlFor="expret">Expected Return</label>
                    <input type="number" name="expret" id="expret" min="1" max="100" onChange={onUserInputChange}></input>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" name="duration" id="duration" min="1" max="50" onChange={onUserInputChange}></input>
                </div>
            </div>
            <div id='info'>
                <div className="controll-pannel">
                    <h2>Initial investment   {userData["ininvest"]}</h2>
                    <h2>Annual investment   {userData["anninvest"]}</h2>
                </div>
                <div className="controll-pannel">
                    <h2>Expected return   {userData["expret"]}</h2>
                    <h2>Duration   {userData["duration"]}</h2>
                </div>
            </div>
        </>
        
    )
}