
const numbers = [1, 2, 3, 4, 5];

// the scope is different
// reusability
// encapsulation
const listItems = numbers.map((number) =>
     <li key={number.toString()}>
          {number}
     </li>
);

function List() {
     // const listItems = numbers.map((number) =>
     //      <li key={number.toString()}>
     //           {number}
     //      </li>
     // ); // every time this component gets renderd this variable and HOAM map needs to be declared, written to memory, hoisted, ... etc

     return (
          <ul>
               {listItems}
          </ul>
     )
}

export default List;