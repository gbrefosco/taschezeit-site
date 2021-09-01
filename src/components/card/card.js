import './card.css';

function Card(props) {
    let { children } = props;

    return (
        <div className="item">
            {children}
        </div>
    )
}

export default Card;