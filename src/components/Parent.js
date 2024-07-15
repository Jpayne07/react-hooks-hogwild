import React from 'react'
import Children from './Children'

function Parent({hogs}){
    return(
        <div className = 'ui grid container'>
            <Children hogs = {hogs}/>
        </div>
    )
}

export default Parent