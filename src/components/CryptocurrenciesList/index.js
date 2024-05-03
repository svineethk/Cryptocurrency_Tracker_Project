// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyName: eachData.currency_name,
      currencyLogo: eachData.currency_logo,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
    }))

    this.setState({currencyList: updatedData, isLoading: false})
  }

  renderCurrencyList = () => {
    const {currencyList} = this.state

    return (
      <div className="container">
        <h1 className="header">Cryptocurrency Tracker</h1>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="cryptocurrency"
          />
        </div>
        <ul className="list-container">
          <div className="header-containers">
            <div className="name-container">
              <p className="header-header">Coin Type</p>
            </div>
            <div className="currency-container">
              <p className="each-usd">USD</p>
              <p className="each-euro">EURO</p>
            </div>
          </div>
          {currencyList.map(eachCurrency => (
            <CryptocurrencyItem
              eachCurrency={eachCurrency}
              key={eachCurrency.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCurrencyList()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
