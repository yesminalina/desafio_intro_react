import Card from 'react-bootstrap/Card'
import Tags from './Tags'

const MyCard = ({image, name, description, tagText, tagColor}) => {
    return (
        <Card style={{ width: '20%', minHeight: '100vh'}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text style={{minHeight: '12em'}}>
                {description}
                </Card.Text>
                <Tags tagText={tagText} tagColor={tagColor} />
            </Card.Body>
        </Card>
    )
}

export default MyCard