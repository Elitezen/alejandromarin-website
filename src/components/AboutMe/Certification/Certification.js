import './Certification.scss';
import $ from 'jquery';

export default function Certification({
  imgURL,
  title,
  id
}) {
  function enlargeImage(url = '') {
    $('#opened-certification')
      .attr('src', url)
      .css('display', 'block');
    $('#shadow-wrapper')
      .css('display', 'block')
  }

  return (
    <figure className='certification'>
      <h3>
        {title}
      </h3>
      <img src={imgURL} alt={title} onClick={() => enlargeImage(imgURL)}/>
      <figcaption>
        <p>
          Certification ID: <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank" rel="noreferrer">{id}</a>
        </p>
      </figcaption>
    </figure>
  )
}