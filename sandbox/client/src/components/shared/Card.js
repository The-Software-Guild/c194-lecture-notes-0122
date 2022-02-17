import Button from './Button'

function Card({ cardBckColor, ...rest }) {
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