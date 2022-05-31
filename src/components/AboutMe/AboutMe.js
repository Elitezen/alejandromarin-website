import './AboutMe.scss';
import Certification from './Certification/Certification';

import Cert_HTMLCSS from './Certification/certification_mtahtmlcss.png'
import Cert_JS from './Certification/certification_mtajavascript.png'
import Cert_DreamWeaver from './Certification/certification_adobedreamweaver.png'

const badges = {
  HTML5: 'https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465',
  CSS3: 'https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465',
  SASS: 'https://camo.githubusercontent.com/aa2d67d682b7d59cb0955695b192fc1390c9da34e90aa0c63079c411d01a9c66/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f534153532d686f7470696e6b2e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d53415353266c6f676f436f6c6f723d7768697465',
  JAVASCRIPT: 'https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145',
  TYPESCRIPT: 'https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465',
  JQUERY: 'https://camo.githubusercontent.com/d03eebeb5b432e60d3ed07e832e828f95e85f593c82b35f48bb24aa362f962a3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a71756572792d2532333037363941442e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a7175657279266c6f676f436f6c6f723d7768697465',
  NODEJS: 'https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465',
  EXPRESS: 'https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642',
  REACT: 'https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642',
  NPM: 'https://camo.githubusercontent.com/b47580b7e8e0b4ce9bb718070140318f72d316a0c88e0dd53a5ac4b0bdfc755e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e504d2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465',
  HEROKU: 'https://camo.githubusercontent.com/d18f98a93a8ca015503870e592f96dbdf86f41048e9de1fbbbd4b2dcc7c456b1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6865726f6b752d2532333433303039382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465'
};

const badgeElements = Object
  .entries(badges)
  .map(([label, src], i) => {
    return (
      <li>
        <figure key={i}>
          <img src={src} alt={label} draggable="false"/>
        </figure>
      </li>
    );
  });

export default function AboutMe() {
  return (
    <main>
      <figure id="profile-photo">
        <img src="#" alt="" draggable="false"></img>
      </figure>
      <h2>
        About Me
      </h2>
      <p>
      I first discovered my love for web development at the age of 13 and now focus on creating open sourced projects that showcase my talents in the hopes of employment when I graduate highscool. For the past year I have been balancing school, work and my programming hobby.
      </p>

      <div id="badges">
        <h3>
          Technologies I Use
        </h3>

        <ul>
          {badgeElements}
        </ul>
      </div>

      <div id="certifications">
        <h2>
          My Certifications
        </h2>

        <Certification 
          imgURL={Cert_HTMLCSS}
          title="MTA HTML and CSS"
          id="RCqn-4Tpz" />

        <Certification 
          imgURL={Cert_JS}
          title="MTA JavaScript"
          id="rwC-uTYe" />

        <Certification 
          imgURL={Cert_DreamWeaver}
          title="Adobe DreamWeaver 2015"
          id="5yye-4TKV" />
      </div>
    </main>
  )
}