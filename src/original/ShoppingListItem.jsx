import PropTypes from 'prop-types';

export default function ShoppingListItem({name, quantity, completed}) {
    const styles = {
        color: completed ? "grey" : "red",
        textDecoration: completed ? "line-through": "none",
    };
    return (
        <li style={styles}> 
            {name} - {quantity}
        </li>
    );
}

// https://github.com/facebook/prop-types#usage
ShoppingListItem.PropTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    completed: PropTypes.bool,
}