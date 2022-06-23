import './Certifications.scss';

import $ from 'jquery';

import CertHTMLCSS from './certifications/cert_htmlcss.png';
import CertJavaScript from './certifications/cert_javascript.png';
import CertAdobeDreamWeaver from './certifications/cert_adobedreamweaver.png';

export default function Certifications() {
  return (
    <div id="certifications">
      <h2>
        Certifications
      </h2>

      <div id="certifications-container">
        <ul>
          <CertificationCards />
        </ul>
      </div>

      <img id="opened-certification" src="" alt="opened certification"></img>
    </div>
  )
}

const certificationData = [
  {
    title: 'MTA: Introduction to Programming using HTML and CSS',
    imgSrc: CertHTMLCSS,
    id: 'RCqn-4Tpz'
  },
  {
    title: 'MTA: Introduction to Programming using JavaScript',
    imgSrc: CertJavaScript,
    id: 'yrwC-uTYe'
  },
  {
    title: 'Web Authoring using Adobe Dreamweaver CC 2015',
    imgSrc: CertAdobeDreamWeaver,
    id: '5yye-4TKV'
  }
];

function CertificationCards() {
  return certificationData.map((cert, i) => {
    return (
      <li key={i}>
        {Card(cert)}
      </li>
    )
  });
}

function Card(data = {}) {
  return (
    <div className="certification-card">
      <figure>
        <figcaption>
          {data.title}
        </figcaption>

        <img 
          src={data.imgSrc} 
          alt={data.title} 
          onClick={() => openCert(data.imgSrc)}></img>
      </figure>

      <p>
        <strong>Cert. Id</strong>: {data.id}
      </p>
    </div>
  )
}

function openCert(imgSrc = '') {
  $('#opened-certification')
    .attr('src', imgSrc)
    .css('display', 'block');
  $('#backdrop-wrapper')
    .css('z-index', '2')
}