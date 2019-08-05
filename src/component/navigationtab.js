import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from './slider';
import BrainImage from '../images/human-brain.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export  function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="HOME" {...a11yProps(0)} />
          <Tab label="ABOUT US" {...a11yProps(1)} />
          <Tab label="MIDBRAIN ACTIVATION" {...a11yProps(2)} />
          <Tab label="GALLERY" {...a11yProps(3)} />
          {/* <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Slider></Slider>
      <section>
	<div class="page-title">	
	<div class="container1">		
		<div class="row1">					
			<div class="col-md-6 col-xs-12">				
				<h2>About Midbrain Activation</h2>
			</div>
			<div class="col-md-6 col-xs-12 text-center">
				
			</div>	
		</div>
		</div>	
	</div>	
</section>
      <section id="content">
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<p>Midbrain activation training is one that is able to activate the brain waves called alpha-theta in a child, where these waves are able to activate the super intuition, and this is directly proven. What makes it interesting, exciting is to make the child Read, Write, Paint and do some activities with his/her eyes closed. </p>
				<p>The children are able to read and do anything with eyes closed, such as identifying a card, color, reading a newspaper’s headline, identifying something inside a closed box identifying something behind a wall, walking/cycling/ shooting with eyes closed, playing games on a  PC with eyes closed, etc.</p>
				<p>Midbrain Activation or ESP Enhancement Programme has recently been spreading well all across the world. Generally speaking, the countries already conducting brain activation are: Japan, India, Singapore, Russia, Tibet, Malaysia, Indonesia, Ceylon, Australia, Thailand, China, Hongkong, and many other countries to follow. Japan has in fact conducted the research for 40 years. other countries all apply scientific method (with technology). </p>				

			</div>
			<div class="col-md-4">
				<img src={BrainImage} class="img-responsive" alt="human-brain"/>
			</div>		
		</div>
		<div class="row">
			<div class="col-md-12">
				<h2>Human Brain</h2>
			</div>	
		</div>
		<div class="row">
			<div class="col-md-12">
				<p>According to the scientists’ reviews, man only incorporates less than 10% of his brain capacity. This shows how awesome a human can be, if it’s utilized more. Although man only uses less than 10% of his brain’s ability, we can witness the created human cultures that are really extraordinary. You would surely agree if I said that as era changes from time to time and through centuries, it needs even more sophisticated human brains, since the challenges will be more difficult in the future, compared to now Therefore, man needs to reinforce his brain more sophisticated than before, in order to be able to overcome the challenges.</p>
				<p>Man has as many as 1 trillion of brain cells. Compare with a bee which has only 7000 cells. With only 7000 brain cells, a bee is able to do incredible things such as establishing a very high precision house of honey, hexagonal in shape, where they can store maximum amount of honey with minimum materials. Many of our mathematicians are astonished by the bee`s capability. So, if we compare with a bee which has only 7000 brain cells, a Man with 1 trillion brain cells shall accordingly be able to develop his brain’s capability more awesome. Do you know that 1 brain cell of a man has a power capable to beat any most sophisticated computer?! </p>
		
			</div>			
		</div>
		<div class="row">
			<div class="col-md-12">
				<h2>Human Brain Wave</h2>
				<ul>
					<li><strong>Gamma:</strong> Ideas, language and memory processing, and learning.</li>
					<li><strong>Beeta:</strong> Alert,busy,active. Most adult in beta waves.</li>
					<li><strong>Alpha:</strong> Relax (access intuition/genius condition/brain optimum).</li>
					<li><strong>Beeta:</strong> Deep meditation (almost sleep). Often feel spiritual experiences.</li>
					<li><strong>Delta:</strong> Sleep.</li>
				</ul>	
			</div>	
		</div>	
		<div class="row">
			<div class="col-md-12">
				<div class="well">
					<h1>Genius condition doesn’t refer to Intelligent Quotient  only  but also Emotional Quotient , Creativity Quotient  and Spiritual Quotient. </h1>
				</div>	
			</div>	
		</div>
				
			
	</div>
</section>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}