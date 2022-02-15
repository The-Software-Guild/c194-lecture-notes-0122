import Button from './shared/Button'

// component routing logic
function App() {
  // create props to be passed down to your children here
  return (
    <div>
      <Button
        selected={false}
        moreProps={4}
        color='lightCoral' 
        innerText='hello world' />
      <Button
        selected={true}
        moreProps={5}
        color='lightBlue'  
        innerText='goodbye world'/>
      <Button
        selected={false}
        moreProps={6}
        color='lightYellow' 
        innerText='this is button text'/>
      <Button
        color='lightGreen'  
        innerText='submit'/>
      <Button 
        innerText='cancel'/>
    </div>
  );
}

export default App;
