import React from 'react'

export default function UserInput() {
  return (
    <section id="user-input">
        <div className="input-group">
            <label htmlFor="">Initial Investment</label>
            <input type="number" required/>
            <label htmlFor="">Annual Investment</label>
            <input type="number" required/>
        </div>
        <div className="input-group">
            <label htmlFor="">Expected Return</label>
            <input type="number" required/>
            <label htmlFor="">Duration of Investment</label>
            <input type="number" required/>
        </div>
    </section>
  )
}
