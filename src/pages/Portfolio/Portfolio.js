import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ResumeData from '../../utils/ResumeData'
import './Portfolio.css'

const Portfolio = () => {
    const [tabValue, setTabvalue] = useState("All")
    const [projectDialogue, setProjectDialogue] = useState(false)

    // const projectDialogue = () => {

    // }
    return (
        <Grid container  className='section pb_45'>
            <Grid container>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text' >Project</h6>
                </Grid>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs
                    value={tabValue}
                    indicatorColor='white'
                    className='customTab'
                    onChange={(event, newValue) => setTabvalue(newValue)}>
                    <Tab
                        label='All'
                        value='All'
                        className={tabValue == 'All' ? 'customeTab_item active' : 'customeTab_item'}
                    />
                    {[...new Set(ResumeData.projects.map(item => item.tag))].map(tag => (
                        <Tab
                            label={tag}
                            value={tag}
                            className={
                                tabValue == tag ? "customeTab_item active" : 'customeTab_item'
                            }
                        />

                    ))}
                </Tabs>
            </Grid>
            {/* projects */}
            <Grid xs={12} item>
                <Grid container spacing={3} style={{width:'100%',margin:"0 auto"}}>
                    {ResumeData.projects.map(project => (
                        <>
                            {tabValue == project.tag || tabValue == 'All' ? (
                                <Grid item  className='cardjj' style={{display:'flex',justifyContent:"center"}}>
                                    <Grow in timeout={1000}>
                                        <Card  className='customCard' onClick={() => setProjectDialogue(project)}>
                                            <CardActionArea>
                                                <CardMedia className='customeCard_image' image={project.image} title={project.title} />
                                                <CardContent>
                                                <Typography variant={'body2'} className='customeCard_title'>{project.title}</Typography>
                                                    <Typography variant='body2' className='customeCard_caption'>{project.caption}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            ) : null}
                        </>
                    ))}

                </Grid>
            </Grid>
            <Dialog  open={projectDialogue} onClose={() => setProjectDialogue(false)} className='projectDialog'>
                <DialogTitle onClose={() => setProjectDialogue(false)}>
                    {projectDialogue.title}
                </DialogTitle>
                <img src={projectDialogue.image} alt=''  className='projectDialog_image'/>
                <DialogContent className='projectDialog_description'>{projectDialogue.description}</DialogContent>

                <DialogActions className='projectDialog_actions'>
                    {projectDialogue?.links?.map(link => (
                        <a href={link.link} target='_blank' className='projectDialog_icon'>{link.icon}</a>
                    ))}
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default Portfolio
