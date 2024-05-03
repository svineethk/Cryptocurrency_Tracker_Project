// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachCurrency} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = eachCurrency

  return (
    <li className="each-container">
      <div className="name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="each-header">{currencyName}</p>
      </div>
      <div className="currency-container">
        <p className="each-usd">{usdValue}</p>
        <p className="each-euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
