export default function cat({key, name}) {
  return `<li>
    ${name}
    <button 
      data-action=destroy 
      data-key=${key}>destroy</button>
  </li>`
}
