import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';





function fillcontract() {

    return(
        <div>
            <form>
                <label> First Name: </label>
                <input type="text" required/> 
                <label> Last Name: </label>
                <input type="text" required/> 
                <label> Event: </label>
                <input type="text" required/>
                <label> Event Address: </label> 
                <input type="text" required/>
                <label> Length of Event: </label>  
                <input type="text" required/>
                <label> Date and Time of Event </label>  
                <input type="text" required/>
            </form>
        </div>
    )
}

export default fillcontract;