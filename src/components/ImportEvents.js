import React from "react";
import { connect } from "react-redux";
import { importEvents } from "../actions/index";

class ImportEvents extends React.Component(props) {
  constructor() {
    this.state = {
      url: ""
    };
  }

  handleChange = event => {
    this.setState({
      url: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.importEvents(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>URL</label>
          <input placeholder="Paste URL here" onChange={this.handleChange} />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    importEvents: () => dispatch(importEvents())
  }
};

export default connect(null, mapDispatchToProps)(ImportEvents);
