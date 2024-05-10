let tyler = 'Tyler Deckys';
let rilus = 'Rilus Roo';
let bree = 'Bree Tyler';
let kona = 'Kona Albondigas';
let chi = 'Chi WaWa';
let eppy = 'Eppy Solano';
let swiss = 'Swiss Topher';

const element = (
    <ul style={{'color': 'blue', 'fontSize': '24px'}}>
        <li>{tyler}</li>
        <li>{rilus}</li>
        <li>{bree}</li>
        <li>{kona}</li>
        <li>{chi}</li>
        <li>{eppy}</li>
        <li>{swiss}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))