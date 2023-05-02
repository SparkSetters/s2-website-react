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
                            <h1 className={`hero__title`}>Let us spark</h1>
                            <p className={`hero__text smaller`}>Your online presence</p>
                            <p className={`hero__description`}>
                                Having an online presence is critical for a modern
                                business. Interacting with your customers dynamically, providing the right information
                                before they even ask and maximizing your conversion rates are tied in together.
                                Our experts can advise you on what you need to do, and get it done. You will get all the
                                bitches.
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
