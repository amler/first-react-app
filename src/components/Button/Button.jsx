export default function Button({children, theme='filled'}) {
    let cssClasses = `button ${theme}-button`;

    return <button className={cssClasses}>{children}</button>;
}