import "./card.css"

function Card({ data }) {
    return <div id="card">
        <img src={data.image} />
        <div>{data.name}</div>
    </div>;
}

export default Card;