import React from 'react';
import '../Design/Navbar.css';

function Navbar() {
    return(
        <div id='general'>
            <img id='riceappslogo' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4f03431c-52ad-4548-97ec-38fee57a08db/riceappslogo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201013%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201013T184248Z&X-Amz-Expires=86400&X-Amz-Signature=618819c11c0ee0714033dca8955292bd275ba02f44d9bad7ea52dbf95a9e1b5d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22riceappslogo.png%22'></img>
            <div id='button'>
                <p id='buttontext'>
                    Enable Dark Mode
                </p>
            </div>
        </div>
    )
}
export default Navbar