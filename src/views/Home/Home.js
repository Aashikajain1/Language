import React from 'react'
import I18n from './../../utils/I18n'
function Home() {
    const usersCount=9;  
  return (
    <div>
        <h1>{I18n("wlcmmsg")}</h1>
        <p>{I18n("msgtwo")}</p>
        <h3>
        {I18n("msgthree")}
        </h3>
        <select 
        defaultValue={localStorage.getItem("lang")}
        onChange={(e)=>{
            localStorage.setItem("lang",e.target.value);
            window.location.reload()}}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="mr">Marathi</option>
        </select>
        <p>{I18n("msgfour", "<stucount>",usersCount)}</p>
    </div>
  )
}

export default Home