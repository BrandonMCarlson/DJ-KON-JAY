import React from 'react';


function contactme();{
    return(
        <div>
            <form>
                <label> First Name: </label>
                <input type="text" required/> 
                <label> Last Name: </label>
                <input type="text" required/> 
            </form>
        </div>
    )
}

export default contactme; 