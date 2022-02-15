
// not descturing these from props object
// actually destructuring them from the props.restParameterExampleProp object
// {nestedObjectName: {nameOfPropToBeDestructured, nameOfPropToBeDestructured2}}
function Rest({ restParameterExampleProp: { moreProps, selected } }) {
     if (selected) {
          return (
               <>
                    {moreProps}
               </>
          )
     } else {
          return <div>this is false</div>
     }
}

export default Rest;