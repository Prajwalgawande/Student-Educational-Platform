import Card from 'react-bootstrap/Card';

function SubjectCards({subject,teacher}) {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title>{subject}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Teacher: {teacher}</Card.Subtitle>
        {/* <Card.Text>
          {description}
        </Card.Text> */}
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default SubjectCards;