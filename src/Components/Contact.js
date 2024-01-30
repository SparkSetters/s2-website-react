import Container from "../Grid/Container";
import './Contact.scss';
import Row from "../Grid/Row";
import Col from "../Grid/Col";

function Stats() {
    return (
        <section className={`contact`} id={`contact-us`}>
            <Container>
                <Row>
                    <Col size={12}>
                        <h2 className={`contact__title`}>Contact us</h2>
                        <p className={`contact__text`}>Ready to take your business to the next level?</p>
                    </Col>
                </Row>
                <Row className="contact__info">
                    <a href='https://outlook.office365.com/owa/calendar/SparkSettersDevelopment@sparksetters.com/bookings/'>Click here</a> to schedule a call.
                </Row>
            </Container>
        </section>
    );
}

export default Stats;