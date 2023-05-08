import Container from "../Grid/Container";
import Row from "../Grid/Row"
import './Stats.scss';

const stats = {
    '28': 'Projects completed',
    '163': 'Communities forged',
    'Over 300K': 'Customers overjoyed',
    'Over $45M': 'Revenue generated',
    '15,768': 'Cups of coffee'
}

function Stats() {
    return (
        <section className={`stats`}>
            <Container className={`stats__container`}>
                <Row>
                    {Object.keys(stats).map((key, index) => {
                        return (
                            <div className={`stats__item`} key={index}>
                                <h2 className={`stats__title`}>{key}</h2>
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