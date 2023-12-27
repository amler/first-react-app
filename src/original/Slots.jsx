export default function Slots({vals}) {
    const randIdx = Math.floor(Math.random() * vals.length);
    const isWinner = val1 === val2 && val1 === val3;
    // const randIdx = Math.floor(Math.random() * )
    return (
        <div>
            <h1>
                {val1} {val2} {val3}
            </h1>
            <h2 style={{color: isWinner ? "green" : "red"}}>{isWinner ? "You Win!" : "Better luck next time."}</h2>
            { isWinner && <h3>Congratulations :)</h3>}
        </div>
    )
}