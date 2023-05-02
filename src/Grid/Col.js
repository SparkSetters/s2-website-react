import './Col.scss';
function Col() {
    let props = arguments[0] || {};

    let classes = ['col'];
    if(props.className) {
        classes.push(props.className);
    }
    if (props.size) {
        classes.push(`col-${props.size}`);
    }
    if (props.pull) {
        classes.push(`col-pull-${props.pull}`);
    }
    if(props.contentJustify) {
        classes.push(`col-content-justify-${props.contentJustify}`);
    }

    return (
        <div className={classes.join(' ')}>
            {props.children || ``}
        </div>
    );
}

export default Col;