// import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import { YouTube } from '@material-ui/icons';
import LanguageIcon from '@material-ui/icons/Language';
import Facebook from '../assets/images/Facebook.png'
import Christmas from '../assets/images/Christmas.png'
import Google from '../assets/images/Google.png'
import Covid from '../assets/images/Covid-19.png'
import Diwali from '../assets/images/Dewali.png'
import Netflix from '../assets/images/Netflix.png'



export default {
    name: 'Asif Malik',
    title: 'Full Stack Web Developer',
    
    birthday: '15-Dec-1997',
    email: 'asif56175@gmail.com',
    address: '827/546 Amba vihar Muzaffar nagar',
    phone: '9528263200',

    socials: {
        // facebook: {
        //     link: 'vbdbvhdbzvhavshv',
        //     text: 'text',
        //     icon: <FacebookIcon />,
        // },
        // Twitter: {
        //     link: 'vbdbvhdbzvhavshv',
        //     text: 'text',
        //     icon: <TwitterIcon />,
        // },
        LinkedIn: {
            link: 'https://www.linkedin.com/in/asifmalik56175/',
            text: 'MyLinkedIn',
            icon: <LinkedInIcon />,
        },
        Github: {
            link: 'https://github.com/Asif56',
            text: 'MyGithub',
            icon: <GitHubIcon />,
        },


    },
    about: "Enthusiastic Web Developer eager to contribute to team success through hard work, attention to detail.A clear understanding of ReactJs and NodeJs. Motivated to learn, grow and excel in learning new things.",
    
     experiance:[
        {
            title:'Yelpcamp',
            date:'08/2018 - 09/2018',
            description:"Created the YelpCamp website as part of code along project for Udemy Web Developer Bootcamp using Node.js, Express, MongoDB, Bootstrap, and HTML/CSS/JavaScript.Utilized Passport strategy to implement for user authentication and authorization."
        },   
        {
            title:'Octavia',

            date:'05/2020 - 10/2020',
            description:"Build a website from scratch that can extract the coordinates of selected portions by user of an image using ReactJS, NodeJS, Redux.Add Role based Authentication (Admin and others), Upload and download documents to the server, Used MySql for Database Management, Visualize data on the dashboard using charts."
        },
        // {
        //     title:'vbhvn',
        //     date:'bhdfvfg',
        //     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
        // },
    ],

    education:[
        {
            title:'B.Tech',
            date:'2015-2019',
            description:"Meerut Institute of Technology, Meerut, 62.5%"
        },
        {
            title:'Intermediate',
            date:'2013-2015',
            description:"S.F.D.A.V. Public School, Muzaffarnagar, 70.8%."
        },
        {
            title:'High School,',
            date:'2011-2013',
            description:"S.F.D.A.V. Public School, Muzaffarnagar, 7.8 CGPA."
        },
    ],
    service:[
        {
            title:"Web Developement",
            description:'I have been working on web degine.',
            icon:<WebOutlinedIcon/>
        },
        {
            title:"3d-Model",
            description:'I have been working on 3d-Model to view object in 3d perspective',
            icon:<AssessmentOutlinedIcon/>
        },
        {
            title:"AWS",
            description:'I have been working on AWS cloud to deploy application on aws server',
            icon:<WebOutlinedIcon/>
        },
    ],
    skill:[
        {
            title:'FRONT-END',
            description:[
              "React.js",
              "Redux",
              "HTML",
              "CSS",
              "JavaScript",
              "Material-Ui",
              'Bootstrap'
            ],
            
        },
        {
            title:'BECK-END',
            description:[
             'Node.js',
             'Express'
             
            ],
            
        },
        {
            title:'DATABASE',
            description:[
             'MongoDB',
             'MySQL',
             'Firebase',
             
            ],
            
        },
        {
            title:'Other Skills',
            description:[
             'GSAP',
             'AWS',
             'GIT',
             'Three.js',
             'Pusher',
             'Heroku',
            ],
            
        }
    ],
    projects:[
        {
            tag:"ReactJs",
            image:`${Facebook}`,
            title:"Facebook",
            caption:'bgvgvggvg',
            description:"nvbdvbshdvhsdvg",
            links:[
                // {link:"hbvsdhbvhbdhfbvf", icon:<YouTube/>},
                {link:"https://fb-mern-50d8a.web.app/", icon:<LanguageIcon/>},
                {link:"https://github.com/Asif56/facebook", icon:<GitHubIcon/>}

            ]
        },
        {
            tag:"NodeJs",
            image:`${Facebook}`,
            title:"Facebook",
            caption:'bgvgvggvg',
            description:"nvbdvbshdvhsdvg",
            links:[
                // {link:"hbvsdhbvhbdhfbvf", icon:<YouTube/>},
                {link:"https://fb-mern-50d8a.web.app/", icon:<LanguageIcon/>},
                {link:"https://github.com/Asif56/facebook", icon:<GitHubIcon/>}

            ]
        },
        {
            tag:"ReactJs",
            image:`${Netflix}`,
            title:"Netflix",
            caption:'bgvgvggvg',
            description:"nvbdvbshdvhsdvg",
            links:[
                // {link:"hbvsdhbvhbdhfbvf", icon:<YouTube/>},
                {link:"https://.web.app/", icon:<LanguageIcon/>},
                {link:"https://github.com/Asif56/netflix", icon:<GitHubIcon/>}

            ]
        },
        // {
        //     tag:"ReactJs",
        //     image:`${Messanger}`,
        //     title:"Messanger",
        //     caption:'bgvgvggvg',
        //     description:"nvbdvbshdvhsdvg",
        //     links:[
        //         // {link:"hbvsdhbvhbdhfbvf", icon:<YouTube/>},
        //         {link:"https://fb-mern-50d8a.web.app/", icon:<LanguageIcon/>},
        //         {link:"https://github.com/Asif56/facebook", icon:<GitHubIcon/>}

        //     ]
        // },
        {
            tag:"ReactJs",
            image:`${Google}`,
            title:"google",
            caption:'bgvgvggvg',
            description:"nvbdvbshdvhsdvg",
            links:[
                // {link:"hbvsdhbvhbdhfbvf", icon:<YouTube/>},
                {link:" https://clone-73b79.web.app/", icon:<LanguageIcon/>},
                {link:"https://github.com/Asif56/google1", icon:<GitHubIcon/>}

            ]
        },
        // {
        //     tag:"ReactJs,NodeJs",
        //     image:`${Instagram}`,
        //     title:"Instagram",
        //     caption:'bgvgvggvg',

        //     description:"nvbdvbshdvhsdvg",
        //     links:[
        //         // {link:"hbvsdhbvhbdhfbvf", icon:<YouTube/>},
        //         {link:"https://insta-clone-56daf.web.app", icon:<LanguageIcon/>},
        //         {link:"https://github.com/Asif56/instagram", icon:<GitHubIcon/>}

        //     ]
        // },
        // {
        //     tag:"ReactJs,NodeJs",
        //     image:`${Tinder}`,
        //     title:"Tinder",
        //     caption:'bgvgvggvg',

        //     description:"nvbdvbshdvhsdvg",
        //     links:[
        //         // {link:"hbvsdhbvhbdhfbvf", icon:<YouTube/>},
        //         {link:"hbvsdhbvhbdhfbvf", icon:<LanguageIcon/>},
        //         {link:"https://github.com/Asif56/tinder12", icon:<GitHubIcon/>}

        //     ]
        // },
        {
            tag:"HTML,GSAP,Three.JS",
            image:`${Christmas}`,
            caption:'bgvgvggvg',
            title:"Christmas",
            description:"nvbdvbshdvhsdvg",
            links:[
                // {link:"hbvsdhbvhbdhfbvf", icon:<YouTube/>},
                {link:"https://asif56.github.io/christmasDay/", icon:<LanguageIcon/>},
                {link:"https://github.com/Asif56/christmasDay", icon:<GitHubIcon/>}

            ]
        },
       
        {
            tag:"ReactJs",
            image:`${Covid}`,
            caption:'bgvgvggvg',
            title:"covid",
            description:"nvbdvbshdvhsdvg",
            links:[
                // {link:"hbvsdhbvhbdhfbvf", icon:<YouTube/>},
                {link:"https://asif56.github.io/covid/", icon:<LanguageIcon/>},
                {link:"https://github.com/Asif56/covid", icon:<GitHubIcon/>}

            ]
        },
        {
            tag:"HTML,GSAP",
            image:`${Diwali}`,
            caption:'bgvgvggvg',
            title:"Diwali",
            description:"nvbdvbshdvhsdvg",
            links:[
                // {link:"hbvsdhbvhbdhfbvf", icon:<YouTube/>},
                {link:"https://asif56.github.io/Asif.github.io/", icon:<LanguageIcon/>},
                {link:"https://github.com/Asif56/Asif.github.io", icon:<GitHubIcon/>}

            ]
        },
    ]
};