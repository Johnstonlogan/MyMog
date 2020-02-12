import React from 'react'
import "../styling/RecentStyle.scss"

interface Props{
blueArray: [{title: string, id: number}]
}



export const RecentBar = (props: Props) =>{
    {console.log(props.blueArray.length)}
return (<div className="recentbar">{props.blueArray.map(content => {
  return<a key={content.id} className="blue-content" href="https://blue.mmo-champion.com/" target="_blank">  {content.title} </a>
})}<a className="blue-link" target="_blank" href="https://blue.mmo-champion.com/">Blue Post Tracker <i className="angle right icon"></i></a></div>)

}

