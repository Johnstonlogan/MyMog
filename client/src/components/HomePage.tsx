import React from 'react'
import { RecentBar } from "./RecentBar";
import { WowheadGuide } from './WowheadGuides';

interface Props{
    blues: [{title: string, id: number}],
    guides: [{image: string,
        title: string,
        link: string,
        content: string}]

}

export const HomePage = (props: Props) =>{
return (
    <div className="home-container">
     <div className="blue-posts">
    <RecentBar blueArray={props.blues} />
    </div>
    <WowheadGuide guides={props.guides} />
    </div>
)

}