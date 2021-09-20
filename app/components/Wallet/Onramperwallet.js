import React from "react";

function Onramperwallet() {
    return (
        <div className="onramper-wallet">
            <iframe
                src="https://widget.onramper.com/?color=ffc000&defaultAmount=1000&defaultFiat=USD&defaultCrypto=BTC&apiKey=pk_prod_k6LKERIMdGDE8geCxOApKSCy6mnfF5CuhI4TLZj55Wc0"
                title="myFrame"
                width="30%"
                height="600"
                frameBorder="0"
                style={{border: "0"}}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            ></iframe>
        </div>
    );
}

export default Onramperwallet;
