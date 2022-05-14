import logo from './logo.svg';
import './App.css';

function App() {



  const blogob={
    title:'Blog title1',
    Description : 'asdawdasdawdasdasd'
  }
  return (
    <div className="App">
        <div className='BlogCard'>
      <div>
        <h3>{blogob.title}</h3>
        <p>{blogob.Description}
        </p>
      </div>
      </div>
      <div className='BlogCard'>
        <h3>{blogob.title}</h3>
        <p>{blogob.Description}
        </p>
      </div>
      <div className='BlogCard'>
        <h3>{blogob.title}</h3>
        <p>{blogob.Description}
        </p>
      </div>
    </div>
  );
}

export default App;
