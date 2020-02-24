import React from 'react'
import "../styling/WowheadStyle.scss"


interface Props {
guides: 
[{image: string,
title: string,
link: string,
content: string,
class: string}]
}



export const WowheadGuide = (props: Props) =>{
    console.log()
return(
<div className="guide-container">{props.guides.map(guide =>{
  return (
      <div className="class-guide">
        <img src={guide.image} className="guide-image" />
        <div className="guide-content">
        <h1 className={guide.class} >{guide.title}</h1>
        <p>{guide.content}</p>
        </div>
       
      </div>
  )
})}</div>
)

}