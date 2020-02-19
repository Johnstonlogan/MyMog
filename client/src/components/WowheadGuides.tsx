import React from 'react'
import "../styling/WowheadStyle.scss"


interface Props {
guides: 
[{image: string,
title: string,
link: string,
content: string}]
}



export const WowheadGuide = (props: Props) =>{
return(
<div className="guide-container">{}</div>
)

}