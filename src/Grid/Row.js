import './Row.scss';
function Row() {
    let props = arguments[0] || {};
    return (
        <div className={`row`}>
            {props.children || ``}
        </div>
    );
}

export default Row;