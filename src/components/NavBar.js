import React, {Component} from 'react';
import {Menu, Grid} from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';

class NavBar extends Component {
  rightNavs = () => {
    return (
      <Nav stackable pointing secondary>
        <Link to='/'>
          <Menu.Item name='Home' />
        </Link>
        <Link to='/about'>
          <Menu.Item name='About' />
        </Link>
        <Link to='/experience'>
          <Menu.Item name='Experience' />
        </Link>
        <Link to='/portfolio'>
          <Menu.Item name='Portfolio' />
        </Link>
        <Link to='/contact'>
          <Menu.Item name='Contact' />
        </Link>
      </Nav>

    )

  }


  render() {
    return (
      <Grid centered>
        <Grid.Row centered>
          <Center textAlign='center' width={16}>
            {this.rightNavs()}
          </Center>
        </Grid.Row>
      </Grid>
    );
  }
}

const Center = styled(Grid.Column) `
  display: flex !important;
  justify-content: center !important;
  width: 100% !important;
`

const Nav = styled(Menu) `
  display: flex !important;
  justify-content: space-around !important;
  width: 80% !important;
  color: #333;
    font-family: 'Lato', sans-serif;
    font-size: 11px;
    font-weight: 700;
    line-height: 19px;
`

export default withRouter(NavBar);