import React from 'react';

function App() {

  return (

    <div className="App">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="content">

        <h1>Bit Look</h1>
        <div class="btn-group">
       	   <button type="button2"><a class="button2" href="https://blockchain.info/rawtx/$tx_hash">Single Block Transaction</a></button>
      	   <button type="button1"><a class="button1" href="https://blockchain.info/rawblock/$block_hash">Single Block</a></button>
           <button type="button3"><a class="button3" href="https://blockchain.info/latestblock">Most recent Block</a></button>
        </div>
      </div>




    </div>

  	)
}

export default App;
