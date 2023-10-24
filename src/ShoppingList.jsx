import ShoppingListItem from './ShoppingListItem';

function ShoppingList ({items}) {
    return (
        <ul>
            {items.map((i) => (
                <ShoppingListItem {...i}/>
            ))}
        </ul>
    );
}

export default ShoppingList;