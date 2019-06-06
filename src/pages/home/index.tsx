import * as React from "react";
import { Button, DatePicker } from "antd";
import ajaxRequest from "../../libs/ajaxRequest";

export default class Home extends React.PureComponent {
  componentDidMount() {
    ajaxRequest.request({
      method: "get",
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
