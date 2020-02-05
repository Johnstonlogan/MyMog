import React from 'react'
import "../styling/RecentStyle.scss"

interface Props{
blueArray: string[]
}



export const RecentBar = (props: Props) =>{
    {console.log(props.blueArray.length)}
return (<div className="recentbar">{props.blueArray.map(content => {
  return<div className="blue-content">  {content} </div>
})}<a className="blue-link" target="_blank" href="https://blue.mmo-champion.com/">Go to blue tracker</a></div>)

}

