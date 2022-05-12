import React from 'react'
import AnchorBlank from '../../Anchors/AnchorBlank'

import { ProjectSectionTitle,ProjectSectionHolder ,ProjectSectionImgHolder,ProjectSectionImg} from './workItem.style'
const WorkItem = ({ title , img , link ,transform}) => {
    return (
        <ProjectSectionHolder>
            <AnchorBlank  href={ link} >
                <ProjectSectionTitle style= {transform} >{title}</ProjectSectionTitle>
                <ProjectSectionImgHolder>
                    <ProjectSectionImg src={img} alt="img" />
                </ProjectSectionImgHolder>
            </AnchorBlank>
        </ProjectSectionHolder>
    )
}

export default WorkItem