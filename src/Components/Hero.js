import spark from '../Assets/Spark.svg';
import './Hero.scss';
import Container from "../Grid/Container";
import Row from "../Grid/Row";
import Col from "../Grid/Col";

function Hero() {
    return (
        <section className={`hero`} id={`home`}>
            <Container>
                <Row>
                    <Col size={4} pull={`left`} contentJustify={`center`}>
                        <img src={spark} className={`hero__logo`} alt={`logo`}/>
                    </Col>
                    <Col size={8} pull={`right`} contentJustify={`center`}>
                        <div className={`hero__content`}>
                            <h1 className={`hero__title`}>We are SparkSetters</h1>
                            <p className={`hero__text`}>Community-First Marketing & Technology Solutions</p>
                            <button className={`btn-cta hero__button margin`}>Contact us</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;
