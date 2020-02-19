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
<p className="test">{props.guides[0].title}</p>
)

}