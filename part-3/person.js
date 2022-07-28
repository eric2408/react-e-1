const Person = (props) =>{
    const age = props.age >= 18
    return(
        <div>
            <p>
                Learn some information about this person:
            </p>
            <span>{props.name.slice(0,6)}</span>
            <ul>
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
            <h3>{props.age ? "please go vote!" : "you must be 18"}</h3>
        </div>
    )
}