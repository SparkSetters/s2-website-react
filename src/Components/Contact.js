import Container from "../Grid/Container";
import './Contact.scss';
import HubspotContactForm from "./HubspotContactForm";
import Row from "../Grid/Row";
import Col from "../Grid/Col";

function Stats() {
    const hubspotFormOptions = {
        region: "na1",
        portalId: "23992815",
        formId: "ab49ef50-4a5b-40b5-b3af-577d10b77015"
    };
    return (
        <section className={`contact`} id={`contact-us`}>
            <Container>
                <Row>
                    <Col size={12}>
                        <h2 className={`contact__title`}>Contact us</h2>
                        <p className={`contact__text`}>Ready to take your business to the next level?</p>
                    </Col>
                </Row>
                <Row>
                    <HubspotContactForm
                        region={hubspotFormOptions.region}
                        portalId={hubspotFormOptions.portalId}
                        formId={hubspotFormOptions.formId}
                    />
                </Row>
            </Container>
        </section>
    );
}

export default Stats;