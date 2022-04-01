import React from "react";
import Iframe from "react-iframe";

function Fiat() {
  return (
    <div>
      <Iframe
        src="https://widget.onramper.com?color=266677&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0"
        height="595px"
        width="440px"
        title="Onramper widget"
        frameBorder="0"
        allow="accelerometer;
  autoplay; camera; gyroscope; payment"
        style="box-shadow: 1px 1px 1px 1px
  rgba(0,0,0,0.1);"
        rel="noreferrer"
      ></Iframe>
    </div>
  );
}

export default Fiat;
