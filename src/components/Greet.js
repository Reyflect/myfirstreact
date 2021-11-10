import Message from "./Message"

function Greet(props){
    return (
    <div>
      <h1>Hello {props.name} {"aka " + props.heroname}</h1>
        {props.children}
    </div>
    )
}
/*
other way to write it
const Greet = () =>{
    return <h1>Hello Rey!</h1>
}

props means properties
const Greet = (props) =>{
    return <h1>Hello Rey!</h1>
}
*/

export default Greet