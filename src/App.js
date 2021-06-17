import React, { useEffect, useState } from 'react';
import './App.css';


// Context
import { ThemeProvider } from './components/Theme'
import { CurrencyProvider } from './components/Currency';

// Components
import Background from './components/Background'
import Block from './components/Block'
import Card from './components/Card'
import Loading from './components/Loading'
import Nav from './components/Nav'
import Selector from './components/Selector'
import Footer from './components/Footer'

function App() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://api.bitkub.com/api/market/ticker")
            .then(res => res.json())
            .then(res => setData(res))
        // console.log(Object.keys(r).length)

    }, [])

    return (
        <>
            <CurrencyProvider>
                <ThemeProvider>
                    <Background>
                        <Nav />

                        {
                            data ? (<>
                                <Block height="300px">
                                    <br /><br /><br /><br /><br /><br />
                                    <h3>Today's Cryptocurrency Prices</h3>
                                    <p className="desc">Prices from <a className="mylink" href="https://bitkub.com">bitkub.com</a>. Prices won't automatically updated. Please refresh the page for the latest prices.</p>
                                </Block>
                                <div className="full-width myselector-container">
                                    <Selector />
                                </div>
                                
                                <div className="py-3 bg-light full-width">
                                    <Block>
                                        <p className="desc">Note: USD prices calculated from USDC/THB at Bitkub market prices. Some abitrage may occurs.</p>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Bitcoin" quote="BTC" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Ether" quote="ETH" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Binance Coin" quote="BNB" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Tether" quote="USDT" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Cardano" quote="ADA" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Dogecoin" quote="DOGE" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="XRP" quote="XRP" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Bitkub Coin" quote="KUB" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Litecoin" quote="LTC" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Bitcoin Cash" quote="BCH" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Stellar" quote="XLM" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Bitcoin SV" quote="BSV" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Wanchain" quote="WAN" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="OMG Network" quote="OMG" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Zilliqa" quote="ZIL" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Status" quote="SNT" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Civic" quote="CVC" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Chainlink" quote="LINK" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="IOST" quote="IOST" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="0x" quote="ZRX" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Kyber Network Crystal Legacy" quote="KNC" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Raiden Network Token" quote="RDN" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Arcblock" quote="ABT" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Decentraland" quote="MANA" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Balancer" quote="BAL" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="SIX" quote="SIX" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="JFIN" quote="JFIN" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Everex" quote="EVX" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Power Ledger" quote="POW" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Dai" quote="DAI" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="USD Coin" quote="USDC" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Basic Attention Token" quote="BAT" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Maker" quote="MKR" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Enjin Coin" quote="ENJ" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Band Protocol" quote="BAND" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Compound" quote="COMP" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Kusama" quote="KSM" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Polkadot" quote="DOT" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="NEAR Protocol" quote="NEAR" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Secret" quote="SCRT" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Golem" quote="GLM" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="yearn.finance" quote="YFI" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Uniswap" quote="UNI" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                <Card title="Aave" quote="AAVE" data={data} />
                                            </div>
                                        </div>
                                        <div className="mx-0 row">
                                            <div className="col-lg my-3">
                                                <Card title="Alpha Finance Lab" quote="ALPHA" data={data} />
                                            </div>
                                            <div className="col-lg my-3">
                                                {/* <Card title="Balancer" quote="BAL" data={data} /> */}
                                            </div>
                                        </div>
                                    </Block>
                                </div>
                                <Footer />
                            </>)
                                :
                                <Loading />
                        }
                    </Background>
                </ThemeProvider>
            </CurrencyProvider>
        </>
    );
}

export default App;
