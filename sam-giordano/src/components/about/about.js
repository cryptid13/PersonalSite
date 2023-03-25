import './about.css';
import headshot from '../../images/Headshot.jpg';

const logoAlt = 'A man with brown hair, square-rim glasses, and full brown beard with blue skies and white clouds in the background';

function About() {
    return (
        <div className='main-component-content'>
            <img id='headshot' src={headshot} alt={logoAlt}/>
            <h1>About Me</h1>
            <div>
                <h2>The Beginning</h2>
                <p>
                    The first career I remember pursuing was as a naval officer. A significant part of my high school experience was working towards 
                    an appointment to <a tabIndex={0} href='https://www.usna.edu'>Annapolis</a> -- earned my <a tabIndex={0} href='https://en.wikipedia.org/wiki/Eagle_Scout'>Eagle Scout</a>, 
                    was top ranking cadet in my <a tabIndex={0} href='https://www.seacadets.org/'>Sea Cadet</a> division, solid academics, and summer exploratory trips to Coast Guard 
                    and Navy units (including a cruise on the tallship <a tabIndex={0} href='https://www.uscga.edu/eagle/'>USCGC Eagle</a>) to see if it was the right path for me.
                </p>
                <p>
                    It was not, as it turned out, the right path for me. Instead I leveraged the experience I'd gained in the Boy Scouts and Sea Cadets in leadership and 
                    organizational theory to join the management team at a Wendy's corporate training store. The lessons from learning that business are still 
                    <a tabIndex={0} href='https://zenreveriescode.blog/2021/06/27/self-organizing-teams-are-teams-of-leaders/'> yielding dividends</a> to this day. Most of my career has 
                    been spent building on this operations leadership skillset in restaurant, retail, and warehouse settings.
                </p>
                <p>
                    I made the decision to switch careers in about five minutes. 
                </p>
                <h2>The Transition</h2>
                <p>
                    I had spent close to six months as a member of a cross-functional
                    <a tabIndex={0} href='https://www.lean.org/explore-lean/what-is-lean/'> process improvement team</a> charged with driving down the time it took a carton of goods to 
                    get through our department. After six months of effort, we'd managed to shave only half a day off our 6 day average. Then, a new 
                    supervisor took a look at one of the database queries we were using. This query gave us a report that took a lot of manual correction before processing 
                    a carton could start. After about 5 minutes and 3 lines of SQL, this man eliminated roughly 30 labor hours of effort per week. This removed bottlenecks 
                    that led to driving our 5.5 day average processing time down to 3.5 days almost overnight.
                </p>
                <p>
                    Once I saw those numbers, I knew I'd never be able to process-improve or leadership my way into the most effective improvements.
                </p>
                <p>
                    Since then, I've gone <a tabIndex={0} href='https://www.cscc.edu/'>back to school</a> and learned the basics of writing software. I've taken a series of positions 
                    that have each taught me new elements to the industry, exposed me to new concepts, and given me opportunities to hone my skills. I've embraced many of 
                    the concepts central to <a tabIndex={0} href='http://www.extremeprogramming.org/'>XP</a> (such as 
                    <a tabIndex={0} href='https://zenreveriescode.blog/2021/06/13/a-love-letter-to-automated-testing-as-a-tool-for-quality/'> test driven development</a>,
                    <a tabIndex={0} href='https://zenreveriescode.blog/2019/08/08/ci-cd-a-quick-aside/'> continuous integration and deployment</a>, pair programming), and have found much 
                    value in the principles of the <a tabIndex={0} href='https://agilemanifesto.org/'>Agile Manifesto</a>. I've built a reasonably strong understanding of C# and .NET, 
                    as well as Javascript and React.
                </p>
                <h2>The Current State</h2>
                <p>
                    Having an operations background gives me unique insight into trying to solve domain problems -- I have been the department head tasked with using a 
                    new system that doesn't actually solve any old problems and adds some fresh ones. I know how challenging it can be to fully understand a business process 
                    and how it gets accomplished. This mindset has paid of multiple times during my software career as I have sought answers to "What is the benefit for the 
                    user/business?" and "What is the problem we are trying to solve?"
                </p>
                <p>
                    I consider myself, at this point in the journey, something of an 
                    <a tabIndex={0} href='https://zenreveriescode.blog/2019/05/19/configuration-is-the-real-magic/'>apprentice wizard</a>. 
                    Writing software, in my opinion, boils down to using arcane magic words to coax sand into thinking for us. But knowing the spells of programming alone does 
                    not automatically solve problems. Not even the most powerful wizards from lore and pop culture can just point their staff or wave their wand and eliminate 
                    problems. They first must put in the hard work of understanding the situation, the context, and the possible solutions. Then comes choosing one based on 
                    numerous criteria -- and quite often, the solution does not require a single moment of true magic.
                </p>
                <h3>
                    Thank you for stopping by, and I hope my story has resonated with you!
                </h3>
            </div>
        </div>
    );
  }
  
export default About;