import './index.css';

function App() {  
  const fName = "SDS";
  const lang = <ul className='heading'>
    <li>CSS</li>
    <li>HTML</li>
    <li>JAVA</li>
    <li>PYTHON</li>
  </ul>
  const myMethod = (f,m,l)=>{
    return `${f} ${m} ${l}`
  }
  const arr =["Apple","Grapes","Banana"];
  return (  
    <>
    <h1 className='heading'>Hello ReactJs</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Saepe asperiores quia facilis nesciunt consequuntur itaque, 
       quisquam doloremque, incidunt porro tenetur vitae, cum earum!
        Perferendis reprehenderit ducimus quidem, error architecto fugit!</p>
      <p>Programming Languages</p>
      {lang}
      <br />
      <hr />
      <p>{fName}</p>
      <p className='heading'>{myMethod("Sahan","Dhanujaya","Ekanayaka")}</p>
      <p>{fName} likes eat {arr[0]}
      </p>
    </>
  )
}

export default App
