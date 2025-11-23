import React from 'react'
import ProjectCard from './ProjectCard'
import "../css/Project.css"
export default function Project(){
    
    return (
        <div className="project-container">
            <p>Projects</p>
        <ProjectCard title="Minesweeper" description="A classic game" link="https://github.com/Yufei-Xiao/Minesweeper"/>
        <ProjectCard title="Task Tracker" description="A todo app"/>
        </div>
    );
}