export default function Starship({name, model, starship_class, length}){
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Model: {model}</h3>
            <h3>Class: {starship_class}</h3>
            <h3>Length: {length} meters</h3>
        </div>
    )
}