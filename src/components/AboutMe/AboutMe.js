import './AboutMe.scss';
import Certifications from './Certifications';

const languages = [
  'https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465',
  'https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465',
  'https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145'
];

const librariesAndSupersets = [
  'https://camo.githubusercontent.com/aa2d67d682b7d59cb0955695b192fc1390c9da34e90aa0c63079c411d01a9c66/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f534153532d686f7470696e6b2e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d53415353266c6f676f436f6c6f723d7768697465',
  'https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465',
  'https://camo.githubusercontent.com/d03eebeb5b432e60d3ed07e832e828f95e85f593c82b35f48bb24aa362f962a3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a71756572792d2532333037363941442e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a7175657279266c6f676f436f6c6f723d7768697465',
  'https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465',
  'https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642',
  'https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642',
];

const sites = [
  'https://camo.githubusercontent.com/b47580b7e8e0b4ce9bb718070140318f72d316a0c88e0dd53a5ac4b0bdfc755e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e504d2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465',
  'https://camo.githubusercontent.com/d18f98a93a8ca015503870e592f96dbdf86f41048e9de1fbbbd4b2dcc7c456b1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6865726f6b752d2532333433303039382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465',
  'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white'
];

export default function AboutMe() {
  return (
    <>
      <div id="about-me" className="flex-section-row">
        <div id="content-container">
          <div id="description">
            <h2>
              About Me
            </h2>

            <p>
              Developing for a hobby for 5 years now. Looking
              for a part-time, entry-level, front-end web
              development job. I focus on creating API wrappers
              and libraries in JavaScript, TypeScript and NodeJS.
              Creating websites with ReactJS and SASS/SCSS.
            </p>
          </div>
          
          <div id="technologies">
            <h2>
              Technologies I use
            </h2>

            <ul className="lists">
              <li>
                <h3>
                  Languages
                </h3>

                <ul>
                  {Technologies(languages)}
                </ul>
              </li>
              <li>
                <h3>
                  Libraries and Supersets
                </h3>

                <ul>
                  {Technologies(librariesAndSupersets)}
                </ul>
              </li>
              <li>
                <h3>
                  Sites
                </h3>

                <ul>
                  {Technologies(sites)}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Certifications />
    </>
  )
}

function Technologies(imgs) {
  return (
    <ul>
      {
        imgs.map((url, i) => {
          return (
            <li>
              <img 
                src={url} 
                alt="Technology Badge" 
                key={+i}
                draggable="false">
              </img>
            </li>
          )
        })
      }
    </ul>
  )
}