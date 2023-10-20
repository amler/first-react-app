export default function ColorList ({colors}) {
    return (
        <ul>
            {colors.map((color) => (
                <li>{color}</li>
            ))}
        </ul>
    );
}