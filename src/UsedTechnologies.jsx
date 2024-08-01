function UsedTechnologies(props) {
    return (
        <ul className="technologies">
            {props.data.map((technology, index) => <li key={index}>{technology}</li>)}
        </ul>
    );
}

export default UsedTechnologies;