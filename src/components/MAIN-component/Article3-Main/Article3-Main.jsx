import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import "./Style-Article3-Main.css"

import tab1 from "./../../../assets/svg/illustration-features-tab-1.svg"
import tab2 from "./../../../assets/svg/illustration-features-tab-2.svg"
import tab3 from "./../../../assets/svg/illustration-features-tab-3.svg"
import { styled } from '@mui/material/styles';

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#f65859',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: 'black',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#f65859',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ mt:5 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
 
export default function Article3Main() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered TabIndicatorProps={{style: {backgroundColor: "red"}}} >
          <AntTab  sx={{ mr:7 }} label="Simple Bookmarking" {...a11yProps(0)} />
          <AntTab  sx={{ mx:7 }} label="Speedy Searching" {...a11yProps(1)} />
          <AntTab sx={{ mx:7 }} label="Easy Sharing" {...a11yProps(2)} />
        </Tabs>
      </Box>  
      <TabPanel value={value} index={0}>

        <article className='ArticleContainer-Article3-Main'>
          <img src={tab1} className="img-Article3-Main" alt="" />

          <div className='div-TEXT-Article3-Main'>
            <h1 className='h1-Article3-Main'>Bookmark in one click</h1>          
            <p className='p-Article3-Main'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
            <a className='a-Article3-Main'>More Info</a>
          </div> 
        </article>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <article className='ArticleContainer-Article3-Main'>
            <img src={tab2} className="img-Article3-Main" alt="" />

            <div className='div-TEXT-Article3-Main'>
              <h1 className='h1-Article3-Main'>Intelligent search</h1>
              <p className='p-Article3-Main'>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
              <a className='a-Article3-Main'>More Info</a>
            </div>
        </article>
      </TabPanel>
      
      <TabPanel value={value} index={2}>
          <article className='ArticleContainer-Article3-Main'>
            <img src={tab3} className="img-Article3-Main" alt="" />

            <div className='div-TEXT-Article3-Main'>
              <h1 className='h1-Article3-Main'>Share your bookmarks</h1>
              <p className='p-Article3-Main'>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
              <a className='a-Article3-Main'>More Info</a>
            </div>          
        </article>
      </TabPanel>
    </Box>
  );
}