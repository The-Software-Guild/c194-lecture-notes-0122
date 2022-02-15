// button.js
import Rest from './Rest'

// object destructuring (pull out property values and instantly assign them to local variables within a specific scope)

// rest parameters (spread operator)
function Button({color, innerText, ...rest}) {
     return (
          <div style={{ color: color }}>
               <div>{innerText}</div>
               <Rest restParameterExampleProp={rest}/>
          </div>
     )
}

// non es6
// function Button(props) {
//      return (
//           <div style={{ color: props.color }}>
//                {props.innerText}
//           </div>
//      )
// }

// exporting at the end of the file 
export default Button;