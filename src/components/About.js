import React from 'react';
import {Grid, Container, Image, Header} from 'semantic-ui-react';
import Profile from '../assets/photos/Colorado.jpg'

const About = () => (
  <Grid centered stackable>
    <Grid.Column width={6}>
      <Image src={Profile} size='large' />
    </Grid.Column>
    <Grid.Column width={6}>
      <Container fluid>
        <Header as='h2'>
          Hello!
        </Header>
        Born in the south, raised in the mid-west. I consider Lawrence, Kansas home. I attended the University of Kansas where I obtained my degree in psychology.<br /><br />
        My passion for Leadership, mentoring and teaching surfaced during my collegian career. My passion for leading others and affecting systemic change grew as I explored the world of education. I have found a calling in being an agent for change and an advocate for justice.<br /><br />
        I truly believe that the opportunity gap in education is the most pressing social justice issue of our time. Closing that gap will take extraordinary people doing incredible work everyday to change students'​ life paths for the better. By opening the doors of college and choice, communities are transformed and the cycle of poverty is interrupted.<br /><br />
        As we continue to see the integration of technology in our daily lives, there is an ever growing need for conversations centered around equity and access. I am driven to join the developer community so that I might play a role in facilitating those conversations. Ultimately, I wish to enter the AI and ML R&D space to ensure our future technologies do not fall prey to our historical biases.
      </Container>
    </Grid.Column>
  </Grid>
)
export default About