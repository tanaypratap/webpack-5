import "./App.css";

const App = ({ name, age }) => {
    return `
    <h2> Welcome, ${name} </h2>
    <p> At ${age}, you're quite fast! </p>
    `
}

export default App;