import React from "react";
import ReactDOM from 'react-dom';
import './index.css'
// component
// state
// lifecycle
// ui

class App extends React.Component{
    render() {
        return (
            <div>
                Hello nandini!
            </div>
        ) 
    }
}

ReactDOM.render(
    //reactDom needs to argument as below
    // 1. React.element
    // 2. where to render to the element to
    <App/>,
    document.getElementById('app')
)
