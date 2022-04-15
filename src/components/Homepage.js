import {useOnline} from 'rooks';
import React from 'react';
import offline from '../offline.jpeg';

const  Homepage = () => {

    const online = useOnline();
    console.log("user Online");

    return (
        <div>
            <div style={{ backgroundColor : "lightblue" }}> 
                Status: you are {online ? "Online" : <p><img src={offline}/></p>}
            </div>
            <hr></hr>
        </div>
    );
}

export default Homepage;