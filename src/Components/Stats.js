import Container from "../Grid/Container";
import Row from "../Grid/Row"
import './Stats.scss';

const stats = {
    '17': 'Projects completed',
    '32': 'Communities forged',
    'Over 300K': 'Customers overjoyed',
    'Over $45M': 'Revenue generated',
    '5,768': 'Cups of coffee'
}

function Stats() {
    return (
        <section className={`stats`}>
            <Container className={`stats__container`}>
                <Row>
                    {Object.keys(stats).map((key, index) => {
                        return (
                            <div className={`stats__item`} key={index}>
                                <div className={`icon-title-container`}>
                                    <h2 className={`stats__title`}>{key}</h2>
                                </div>
                                <p className={`stats__description`}>{stats[key]}</p>
                            </div>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Stats;