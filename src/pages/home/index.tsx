import * as React from "react";
import { Button, DatePicker } from "antd";
import ajaxRequest from "../../libs/ajaxRequest";

export default class Home extends React.PureComponent {
  componentDidMount() {
    console.log("componentDidMount");
    ajaxRequest.request({
      method: "post",
      url: "/shop/query"
    });
  }

  render() {
    return (
      <div>
        this is home~
        <Button type="primary">Hello</Button>
        <div>
          <DatePicker />
        </div>
      </div>
    );
  }
}
