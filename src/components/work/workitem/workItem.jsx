import React from 'react'
import { Link } from "react-router-dom";

import { ProjectSectionTitle,ProjectSectionHolder ,ProjectSectionImgHolder,ProjectSectionImg} from './workItem.style'
const WorkItem = ({ title , img , link ,transform}) => {
    return (
        <ProjectSectionHolder>
            <Link  to={`/work/${link}`} style={{ textDecoration :'none' }} >
                <ProjectSectionTitle style= {transform} >{title}</ProjectSectionTitle>
                <ProjectSectionImgHolder>
                    <ProjectSectionImg src={img} alt="img" />
                </ProjectSectionImgHolder>
            </Link>
        </ProjectSectionHolder>
    )
}

export default WorkItem