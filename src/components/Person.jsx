export default function Person({name, birth_year, eye_color}){
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Born: {birth_year}</h3>
            <h3>Eye Color: {eye_color}</h3>
        </div>
    )
}