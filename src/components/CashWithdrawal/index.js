// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <div className="initial-container">
              <p className="initial">S</p>
            </div>

            <p className="name">Surinarayana</p>
          </div>
          <div className="balance-container">
            <p className="balance-name"> Your Balance </p>
            <p className="balance">{balance}</p>
          </div>
          <div>
            <p className="rupees"> In Rupees </p>
            <p className="withdraw">Withdraw</p>
            <p className="choose">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-list">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  denominationDetails={eachDenomination}
                  updateBalance={this.updateBalance}
                  key={eachDenomination.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
