export default function List({values}) {
    const randIdx = Math.floor(Math.random() * values.length);
    const randElem = values[randIdx];
    return (
        <div>
            <p>The list of values: {values}</p>
            <p>Random element is: {randElem}</p>
        </div>
    );
}