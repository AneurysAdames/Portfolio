import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <div>
        <div style={styles.footer}>
        </div>
        <Menu borderless>
          <Link to='/profile'>
            <Menu.Item name='LinkedIn' />
          </Link>
          <Link to='/profile'>
            <Menu.Item name='Instagram' />
          </Link>
          <Link to='/profile'>
            <Menu.Item name='GitHub' />
          </Link>
        </Menu>
      </div>
    );
  }
}

const styles = {
  footer: {
    height: '200px',
  }
}

export default withRouter(Footer);