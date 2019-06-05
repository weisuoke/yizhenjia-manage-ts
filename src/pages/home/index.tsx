import * as React from "react";
import { Button, DatePicker } from "antd";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        this is home~
        <Button type="primary">Hello</Button>
        <div><DatePicker /></div>
      </div>
    );
  }
}
