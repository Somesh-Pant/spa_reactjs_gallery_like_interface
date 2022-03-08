import Item from '../item/itemLayout';
import classes from './gridLayout.module.css'

function Grid(props){
    console.log(props.items);
    return <ul className={classes.itemGrid}>
        {props.items.map((item) => <Item 
            key={item.id}
            id={item.id}
            title={item.title}
            imageURL={item.imageURL}
            description={item.description}
            category={item.category}
        />)}
    </ul>
}

export default Grid; 