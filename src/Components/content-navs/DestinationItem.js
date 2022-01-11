export default function DestinationItem({text, cName}) {
  return (
    <li className={`desti-item ${cName}`}>{text}</li>
  )
}