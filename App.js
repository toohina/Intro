import React from 'react'
import ReactDOM from 'react-dom/client'

const mainDiv=React.createElement("div",{},[
    React.createElement('h1',{id:"heading", style:{color:"red"}},"Introduction to React"),
    React.createElement('p',{id:"into-para"},"Welcome to the React app made from CDN and not npx create-react-app command"),
    React.createElement('p',{id:"next"},"Now we removed CDN links and installed react and reactDOM through npm install"),
    <h2>This is JSX heading</h2>,
    <p>JSX is a html-like or xml-like syntax, that is transpiled by Babel.</p>,
    <p>Babel converts JSX to react's createElement.</p>,
    <p>React.createElement creates a Javascript object which is rendered as an HTML element on the browser.</p>,
    <h2>Javascript Engine</h2>,
    (<p>JavaScript is a scripting language and is not directly understood by computer but the 
        browsers have inbuilt JavaScript engine which help them to understand and interpret JavaScript codes. </p>),
    <p>ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript</p>
])

const title=( <h4 id="react-element">
    This is a react element. It is an JS object. It will be converted to React.createElement. react element is NOT HTML element.
</h4>
)


//React Functional component
const FuncHeading1=() => (<p>This is a react functional component. It returns a react element</p>)
//is same as
const FuncHeading2=() => {
    return (
    <p>This is a react functional component. It returns a react element</p>
    )
}
//is same as
const FuncHeading3=function(){
return (
<p>This is a react functional component. It returns a react element</p>
)
}

const num=12345

const Main=()=>(
    <div>
        {title}
        <h5>This is JSX code for react element</h5>
        <FuncHeading1/>
        {FuncHeading1()}
        <p>{100+200}</p>
        <p>{num}</p>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(mainDiv)
// root.render(title)
// root.render(<FuncHeading3/>)
root.render(<Main/>)