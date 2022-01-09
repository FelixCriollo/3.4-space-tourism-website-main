import './subtitle.css'

export default function SubTitle({text, number}) {
  return (
    <h5 className="subtitle">
      <span className="subtitle__number">{number}</span>
      {text}
    </h5>
  );
}