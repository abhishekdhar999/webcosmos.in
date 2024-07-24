
'use client';
import { useState } from 'react';
// import styles from './style.module.scss';
import Titles from '../Titles/Titles';
import Description from '../Description/Description';
const data = [
    {
        title: "aesthetics",
        description: "We transform ideas into visually stunning designs that captivate and inspire.",
        speed: 0.5
    },
    {
        title: "resonance",
        description: "Our websites forge meaningful connections that deeply resonate with users.",
        speed: 0.5
    },
    {
        title: "innovation",
        description: "Leveraging the latest technologies to deliver groundbreaking and original solutions.",
        speed: 0.67
    },
    {
        title: "engagement",
        description: "Prioritizing user delight by exceeding expectations at every touchpoint.",
        speed: 0.8
    },
    {
        title: "impact",
        description: "Creating interactive experiences that captivate users and encourage lasting involvement.",
        speed: 0.8
    },
    {
        title: "satisfaction",
        description: "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
        speed: 0.8
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className="container">
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Description data={data} selectedProject={selectedProject}/>
        </div>
    )
}