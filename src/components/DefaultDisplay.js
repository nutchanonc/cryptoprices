import Card from './Card'
import Block from './Block'
export default function DefaultDisplay({ data }) {
    return (
        <>
            <Block height="100vh">
                <p className="desc">Note: USD prices calculated from USDT/THB at Bitkub market prices. Their might be some abitrage between other exchanges.</p>
                {/* <div className="mx-0 row">
                    <div className="col-lg card-container my-3">
                        <Card title="Bitcoin" quote="BTC" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Ethereum" quote="ETH" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Binance Coin" quote="BNB" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Tether" quote="USDT" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Cardano" quote="ADA" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Dogecoin" quote="DOGE" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="XRP" quote="XRP" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Bitkub Coin" quote="KUB" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Litecoin" quote="LTC" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Bitcoin Cash" quote="BCH" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Stellar" quote="XLM" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Bitcoin SV" quote="BSV" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Wanchain" quote="WAN" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="OMG Network" quote="OMG" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Zilliqa" quote="ZIL" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Status" quote="SNT" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Civic" quote="CVC" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Chainlink" quote="LINK" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="IOST" quote="IOST" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="0x" quote="ZRX" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Kyber Network Crystal Legacy" quote="KNC" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Raiden Network Token" quote="RDN" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Arcblock" quote="ABT" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Decentraland" quote="MANA" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Balancer" quote="BAL" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="SIX" quote="SIX" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="JFIN" quote="JFIN" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Everex" quote="EVX" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Power Ledger" quote="POW" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Dai" quote="DAI" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="USD Coin" quote="USDC" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Basic Attention Token" quote="BAT" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Maker" quote="MKR" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Enjin Coin" quote="ENJ" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Band Protocol" quote="BAND" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Compound" quote="COMP" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Kusama" quote="KSM" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Polkadot" quote="DOT" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="NEAR Protocol" quote="NEAR" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Secret" quote="SCRT" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Golem" quote="GLM" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="yearn.finance" quote="YFI" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Uniswap" quote="UNI" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Aave" quote="AAVE" data={data} />
                    </div>

                    <div className="col-lg card-container my-3">
                        <Card title="Alpha Finance Lab" quote="ALPHA" data={data} />
                    </div>
                    <div className="col-lg card-container my-3">
                        <Card title="Balancer" quote="BAL" data={data} />
                    </div>
                </div> */}
                <div className="d-flex justify-content-between flex-wrap">
                    <Card title="Bitcoin" quote="BTC" data={data} />
                    <Card title="Ethereum" quote="ETH" data={data} />

                    <Card title="Binance Coin" quote="BNB" data={data} />
                    <Card title="Tether" quote="USDT" data={data} />

                    <Card title="Cardano" quote="ADA" data={data} />
                    <Card title="Dogecoin" quote="DOGE" data={data} />

                    <Card title="XRP" quote="XRP" data={data} />
                    <Card title="Bitkub Coin" quote="KUB" data={data} />

                    <Card title="Litecoin" quote="LTC" data={data} />
                    <Card title="Bitcoin Cash" quote="BCH" data={data} />

                    <Card title="Stellar" quote="XLM" data={data} />
                    <Card title="Bitcoin SV" quote="BSV" data={data} />

                    <Card title="Wanchain" quote="WAN" data={data} />
                    <Card title="OMG Network" quote="OMG" data={data} />

                    <Card title="Zilliqa" quote="ZIL" data={data} />
                    <Card title="Status" quote="SNT" data={data} />
                    <Card title="Civic" quote="CVC" data={data} />
                    <Card title="Chainlink" quote="LINK" data={data} />

                    <Card title="IOST" quote="IOST" data={data} />
                    <Card title="0x" quote="ZRX" data={data} />

                    <Card title="Kyber Network Crystal Legacy" quote="KNC" data={data} />
                    <Card title="Raiden Network Token" quote="RDN" data={data} />

                    <Card title="Arcblock" quote="ABT" data={data} />
                    <Card title="Decentraland" quote="MANA" data={data} />

                    <Card title="Balancer" quote="BAL" data={data} />
                    <Card title="SIX" quote="SIX" data={data} />

                    <Card title="JFIN" quote="JFIN" data={data} />
                    <Card title="Everex" quote="EVX" data={data} />

                    <Card title="Power Ledger" quote="POW" data={data} />
                    <Card title="Dai" quote="DAI" data={data} />

                    <Card title="USD Coin" quote="USDC" data={data} />
                    <Card title="Basic Attention Token" quote="BAT" data={data} />

                    <Card title="Maker" quote="MKR" data={data} />
                    <Card title="Enjin Coin" quote="ENJ" data={data} />

                    <Card title="Band Protocol" quote="BAND" data={data} />
                    <Card title="Compound" quote="COMP" data={data} />

                    <Card title="Kusama" quote="KSM" data={data} />
                    <Card title="Polkadot" quote="DOT" data={data} />

                    <Card title="NEAR Protocol" quote="NEAR" data={data} />
                    <Card title="Secret" quote="SCRT" data={data} />

                    <Card title="Golem" quote="GLM" data={data} />
                    <Card title="yearn.finance" quote="YFI" data={data} />

                    <Card title="Uniswap" quote="UNI" data={data} />
                    <Card title="Aave" quote="AAVE" data={data} />
                    <Card title="Alpha Finance Lab" quote="ALPHA" data={data} />
                    <Card title="Balancer" quote="BAL" data={data} />
                </div>
            </Block>
        </>
    )
}