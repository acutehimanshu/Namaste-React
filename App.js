import React from 'react';
import ReactDOM from 'react-dom/client';
// const heading = React.createElement('h1', {"id":"heading"}, "Hello world with React!");
/*const parent = React.createElement(
    'div',
    {
        id: "parent"
    },
    React.createElement(
        'div',
        {
            id:'child'
        },
        [
            React.createElement(
                'h1',
                {},
                "This is h1 tag"
            ),
            React.createElement(
                'h2',
                {},
                "This is h2 tag"
            )
        ]
    )  
);*/
// component
const Title = () => (
    <h1 className='head'>Hello World</h1>
)

const elem = <span>Yes. </span>;
// element
const title = (
    <h1 className='head'>Hello World , {elem}</h1>
)

const HeadingComponent = function(){
    return (<div id='container'>
        {title}
        <h2 className='heading'>Example of Component compositions</h2>
    </div>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
