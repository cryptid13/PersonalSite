import '../common.css';
import logo from '../../images/BlackLogoNoBackground.png'

const logoAlt = 'A solid black wizard holding a staff in one hand and summoning an object with the other';

function Home() {
  return(
    <div className='main-component-content'>
        <img src={logo} alt={logoAlt}/>
        <h1>Welcome!</h1>
        <div>
            <p>This is the online home for John MacGregor, the software professional who resides in Ohio, USA.</p>
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
                <li><a tabIndex={0} href='https://github.com/jdmac020/john-macgregor'>A living example of my abilities</a></li>
            </ul>
            <p>My intention is to provide an easy way for you to learn about me and what I can bring to the table, without a lot of hassle.</p>
            <p>If you have any questions after poking around, don't hesitate to reach out to me <a href='mailto:john.macgregor@john-macgregor.dev'>via my email</a>.</p>
        </div>
    </div>
  );
}

export default Home;