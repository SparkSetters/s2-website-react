import Container from "../Grid/Container";
import Row from "../Grid/Row";
import Col from "../Grid/Col";

import './Services.scss';

import community from '../Assets/Services/Community.png';
import webdev from '../Assets/Services/Webdev.png';
import ecommerce from '../Assets/Services/ECommerce.png';
import apps from '../Assets/Services/Apps.png';

const services = [
    {
        icon: community,
        title: `Community`,
        description: `We will set up and manage an online community for your business. Depending on your needs, we can offer platform moderation, user verification, and (bot) programming services.`
    },
    {
        icon: webdev,
        title: `Web Development`,
        description: `We will (re)design you website, optimizing it for modern search-engines and that magical marketing science sauce. We will make sure your users can find your business, even if we have to rely on`
    },
    {
        icon: ecommerce,
        title: `E-Commerce`,
        description: `We will set up an eCommerce store for you, including optimized sales funnels and analytics.`
    },
    {
        icon: apps,
        title: `App Development`,
        description: `We will create smartphone apps for your business, based on modern technologies, integrating all parts of your business.`
    }
];

function Services() {
    return (
        <section className="services">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2 className="services__title">Our Services</h2>
                    </Col>
                </Row>
                <Row>
                    {services.map((service, index) => {
                        return (
                            <Col size={3} sizeSm={12} key={index}>
                                <div className="services__item">
                                    <img src={service.icon} className="services__icon" alt="icon"/>
                                    <h3 className="services__item-title">{service.title}</h3>
                                    <p className="services__item-description">{service.description}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Services;