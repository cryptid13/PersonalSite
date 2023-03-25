import { Link } from 'react-router-dom';
import './app.css';

const year = new Date().getFullYear();

function App({ child }) {
  return (
      <div className='app-grid-container'>
        <div className='left-gutter'></div>
        <header>
          <Link tabIndex={0} to='/'>Home</Link> - <Link tabIndex={0} to='/about'>About</Link> - <Link tabIndex={0} to='/links'>Links</Link>
        </header>
        <main>
          {child}
        </main>
        <footer>&copy; {year} <a tabIndex={0} href='mailto:john.macgregor@john-macgregor.dev'>Johnathan MacGregor</a></footer>
        <div className='right-gutter'></div>
      </div>
  );
}

export default App;
