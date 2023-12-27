export default function DoubleRoll() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 === num2;
    const styles = {color: isWinner ? "green" : "red"};
    return (
        <div style={styles}>
            <h2>Double Dice</h2>
            {/* shortcut using && */}
            { isWinner && <h3>You Win! :)</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );
}

// export default function DoubleRoll() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//         <div>
//             <h2>Double Dice</h2>
//             { num1 === num2 ? <h3>You Win! :)</h3> : null}
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     );
// }

// export default function DoubleRoll() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//         <div>
//             <h2>{ num1 === num2 ? "You Win! :)" : "You lose... :("}</h2>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     );
// }