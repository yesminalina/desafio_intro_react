import Badge from 'react-bootstrap/Badge'

const Tags = ({tagText, tagColor}) => {
    return (
        <Badge pill bg={tagColor}>
            {tagText}
        </Badge>
    )
}

export default Tags