import * as React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../../redux/actions/counter'

type Props = {
  count: any,
  increment: any,
  decrement: any,
  reset: any
}

type State = {

}

class Counter extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>当前计数为{this.props.count}</div>
        <button onClick={() => this.props.increment()}>自增
        </button>
        <button onClick={() => this.props.decrement()}>自减
        </button>
        <button onClick={() => this.props.reset()}>重置
        </button>
      </div>
    )
  }
}
export default connect((state) => state, dispatch => ({
    increment: () => {
        dispatch(increment())
    },
    decrement: () => {
        dispatch(decrement())
    },
    reset: () => {
        dispatch(reset())
    }
}))(Counter);