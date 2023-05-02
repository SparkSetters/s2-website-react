import Container from "../Grid/Container";
import Row from "../Grid/Row"
import './Stats.scss';

const stats = {
    '523': 'Projects completed',
    '163': 'Happy clients',
    '431K': 'Customers scammed',
    '$31B': 'Revenue generated',
    '12M': 'Cups of coffee'
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