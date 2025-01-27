


const parent=React.createElement("div",{id:'parent'},
    React.createElement("div",
        {id:"child"},
        React.createElement("h1",{},"I am h1 tag"))
)


console.log(parent)


// const heading=React.createElement("h1",{
//     id:'heading',xyz:'abc'
// },"Hello World from React!!!");
// console.log(heading)//object
const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);