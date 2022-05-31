import './Certification.scss';

export default function Certification({
  imgURL,
  title,
  id
}) {
  return (
    <figure className='certification'>
      <h3>
        {title}
      </h3>
      <img src={imgURL} alt={title} />
      <figcaption>
        <p>
          Certification ID: <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank" rel="noreferrer">{id}</a>
        </p>
      </figcaption>
    </figure>
  )
}