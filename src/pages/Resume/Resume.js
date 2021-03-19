import { Grid, Typography, Icon, Paper, TextField } from '@material-ui/core'
import React from 'react'
import CustomeTimeline, { CustomTimeLineSeparator } from '../../components/Timeline/Timeline'
import resumeData from '../../utils/ResumeData'
import WorkIcon from '@material-ui/icons/Work';
import './Resume.css'
// import resumeData from '../../utils/ResumeData';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import SchoolIcon from '@material-ui/icons/School';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CustomButtom from '../../components/Button/Button';

const Resume = () => {
    return (
        <>
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text' >About me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
                </Grid>
            </Grid>
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text' >Resume</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className='resume_timeline'>
                        <Grid item lg={6} sm={12}>
                            <CustomeTimeline title='Work Experiance' icon={<WorkIcon />} >
                                {resumeData.experiance.map((experiance) => (
                                    <TimelineItem>
                                        <CustomTimeLineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>{experiance.title}</Typography>
                                            <Typography variant='caption' className='timeline_date'>{experiance.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{experiance.description}</Typography>

                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomeTimeline>
                        </Grid>
                        <Grid sm={12} lg={6} item>
                            <CustomeTimeline title='Education' icon={<SchoolIcon />} >
                                {resumeData.education.map((education) => (
                                    <TimelineItem>
                                        <CustomTimeLineSeparator />
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>{education.title}</Typography>
                                            <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{education.description}</Typography>

                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomeTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text' >My Service</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify='space-around'>
                        {resumeData.service.map(service => (

                            <Grid md={3} sm={6} xs={12}>
                                <div className="service">
                                    <Icon className='service_icon'>{service.icon}</Icon>
                                    <Typography className='service_title'>{service.title}</Typography>
                                    <Typography className='service_description' >{service.description}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>

                </Grid>
            </Grid>
            <Grid container className='section graybg pb_45 p_50' spacing={3} justify='space-between'>
                {/* <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Skill</h6>
                </Grid> */}
                {resumeData.skill.map(skill => (
                    <Grid item md={6} xs={12} sm={6} lg={3} >
                        <Paper elevation={3} className='skill'>
                            <Typography variant='h6' className='skill_title'>{skill.title}</Typography>
                            {skill.description.map(element => (
                                <Typography variant='body2' className='skill_description'>
                                    <TimelineDot variant={'outlined'} className='timeline_dot' />
                                    {element}
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                ))}

            </Grid>

            <Grid container spacing={4} className='section pb_45'>

                <Grid item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className='section_title mb_30'>
                            <span></span>
                            <h6 className='section_title_text' >Contact Form</h6>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name='name' label='Name' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name='email' label='Email' />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField fullWidth name='message' label='Message' multiline rows={4} />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomButtom text={'Submit'} />

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={12} lg={5}>
                    <Grid container >
                        <Grid item className='section_title mb_30'>
                            <span></span>
                            <h6 className='section_title_text' >Contact Information</h6>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <Typography className='contactInfo_item' >
                                    <span>Address: </span>{resumeData.address}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className='contactInfo_item' >
                                    <span>Phone: </span>{resumeData.phone}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className='contactInfo_item' >
                                    <span>Email: </span>{resumeData.email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container class='contactInfo_socialsContainer' style={{ display: "flex", marginTop: '15px' }}>
                            {Object.keys(resumeData.socials).map(key => (
                                <Grid item className='contactInfo_social ' >
                                    <a href={resumeData.socials[key].link} >
                                        {resumeData.socials[key].icon}
                                    </a>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                {/* <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text' >Contact</h6>
                </Grid> */}

                {/* <Grid item xs={12} >
                    <Grid container >
                        <Grid container spacing={3} lg={7} >
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name='name' label='Name' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name='email' label='Email' />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField fullWidth name='message' label='Message' multiline rows={4} />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomButtom text={'Submit'} />

                            </Grid>
                        </Grid>

                        <Grid container lg={5}>
                            <Grid container item >

                            <Grid item xs={12} >
                                <Typography className='contactInfo_item' >
                                    <span>Address: </span>{resumeData.address}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className='contactInfo_item' >
                                    <span>Phone: </span>{resumeData.phone}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className='contactInfo_item' >
                                    <span>Email: </span>{resumeData.email}
                                </Typography>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> */}

            </Grid>
        </>
    )
}

export default Resume
