import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";

export default class Navbar extends Component {
  state = { activeItem: "events" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.location.push("/" + name);
  };

  handleLogout = () => {
    localStorage.clear();
    this.props.location.push("/login");
  };

  componentWillReceiveProps() {
    switch (this.props.location.location.pathname) {
      case "/events":
        return this.setState({ activeItem: "events" });
      case "/my-events":
        return this.setState({ activeItem: "my-events" });
      default:
        return this.setState({ activeItem: null });
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu attached="top" tabular>
          <Menu.Item
            name="events"
            active={activeItem === "events"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="my-events"
            active={activeItem === "my-events"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Button onClick={this.handleLogout}>Logout</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
