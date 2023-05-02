import './Container.scss';

function Container() {
    let props = arguments[0] || {};

    let classes = ['container'];
    if(props.className) {
        classes.push(props.className);
    }
    return (
        <div className={classes.join(' ')}>
            {props.children || ``}
        </div>
    );
}

export default Container;