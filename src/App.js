import React, { useState } from 'react';
import './App.css'


const App = () => {

    const [isRed, setIsRed] = useState(false)

    return (
        <>
            <div className='blueBox'>

            </div>

            {
                !!isRed
                    ?
                    <div className='redBox' onClick={()=> setIsRed(false)}></div>
                    :
                    <div className='greenBox' onClick={()=>setIsRed(true)}></div>  
            }

        </>
    );
};

export default App;