import './more-info.css';

export default function MoreInfo({distance, time}) {
  return (
    <section className="more">
      <div className='more-distance'>
        <p className='sub-heading2 more__title'>AVG. DISTANCE</p>
        <p className='sub-heading1 more__info'>{distance}</p>
      </div>

      <div className='more-travel'>
        <p className='sub-heading2 more__title'>Est. travel time</p>
        <p className='sub-heading1 more__info'>{time}</p>
      </div>
    </section>
  )
}