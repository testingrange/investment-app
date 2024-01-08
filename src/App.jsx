import { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'

function App() {

  const [userInput, setUserInput] = useState({ininvest: null,
    anninvest: null,
    expret: null,
    duration: null, 
})

const handleChange = (event) => {
    setUserInput(prevUserInputValues => {
        return {
            ...prevUserInputValues,
        [event.target.name]: event.target.value
        }
    })
    console.log(userInput)
}

  return (<>
    <Header />
    <UserInput onUserInputChange={handleChange} userData={userInput}/>  
  </>
  )
}

export default App
