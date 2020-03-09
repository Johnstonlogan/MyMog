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
return(
// receive guide array through props (Guides)
<div className="guide-container">{props.guides.map(guide =>{
  return (
      <div className="class-guide" key={guide.class}>
        <img src={guide.image} alt={guide.class + " class guide"} className="guide-image" />
        <div className="guide-content">
        <h1 className={guide.class} >{guide.title}</h1>
        <p>{guide.content}</p>
        <form action={guide.link} target="_blank">
        <button className="guide-button" >See guide<i className="angle right icon"></i></button>
        </form>
        </div>
       
      </div>
  )
})}</div>
)

}