import { calculateInvestmentResults, formatter } from "../util/investment"


export default function Results({ userInputData }) {
    const inputData = {
            initialInvestment:userInputData.ininvest,
            annualInvestment:userInputData.anninvest,
            expectedReturn:userInputData.expret,
            duration:userInputData.duration
        }

    console.log("Results component", inputData)

    const userData = calculateInvestmentResults(inputData)
    console.log("Calculated UserData, ", userData)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {userData.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - (userData[0].valueEndOfYear - userData[0].annualInvestment  - userData[0].interest)
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest 
                    return (                    
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                )})}
            </tbody>
        </table>
    )
}