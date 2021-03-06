import React, {Component} from 'react';
import {Form, Grid, Divider} from 'semantic-ui-react';
import Title from './StyledHeader';
import {typeOptions} from '../helpers/options';

class Contact extends Component {
  state = {first: '', last: '', email: '', subject: '', content: ''}

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value});
  };
  handleSelect = (e) => {
    this.setState({subject: e.target.innerText})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const email = {...this.state};
    console.log(email)
  };

  render() {
    const {first, last, email, content} = this.state
    return (
      <Grid centered>
        <Divider hidden />
        <Grid.Row>
          <Title textAlign='center'>Contact</Title>
        </Grid.Row>
        <Grid.Column width={8}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                required
                label='First name'
                placeholder='First name'
                name='first'
                value={first}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                required
                label='Last name'
                placeholder='Last name'
                name='last'
                value={last}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Input
              fluid
              required
              label='Email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            <Form.Select
              required
              name='subject'
              label='Subject'
              placeholder='Select...'
              options={typeOptions}
              onChange={this.handleSelect}
            />
            <Form.TextArea
              required
              label='Message'
              placeholder='Add Message Content...'
              name='content'
              value={content}
              onChange={this.handleChange}
            />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}


export default Contact