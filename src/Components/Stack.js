import './Stack.scss';
import Container from "../Grid/Container";
import * as PropTypes from "prop-types";
import discord from '../Assets/Stack/Discord.png'
import slack from '../Assets/Stack/Slack.png'
import mailchimp from '../Assets/Stack/Mailchimp.png'
import react from '../Assets/Stack/React.png'
import paypal from '../Assets/Stack/PayPal.png'
import stripe from '../Assets/Stack/Stripe.png'
import Row from "../Grid/Row";
import Col from "../Grid/Col";

function StackItem(props) {

    function showPlaceholder(el) {
        console.log(el);
    }

    return (
        <Col className={`stack__col`} sizeSm={4} sizeMd={2} onMouseOver={showPlaceholder(this)}>
            <div className={`stack__item`}>
                <img src={props.image} alt={props.title}/>
            </div>
        </Col>
    );
}

StackItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string
};

function Stack() {
    return (
        <section className={`stack`}>
            <Container>
                <Row className={`stack__row`}>
                    <StackItem image={discord} title={`Discord`}/>
                    <StackItem image={slack} title={`Slack`}/>
                    <StackItem image={mailchimp} title={`Mailchimp`}/>
                    <StackItem image={react} title={`React`}/>
                    <StackItem image={paypal} title={`Paypal`}/>
                    <StackItem image={stripe} title={`Stripe`}/>
                </Row>
            </Container>
        </section>
    );
}

export default Stack;