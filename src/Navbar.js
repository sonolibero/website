import React from "react";
import logo from './logo.png';

function Navbar()
{
    return(
        <div>
            <div>telegram</div>
            <img src={logo} className="App-logo" alt="logo"/>
            <a href="https://twitter.com/verci_eth?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">follow @verci_eth</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    )
}

export default Navbar;