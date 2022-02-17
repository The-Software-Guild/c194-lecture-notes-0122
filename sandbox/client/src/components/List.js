
const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number) =>
     <li key={number.toString()}>
          {number}
     </li>
);

function List() {

     return (
          <ul>
               {listItems}
          </ul>
     )
}

export default List;