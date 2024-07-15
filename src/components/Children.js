import React, {useState} from 'react'
import AdditionalInfo from './Additional Info'

function Children ({hogs}){
    
    function clickedHog(hogData){
        return hogData
    }

    let hogElements = hogs.map(hog =>{
        return (
        <div className ='ui eight wide column' key = {hog.name} onClick = {clickedHog}>
            <h2>{hog.name}</h2>
            <h3>{hog.specialty}</h3>
            <img src = {hog.image} />
            {/* <div>{clickedHoggie}</div> */}
            <AdditionalInfo hog ={hog} clickedHog = {clickedHog}/>
        </div>
        )
    })
    return hogElements
}

export default Children