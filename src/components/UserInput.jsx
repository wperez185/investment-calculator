
export default function UserInput({ onChange, userInput }) {

  return (
    <section id="user-input">
        <div className="input-group">
            <label htmlFor="">Initial Investment</label>
            <input type="number" 
                value={userInput.initialInvestment}  
                onChange={(event) => onChange("initialInvestment", event.target.value)}
                required
            />
            <label htmlFor="">Annual Investment</label>
            <input type="number" 
                value={userInput.annualInvestment} 
                onChange={(event) => onChange("annualInvestment", event.target.value)}
                required
            />
        </div>
        <div className="input-group">
            <label htmlFor="">Expected Return</label>
            <input type="number" 
                value={userInput.expectedReturn} 
                onChange={(event) => onChange("expectedReturn", event.target.value)}
                required 
                />
            <label htmlFor="">Duration of Investment</label>
            <input type="number" 
                value={userInput.duration} 
                onChange={(event) => onChange("duration", event .target.value)}
                required
            />
        </div>
    </section>
  )
}
