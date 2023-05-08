import presence from '../Assets/presence.png';
import './Hero.scss';
import Container from "../Grid/Container";
import Row from "../Grid/Row";
import Col from "../Grid/Col";

function Presence() {
    return (
        <section className={`hero`}>
            <Container>
                <Row>
                    <Col size={8} pull={`left`} contentJustify={`center`}>
                        <div className={`hero__content`}>
                            <h1 className={`hero__title`}>Ignite your evolution</h1>
                            <p className={`hero__text smaller`}>Community is king</p>
                            <p className={`hero__description`}>
                            Embracing a community-first marketing approach is essential for today's businesses.<br />
                            <br />Engage with your audience effectively, deliver tailored content, and maximize your growth potential by building a strong community around your brand.<br />
                            <br />Our experts will guide and support you in establishing a powerful online presence that resonates with your target audience.
                            </p>
                            <button className={`btn-cta hero__button`}>Contact us</button>
                        </div>
                    </Col>
                    <Col size={4} pull={`right`} contentJustify={`center`}>
                        <img src={presence} className={`hero__logo spread-width`} alt={`logo`}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Presence;
