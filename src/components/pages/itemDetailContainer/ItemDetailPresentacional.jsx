

const ItemDetailPresentacional = ({ productSelected, onAdd }) => {
    return (
        <section className="section_itemDetail">
            <div className="itemDetail_container">
                <div className="itemDetail_product_container">
                    <img src={`/assets/images/store/${productSelected.image}`} alt={productSelected.name}></img>
                    <aside className="itemDetail_buy">
                        <div className="itemDetail_buy_details">
                            <h1>{productSelected.name}</h1>
                            <span>${parseFloat(productSelected.price).toFixed(2)}</span>
                        </div>
                        <div className="itemDetail_buy_shipping_container">
                            <div className="itemDetail_buy_shipping_delivery_container">
                                <svg viewBox="0 0 25 25" className="as-svgicon as-svgicon-boxtruck as-svgicon-reduced as-svgicon-boxtruckreduced" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path fill="#1d1d1f" d="m23.482 12.847-2.92-3.209A1.947 1.947 0 0 0 18.985 9H17V6.495a2.5 2.5 0 0 0-2.5-2.5h-11a2.5 2.5 0 0 0-2.5 2.5v9.75a2.5 2.5 0 0 0 2.5 2.5h.548A2.746 2.746 0 0 0 6.75 21.02 2.618 2.618 0 0 0 9.422 19h6.681a2.744 2.744 0 0 0 5.347-.23h.735A1.656 1.656 0 0 0 24 16.98v-2.808a1.937 1.937 0 0 0-.518-1.325ZM8.426 18.745a1.74 1.74 0 0 1-3.352 0 1.577 1.577 0 0 1 .015-1 1.738 1.738 0 0 1 3.322 0 1.578 1.578 0 0 1 .015 1ZM9.447 18a2.726 2.726 0 0 0-5.394-.255H3.5a1.502 1.502 0 0 1-1.5-1.5v-9.75a1.502 1.502 0 0 1 1.5-1.5h11a1.502 1.502 0 0 1 1.5 1.5V18Zm10.972.77a1.738 1.738 0 0 1-3.337 0 1.573 1.573 0 0 1 0-1 1.742 1.742 0 1 1 3.337 1ZM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0 0 17 16.165V10h1.986a.976.976 0 0 1 .838.314l2.927 3.214a.95.95 0 0 1 .249.644Zm-1.324-3.36a.512.512 0 0 1 .174.38h-3.306a.499.499 0 0 1-.544-.528V11h1.073a.76.76 0 0 1 .594.268Z"></path></svg>
                                <div className="itemDetail_buy_shipping_delivery_content">
                                    <h3>Delivery:</h3>
                                    <span>In Stock</span>
                                    <span>Free Shipping</span>
                                    <span><a href="#">Get delivery dates</a></span>
                                </div>
                            </div>
                            <div className="itemDetail_buy_shipping_pickup_container">
                                <svg viewBox="0 0 25 25" className="as-svgicon as-svgicon-applestorepickup as-svgicon-reduced as-svgicon-applestorepickupreduced" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path><path d="M18.5 5h-1.775a4.231 4.231 0 0 0-8.45 0H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h12a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 18.5 5Zm-6-3a3.245 3.245 0 0 1 3.225 3h-6.45A3.245 3.245 0 0 1 12.5 2ZM20 18.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6h12A1.5 1.5 0 0 1 20 7.5Z"></path><path d="M14.4 12.448a1.592 1.592 0 0 1 .738-1.328 1.607 1.607 0 0 0-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 0 0-1.739 2.068 4.32 4.32 0 0 0 .723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 0 0 .474-.989 1.516 1.516 0 0 1-.926-1.403ZM12.583 10.357a1.346 1.346 0 0 0 .941-.5 1.594 1.594 0 0 0 .361-.974.731.731 0 0 0-.008-.136 1.5 1.5 0 0 0-1.016.528 1.547 1.547 0 0 0-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011Z"></path></svg>
                                <div className="itemDetail_buy_shipping_pickup_content">
                                    <h3>Pickup:</h3>
                                    <span><a href="#">Check aviability</a></span>
                                </div>
                            </div>
                        </div>
                        <button onClick={onAdd}>Add to Bag</button>
                        <div className="itemDetail_buy_contact_us_container">
                            <svg viewBox="0 0 23 25" className="as-svgicon as-svgicon-chat as-svgicon-reduced as-svgicon-chatreduced" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h23v25H0z"></path><path d="M22.71 15.441c0-2.849-2.846-5.154-6.417-5.154h-.076a8.059 8.059 0 00-1.035.078c-2.72.377-4.823 2.112-5.228 4.3a4.218 4.218 0 00-.078.768c0 .089.011.175.016.262.169 2.84 3.035 4.885 6.538 4.885.179 0 .36-.005.541-.016A8.149 8.149 0 0020.278 22c.517 0 .667-.413.374-.78a10.986 10.986 0 01-.96-1.4 4.937 4.937 0 003.018-4.379zm-3.446 3.471l-.942.446.484.923c.046.088.1.178.151.268a11.49 11.49 0 01-1.431-.809l-.279-.185-.334.02c-.162.01-.323.014-.482.014-3.094 0-5.52-1.8-5.551-4.1v-.044a3.237 3.237 0 01.183-1.053 4.923 4.923 0 013.729-2.935 6.889 6.889 0 011.169-.153c.112-.005.222-.013.336-.013 2.987 0 5.417 1.864 5.417 4.154a3.957 3.957 0 01-2.45 3.467z"></path><path d="M8.915 14.819a9.88 9.88 0 01-.794.033q-.305 0-.616-.018l-.334-.02-.279.186a13.767 13.767 0 01-2.578 1.356 9.545 9.545 0 00.626-1l.484-.922-.941-.446A5.18 5.18 0 011.29 9.43c0-2.994 3.141-5.43 7-5.43 3.826 0 6.941 2.393 7 5.351a8.9 8.9 0 011-.063C16.19 5.8 12.684 3 8.292 3c-4.453 0-8 2.875-8 6.43a6.159 6.159 0 003.764 5.457 13.707 13.707 0 01-1.2 1.752c-.366.458-.179.973.466.973a10.16 10.16 0 004.123-1.781q.34.02.675.02c.263 0 .522-.011.779-.029-.009-.127-.023-.253-.023-.381a5.154 5.154 0 01.039-.622z"></path></svg>
                            <div className="itemDetail_buy_contact_us_content">
                                <span>Need some help? <a href="#">Contact us.</a></span>
                            </div>
                        </div>
                    </aside>
                </div>
                <div className="itemDetail_info_container">
                    <h1>Product Information</h1>
                    <div className="itemDetail_info_overview">
                        <div className="itemDetail_info_overview_h2">
                            <h2>Overview</h2>
                        </div>
                        <div className="itemDetail_info_overview_p">
                            <p>{productSelected.overview}</p>
                        </div>
                    </div>
                    <div className="itemDetail_info_box">
                        <div className="itemDetail_info_box_h2">
                            <h2>What’s in the Box</h2>
                        </div>
                        <div className="itemDetail_info_box_p">
                            <p>{productSelected.whatsInTheBox}</p>
                        </div>
                    </div>
                    <div className="itemDetail_info_specs">
                        <div className="itemDetail_info_specs_h2">
                            <h2>Tech Specs</h2>
                        </div>
                        <div className="itemDetail_info_specs_p">
                            <p>{productSelected.techSpecs}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemDetailPresentacional