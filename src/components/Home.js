import React from 'react';
import {Grid, Image, Segment} from 'semantic-ui-react';
import Google from '../assets/photos/google.png';
import Voice from '../assets/photos/Voice.png';
import Typer from './Typer';
import styled from 'styled-components';

const Home = () => (
  <Grid centered>
    <Grid.Column width={5}>
      <Grid.Row>
        <Image src={Google} />
      </Grid.Row>
      <Grid.Row>
        <SearchBar>
          <Typer />
          <Mic src={Voice} />
        </SearchBar>
      </Grid.Row>
    </Grid.Column>
  </Grid>
)

const SearchBar = styled(Segment) `
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center !important;
`
const Mic = styled.img`
  height: 35px;

`
export default Home