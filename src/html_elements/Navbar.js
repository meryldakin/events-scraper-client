import React, { Component } from "react";
import { Input, Menu, Segment, Button } from "semantic-ui-react";

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

  render() {
    console.log(this.props);
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
              <Input
                transparent
                icon={{ name: "search", link: true }}
                placeholder="Search users..."
              />
            </Menu.Item>
            <Menu.Item>
              <Button onClick={this.handleLogout}>Logout</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
