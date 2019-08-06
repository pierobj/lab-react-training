import React from 'react'


function Greetings(props) {
  switch (props.lang) {
    case "de":
    return (<p>Hallo {props.children}</p>) 
    break;
    case "en":
    return (<p>Hello {props.children}</p>)
    break;
    case "es":
    return (<p>Hola {props.children}</p>)
    break;
    case "fr":
    return (<p>Bonjour {props.children}</p>)
    break;
    default:
    break;
  }

}

export default Greetings;