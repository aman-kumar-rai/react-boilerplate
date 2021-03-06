import React from 'react';
import { hot } from 'react-hot-loader';
const Warning = React.lazy(() => import('./Warning.js'));
// import 'styles.css';

class App extends React.Component {
  state = {
    value: 0
  };

  render() {
    return (
      <React.Fragment>
        <p className={this.state.value > 5 ? 'danger' : null}>
          Count: {this.state.value}
        </p>
        <button
          className="btn btn-increment"
          onClick={() => {
            this.setState(state => {
              return {
                value: state.value + 1
              };
            });
          }}
        >
          +
        </button>
        <button
          className="btn btn-decrement"
          onClick={() => {
            this.setState(state => {
              return {
                value: state.value - 1
              };
            });
          }}
        >
          -
        </button>
        {this.state.value > 5 ? (
          <React.Suspense fallback="Loading...">
            <Warning />
          </React.Suspense>
        ) : null}
      </React.Fragment>
    );
  }
}

// this first call returns a function, a higher order component to be precise, and we pass our component 'App' as an argument to it...
const retFunc = hot(module);
export default retFunc(App);
