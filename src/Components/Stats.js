import Container from "../Grid/Container";
import Row from "../Grid/Row"
import './Stats.scss';
import Col from "../Grid/Col";

const stats = {
    '17': 'Projects completed',
    '32': 'Communities forged',
    '5,768': 'Cups of coffee',
    'Over 300K': 'Customers overjoyed',
    'Over $45M': 'Revenue generated'
}

function Stats() {
    return (
        <section className={`stats`}>
            <Container className={`stats__container`}>
                <Row>
                    {Object.keys(stats).map((key, index) => {
                        return (
                            <Col className={`col-1-5th stats__item`} sizeSm={12} key={index}>
                                <div className={`icon-title-container`}>
                                    <h2 className={`stats__title`}>{key}</h2>
                                </div>
                                <p className={`stats__description`}>{stats[key]}</p>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Stats;