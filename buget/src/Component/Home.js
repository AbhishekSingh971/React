import React from 'react'

export const Home = () => {

    let onsubmit = () => {
        let P = document.getElementById('loanAmount').value;
        let R = document.getElementById('interestRate').value;
        let N = document.getElementById('loanTenure').value;

        let E = Math.ceil(P * R * (((1 + R) ** N) / (((1 + R) ** N) - 1)));
        // let E = ((P*R*N)/100);

        let html = `<div class="card col-4 bg-dark">
        <div class="card-text text-center border border-info mt-4">On The <b>${P}</b> Income with <b>${R}</b> Expenditure , You have to pay <b>${E}</b> EMI for <b>${N}</b> Months</div>
    </div>`;

        document.getElementById('cards').innerHTML += html;
    }

    return (
        <div className='container-fluid'>
            <h1 className="h1 mt-5 text-warning text-center mb-3">Budget</h1>
            <div className="row g-3">
                <div className="col-5 form-floating ms-5 mb-3">
                    <input type="number" className="form-control bg-dark text-success" id="loanAmount" placeholder="Loan Amount" />
                    <label htmlFor="loanAmount">Personal Loan Amount</label>
                </div>
                <div className="col-5 form-floating">
                    <input type="number" className="form-control bg-dark text-success" id="interestRate" placeholder="Interest Rate" />
                    <label htmlFor="interestRate">Interest Rate</label>
                </div>
                <div className="col-5 form-floating ms-5 mb-3">
                    <input type="number" className="form-control bg-dark text-success" id="loanTenure" placeholder="Loan Tenure" />
                    <label htmlFor="loanTenure">Loan Tenure</label>
                </div>
            </div>

            <div className=" container-fluid d-grid justify-content-center">
                <button type='button' className="btn mt-4 btn-outline-info" onClick={onsubmit}>Submit</button>
            </div>

            <div id="cards" className="cards container-fluid bg-dark row">

            </div>

        </div>
    )
}
