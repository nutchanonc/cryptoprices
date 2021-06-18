import React, { useState, useContext } from 'react'
import { CurrencyContext } from './contexts/Currency'
const coins = require("../data.json")

export default function List(props) {

    const [currency, setCurrency] = useState("THB")

    const { activeCurrency } = useContext(CurrencyContext)

    if (currency !== activeCurrency) {
        setCurrency(activeCurrency)
    }

    var currentPrice;

    if (currency === "THB") {
        currentPrice = new Number(props.data[`THB_${props.quote}`].last)
    }
    else {
        currentPrice = new Number(props.data[`THB_${props.quote}`].last / props.data["THB_USDC"].last)
    }


    const percentChange = props.data[`THB_${props.quote}`].percentChange
    const high24hr = props.data[`THB_${props.quote}`].high24hr
    const low24hr = props.data[`THB_${props.quote}`].low24hr


    return (
        <div className="full-width row m-0 list pt-3">
            <div className="col coinicon-container mb-1">
                <img src={coins[`THB_${props.quote}`].iconUrl} className="coinicon" />
            </div>
            <div className="col mb-1">
                <span className="mr-2">{props.title}</span><span className="mx-1 quote">{props.quote}</span>
            </div>
            <div className="col text-end mb-1">
                <b>{props.data ? (<span className="listprice">{currency === "USDT" ? "$" : null}{currentPrice.toFixed(2)} {currency === "THB" ? "THB" : null}</span>) : "Getting price"}</b>
            </div>
            <div className="col-sm text-end small mb-1">
                high: {high24hr} , low: {low24hr}
            </div>
            <div className="col-sm d-flex justify-content-end mb-1">
                <div className={"d-flex justify-content-center align-items-center pt-3 " + (percentChange >= 0 ? "green" : "red")}>
                    <p className="color-white percentchange"> {percentChange >= 0 ? `▲${percentChange}` : `▼${Math.abs(percentChange)}`} %</p>
                </div>
            </div>

        </div>
    )

    return (
        <div className="card full-width p-0 my-3">
            <div className="full-width bgimg" style={{ backgroundImage: `url(/cryptowallpaper/${props.quote}.png)` }} />
            <div className="content full-width pt-4 pb-2 px-4">
                <div className="full-width small">{`${props.quote}/${currency}`}</div>
                <h5>{props.title}</h5>
                <div className="full-width row m-0 mt-2">
                    <div className="col-8 p-0">
                        <h4>{props.data ? (<span className="price">{currency === "USDT" ? "$" : null}{currentPrice.toFixed(2)} {currency === "THB" ? "THB" : null}</span>) : "Getting price"}</h4>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <div className={"d-flex justify-content-center align-items-center pt-3 " + (percentChange >= 0 ? "green" : "red")}>
                            <p className="color-white percentchange"> {percentChange >= 0 ? `▲${percentChange}` : `▼${Math.abs(percentChange)}`} %</p>
                        </div>
                    </div>
                </div>
                <p className="my-0 small">24 hours ago</p>
                <p className="my-0 small">high: {high24hr} , low: {low24hr}</p>
            </div>
        </div>
    )
}