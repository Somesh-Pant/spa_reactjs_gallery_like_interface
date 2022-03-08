import classes from '../grid/gridLayout.module.css';

function Item(props){
    return <li className={classes.item}>
            <div >
                <div className={classes.cat}>
                    <img src={props.imageURL} alt={props.title} />
                </div>
                <div >
                    <h3>
                        {props.title}
                    </h3>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </li>;
}

export default Item;