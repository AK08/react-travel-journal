import marker from "../assets/marker.png";

export default function Entry(props) {
  return (
    <article>
      <div className="container">
        <div className="entry">
          <div className="entry__left">
            <img src={props.entry.img.src} alt={props.entry.img.alt} />
          </div>
          <div className="entry__right">
            <div className="entry__right__top">
              <img src={marker} alt="marker" className="marker" />
              <p className="country">{props.entry.title}</p>
              <a href={props.entry.googleMapsLink}>View on Google Maps</a>
            </div>
            <h2>{props.entry.title}</h2>
            <p className="dates">{props.entry.dates}</p>
            <p className="entry__text">{props.entry.text}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
