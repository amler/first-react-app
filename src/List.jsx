export default function List({values}) {
    const randIdx = Math.floor(Math.random() * values.length) + 1;
    // const randElem = values[randIdx];
    return (
        <div>
            {randIdx}
            {/* <p>The list of values: {values}</p>
            <p>Random element is: {randElem}</p> */}
        </div>
    );
}