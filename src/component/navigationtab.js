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

export function ScrollableTabsButtonAuto() {
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
      <Slider></Slider>
      <TabPanel value={value} index={0}>
     

        <div className="theme-content false" itemprop="mainEntityOfPage">

          <div data-mk-stretch-content="true" className="wpb_row vc_row vc_row-fluid  mk-fullwidth-false  attched-false     js-master-row  mk-grid mk-in-viewport">

            <div className="vc_col-sm-8 wpb_column column_container   _ height-full">
              <h2 style={{ textAlign: "left", fontFamily: "Abril Fatface", fontWeight: "1000", fontStyle: "normal" }}
                className="vc_custom_heading">MID BRAIN ACTIVATION (5-15 YEAR)</h2>	<div className=" vc_custom_1545978429539">

                <div id="text-block-3" className="mk-text-block   ">


                  <p><strong>What is Mid Brain?</strong><strong>_</strong></p>
                  <p>Midbrain is the control device for the left and right brain. It is also the bridge and a key to open the subconscious. Midbrain activation awakens the cerebrum’s potential power by highly effective methods to boost memory, reversal of stress, absorbing power and induction force and enable mental strength and so on. Ultimately this strengthened mental ability helps perform better academically.</p>
                  <p><strong><em>It is about your child’s path to Genius</em></strong></p>
                  <p><strong>A Genius is a person with exceptional Intellectual ability, with dazzling skills, air and natural talent. Your child can now have the capability to function in this realm by activating the mid brain functionality</strong></p>
                  <p><strong>WHY MIDBRAIN</strong><strong>:-</strong></p>
                  <p>Mid brain is between left and right brain dominance for the device, the bridge is also a key to open the subconscious, between the dominant, if midbrain can be inspired, that can balance each other that is left and right brain communication inside and outside, high-quality guide to the logical left brain and images of memory to the right brain and ultimately benefit from both the hemisphere.</p>
                  <p>As per united states current biology magazine, in articles of may 2010 issue of scientific American, <strong>professor Dejene Stewart </strong>entire experiment’s research development once more in the article.</p>
                  <p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MIDBRAIN activation leads to the function of the third eye, children are able to see things blindfolded, to let the humanity have “thprecisely pineal body function result pineal imagination can be turned into a nerve impulse reaches the hypothalamus. Then, these signals passes through the nerve into the retina, the retina giving rise to a virtual image and at the same time, the brain’s visual cortex of the image passes in the form of nerve impulses to continue to generate awareness</em></p>

                  <div className="clearboth"></div>
                </div>

              </div>
              <div className=" vc_custom_1545978454242">

                <div id="text-block-4" className="mk-text-block   ">


                  <p><strong>BENEFIT OF ACTIVATING THE MINDBRAIN</strong></p>
                  <p>After attending the workshop, all children will have different degrees of improvement in the followings.</p>
                  <ul>
                    <li>Blind Folded activity like recognize Color, Number, Shapes, Reading – Book, Newspaper, Currency Notes, Cycling and Walking.</li>
                    <li>Memory enhancement</li>
                    <li>Concentration enhancement</li>
                    <li>Confidence boosting</li>
                    <li>Creativity enhancement</li>
                    <li>Emotion management</li>
                    <li>Awaken the sub conscious mind</li>
                    <li>Creativity Enhancement</li>
                    <li>Sport Excellence</li>
                    <li>Superb Intuition</li>
                    <li>Super IQ</li>
                    <li>Left Right Brain Balancing</li>
                    <li>Stronger Connections in Motor Regions (Fine tuning of Motor skills)</li>
                    <li>More Energy and Enthusiasm</li>
                    <li>Interest Development</li>
                    <li>Mind Body Synchronization</li>
                    <li>Joyful and confident personality</li>
                  </ul>
                  <p>Better Academic Growth and much more….</p>

                  <div className="clearboth"></div>
                </div>

              </div>
              <div className=" vc_custom_1545978507935">

                <div id="text-block-5" className="mk-text-block   ">


                  <p><strong>HOW:-</strong></p>
                  <p>Brain stimulation training is one that is able to activate the brain waves called alpha-theta in a child, where these waves are able to activate the super intuition, and this is directly proven.</p>
                  <p>The children are able to read, guess anything with eyes closed, such as guessing a card, color, reading a newspaper’s headlines, guessing something inside a closed box, guessing something behind a wall, walking/cycling/shooting with eyes closed etc.</p>

                  <div className="clearboth"></div>
                </div>

              </div>
              <div className=" vc_custom_1545977985150">

                <div id="text-block-6" className="mk-text-block   ">


                  <p><strong>FOR WHOM</strong><strong>:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong></p>
                  <p>The ideal age for the midbrain activation training for the children is 6 years old to 16 years old because they are open to absorb new things and also can easily adapt to new ways of learning</p>

                  <div className="clearboth"></div>
                </div>

              </div>
              <div className=" vc_custom_1545977998017">

                <div id="text-block-7" className="mk-text-block   ">


                  <p><strong>METHODOLOGY</strong><strong>:-</strong></p>
                  <p>Through plays and fun, breathing exercise, brain gym, brain exercise, visualization technique, concentration exercise, your kids’ brain will be more relaxed, and feel more secured with the environment they are in. under this excellence state they respond better to our proprietary sound wave.</p>

                  <div className="clearboth"></div>
                </div>

              </div>
            </div>




          </div>
        </div>
										
      </TabPanel>
    <TabPanel value={value} index={1}>
    
    <div class="middle-align">
  
        <div class="site-main sitefull">
							
<article id="post-71" class="post-71 page type-page status-publish hentry">
	<header class="entry-header">
		<h1 class="entry-title">About Us</h1>
	</header>

	<div class="entry-content">
		{/* <p><img class="alignright wp-image-292 " src="http://dmitknowyourtalent.com/wp-content/uploads/2018/10/img13-1-300x225.jpg" alt="" width="379" height="284" srcset="http://dmitknowyourtalent.com/wp-content/uploads/2018/10/img13-1-300x225.jpg 300w, http://dmitknowyourtalent.com/wp-content/uploads/2018/10/img13-1.jpg 600w" sizes="(max-width: 379px) 100vw, 379px"></p> */}
<p style={{textAlign: "center"}}>
</p><h2>Company Profile</h2>
<p></p>
<p>We have established in 2019 in Jhunjhunu. We started this company with a vision and commitment for excellence. We help to value addition to right parenting and their child by placing right profession for their child’s inborn talent.</p>
<p>Nearly eight years of experience, we believe we are serving the best in the market as far as career guidance and counseling is concerned.</p>
<p>Nearly perfect accuracy rate of the report is ensured. We give follow up and free lifetime counseling to every client. A complete self help guide for the child and parents for life.</p>
<p>Not only this we have made some more programs to understand children, such as:</p>
<ul>
<li>Intelligence Building Program</li>
<li>Advanced Brain Synchronization</li>
<li>Soft Skill Development</li>
<li>Personality Development</li>
<li>Image Building Consultants</li>

</ul>
			</div>
	</article>							        </div>
        <div class="clear"></div>
    </div>
      </TabPanel>
    <TabPanel value={value} index={2}>
    
      <section>
        <div class="page-title">
          <div class="container1">
            <div class="row2">
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
          <div class="row1">
            <div class="col-md-8">
              <p>Midbrain activation training is one that is able to activate the brain waves called alpha-theta in a child, where these waves are able to activate the super intuition, and this is directly proven. What makes it interesting, exciting is to make the child Read, Write, Paint and do some activities with his/her eyes closed. </p>
              <p>The children are able to read and do anything with eyes closed, such as identifying a card, color, reading a newspaper’s headline, identifying something inside a closed box identifying something behind a wall, walking/cycling/ shooting with eyes closed, playing games on a  PC with eyes closed, etc.</p>
              <p>Midbrain Activation or ESP Enhancement Programme has recently been spreading well all across the world. Generally speaking, the countries already conducting brain activation are: Japan, India, Singapore, Russia, Tibet, Malaysia, Indonesia, Ceylon, Australia, Thailand, China, Hongkong, and many other countries to follow. Japan has in fact conducted the research for 40 years. other countries all apply scientific method (with technology). </p>

            </div>
            <div class="col-md-4">
              <img src={BrainImage} class="img-responsive" alt="human-brain" />
            </div>
          </div>
          
          <div class="row1">
            <div class="col-md-12">
            <h2>Human Brain</h2>
              <p>According to the scientists’ reviews, man only incorporates less than 10% of his brain capacity. This shows how awesome a human can be, if it’s utilized more. Although man only uses less than 10% of his brain’s ability, we can witness the created human cultures that are really extraordinary. You would surely agree if I said that as era changes from time to time and through centuries, it needs even more sophisticated human brains, since the challenges will be more difficult in the future, compared to now Therefore, man needs to reinforce his brain more sophisticated than before, in order to be able to overcome the challenges.</p>
              <p>Man has as many as 1 trillion of brain cells. Compare with a bee which has only 7000 cells. With only 7000 brain cells, a bee is able to do incredible things such as establishing a very high precision house of honey, hexagonal in shape, where they can store maximum amount of honey with minimum materials. Many of our mathematicians are astonished by the bee`s capability. So, if we compare with a bee which has only 7000 brain cells, a Man with 1 trillion brain cells shall accordingly be able to develop his brain’s capability more awesome. Do you know that 1 brain cell of a man has a power capable to beat any most sophisticated computer?! </p>

            </div>
          </div>
          <div class="row1">
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



        </div>
      </section>
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
    </div >
  );
}