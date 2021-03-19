import { Typography } from '@material-ui/core'
import React from 'react'
import './Profile.css'
import image from '../../assets/images/long-cover.jpg'
import CustomeTimeline, { CustomTimeLineSeparator } from '../Timeline/Timeline'
import resumeData from '../../utils/ResumeData'

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButtom from '../Button/Button'
import GetAppIcon from '@material-ui/icons/GetApp';
import resume from '../../assets/resume/Asif_Resume.pdf'

const CustomeTimeLineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimeLineSeparator />

        <TimelineContent className='timeline_content'>
            {link ? (
                <Typography className='timelineItem_text' >
                    <span>{title}:</span>{" "}
                    <a href={link} rel="noreferrer" target="_blank">{text}</a>
                </Typography>
            ) : (
                    <Typography className='timelineItem_text'>
                        <span>{title}:</span>{text}
                    </Typography>
                )}
        </TimelineContent>
    </TimelineItem>
);


const Profile = () => {
    
    return (
        <div className='profile container_shadow' style={{position:"" ,top:"50px"}}>
            <div className="profile_name">
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>

            </div>
            <figure className="profile_image">
                <img src={image} alt='' />
            </figure>
            <div className="profile_info">
                <CustomeTimeline icon={<PersonOutlineIcon />} >
                    <CustomeTimeLineItem title='Name' text={resumeData.name} />
                    <CustomeTimeLineItem title='Title' text={resumeData.title} />
                    <CustomeTimeLineItem title='Email' text={resumeData.email} />

                    {Object.keys(resumeData.socials).map((key)=>(
                    <CustomeTimeLineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />

                    ))}

                </CustomeTimeline >
                <div className="btn_container"  >
                    
                    <a href={resume}  style={{textDecoration:"none"}}>
                    <CustomButtom text={'Download-CV'} icon={<GetAppIcon/>}/>
                    </a>
                    
                </div>
            </div>
        </div>
    );
};
 

export default Profile
