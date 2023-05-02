import './Row.scss';
function Row() {
    let props = arguments[0] || {};

    let classes = ['row'];
    if(props.className) {
        classes.push(props.className);
    }
    return (
        <div className={classes.join(' ')}>
            {props.children || ``}
        </div>
    );
}

export default Row;