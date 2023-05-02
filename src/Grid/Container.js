import './Container.scss';

function Container() {
    let props = arguments[0] || {};
    return (
        <div className={`container`}>
            {props.children || ``}
        </div>
    );
}

export default Container;