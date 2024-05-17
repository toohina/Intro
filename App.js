const mainDiv=React.createElement("div",{},[
    React.createElement('h1',{id:"heading", style:{color:"red"}},"Introduction to React"),
    React.createElement('p',{id:"into-para"},"Welcome to the React app made from CDN and not npx create-react-app command")
])


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(mainDiv)