import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

import "./Style-Article6-Main.css"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: '1px solid rgba(0, 0, 0, .25)'
}));

export default function Article6Main() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    let BarAccordion = document.querySelectorAll('.css-1yplmd7-MuiButtonBase-root-MuiAccordionSummary-root')
    let ArrowRotatepath = document.querySelectorAll(".ArrowRotatepath")
    let arrow = document.querySelectorAll('.svg-Article6-Main')

    // console.log(arrow)
    // console.log(BarAccordion)

    for(let x=0 ; x<BarAccordion.length ; x++){
      BarAccordion[x].addEventListener('click',()=>{
        ArrowRotatepath[x].classList.toggle('ArrowColor');
        arrow[x].classList.toggle('ArrowRotate')
      })
    }  
  });

  return (
    <div className='container-Article6-Main'>
    
      <h1 className="h1-Article6-Main">Frequently Asked Questions</h1>
      <p className="p-head-Article6-Main">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>

      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component="div" className='title-Article6-Main'><p className='p-title-Article6-Main'>What is Bookmark?</p><svg className='svg-Article6-Main'  xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path className='ArrowRotatepath' fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8" /></svg> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div"><p className='p-Article6-Main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
          justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography component="div" className='title-Article6-Main'><p className='p-title-Article6-Main'>How can I request a new browser?</p><svg className='svg-Article6-Main'  xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path className='ArrowRotatepath' fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8" /></svg> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div"><p className='p-Article6-Main'>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
          Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
          ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
          Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography component="div" className='title-Article6-Main'><p className='p-title-Article6-Main'>Is there a mobile app?</p><svg className='svg-Article6-Main'  xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path className='ArrowRotatepath' fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8" /> </svg> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div"><p className='p-Article6-Main'>Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
            urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
            sollicitudin ex et ultricies bibendum.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
        <Typography component="div" className='title-Article6-Main'><p className='p-title-Article6-Main'>What about other Chromium browsers?</p><svg className='svg-Article6-Main'  xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path className='ArrowRotatepath' fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8" /> </svg> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div"><p className='p-Article6-Main'>Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
            vitae neque eget nisl gravida pellentesque non ut velit.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>

    <a className="a-Article6-Main">More Info</a>

  </div>
  );
}