export default function Button({children, theme='filled', Icon, ...props}) {
    let cssClasses = `button ${theme}-button`;
    
    if (props.className) {
        cssClasses += ' ' + props.className;
    }    
    if (Icon) {
        cssClasses += ' icon-button';
      }
    return (
        <button className={cssClasses} {...props}>
              {Icon && (
                <span className="button-icon">
                    <Icon />
                </span>
            )}
            <span>{children}</span>
        </button>
    );
}