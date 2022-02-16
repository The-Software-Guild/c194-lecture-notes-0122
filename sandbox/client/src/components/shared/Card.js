import Button from './Button'

// if this card component has or needs state
// then state is an object or properties and values [data] for this
// specific card component
function Card({ cardBckColor, ...rest }) {
     console.log('render')
     return (
          <div style={{
               height: '200px',
               width: '260px',
               backgroundColor: cardBckColor,
               border: '2px black solid',
               margin: '8px'
          }}>
               <Button rest={rest} />
          </div>
     )
}

export default Card;