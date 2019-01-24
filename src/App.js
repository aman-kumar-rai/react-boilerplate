import React from 'react';

// lets create a counter example to test the class-properties plugin...
class App extends React.Component{
    
    state = {
        value: 0
    }


    render(){

        return (
            <React.Fragment>
                <p>{this.state.value}</p>
                <button onClick={() => {

                    this.setState((state) => {
                        return {
                            value: state.value + 1
                        }
                    })
                }}>
                    +
                </button>
                <button onClick={() => {

                    this.setState((state) => {
                        return {
                            value: state.value - 1
                        }
                    })
                }}>
                    -
                </button>
            </React.Fragment>
        );
        
    }


}
export default App;