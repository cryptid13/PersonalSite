import '../common.css';
import logo from '../../images/BlackLogoNoBackground.png'

const logoAlt = 'A solid black wizard holding a staff in one hand and summoning an object with the other';

function Home() {
  return(
    <div className='main-component-content'>
        <img src={logo} alt={logoAlt}/>
        <h1>Welcome!</h1>
        <div>
            <p>Sam's Page</p>
            <p>The goal of this site is to provide:</p>
            <ul>
                <li><a tabIndex={0} href='/about'> A short bio</a></li>
                <li><a tabIndex={0} href='/links'>Links to</a>
                  <ul>
                    <li>Writings</li>
                    <li>Social media</li>
                    <li>My public body of work</li>
                  </ul>
                </li>
                <li><a tabIndex={0} href='https://github.com/cryptid13'>GIT</a></li>
            </ul>
            <p>INFO</p>
            <p>INFO<a href='mailto:samgio13@gmail.com'>via my email</a>.</p>
        </div>
    </div>
  );
}

export default Home;