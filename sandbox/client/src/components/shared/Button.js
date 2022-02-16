// button.js

function Button({ rest: { btnText, btnBckColor, handleIncirement } }) {
     return (
          <div
               onClick={handleIncirement}

               style={{
                    backgroundColor: btnBckColor,
                    width: '160px',
                    padding: '8px',
                    margin: '6px',
                    borderRadius: '4px',
                    cursor: 'pointer'
               }}>
               {btnText}
          </div>
     )
}

// exporting at the end of the file 
export default Button;