import logo from '../Assets/header_logo.png';
import './Footer.scss';
import Container from "../Grid/Container";
import Row from "../Grid/Row";
import Col from "../Grid/Col";

function Footer() {


    return (
        <footer className={`footer`}>
            <Container>
                <Row>
                    <Col size={12} contentJustify={`center`} contentAlign={`center`}>
                        <img src={logo} className={`header__logo`} alt={`logo`}/>
                    </Col>
                    <Col size={12} contentJustify={`center`} contentAlign={`center`}>
                        © SparkSetters 2023<br/>
                        <a href={`privacy-statement.pdf`}>Privacy Statement</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
