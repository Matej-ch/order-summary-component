import './OrderSummary.scss'
import iconMusic from './assets/icon-music.svg'

function OrderSummary() {
    return (<div className='summary-container'>
        <div className={'background'}></div>

        <div className={'info-container'}>
            <h1>Order summary</h1>
            <p>You can now listen to millions of songs audiobooks, and podcasts on any device anywhere you like!</p>

            <div className={'plan'}>
                <img src={iconMusic} alt=""/>
                <div><span className={'plan-type'}>Annual Plan</span> <span className={'plan-price'}>$59.99/year</span>
                </div>
                <div><a href="#">Change</a></div>
            </div>

            <div>
                <button className={'proceed'}>Proceed to Payment</button>
            </div>
            
            <div>
                <button className={'cancel'}>Cancel Order</button>
            </div>

        </div>


    </div>);
}

export default OrderSummary;