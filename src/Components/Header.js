import logo from '../header_logo.svg';
import './Header.scss';
import Container from "../Grid/Container";
import Row from "../Grid/Row";
import Col from "../Grid/Col";

function Header() {

    let scrollToTarget = (e) => {
        let targetElement = document.querySelector(e);
        if(!targetElement) return;
        targetElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    };

    return (
        <header className={`header`}>
            <Container>
                <Row>
                    <Col size={6} pull={`left`} contentJustify={`center`}>
                        <img src={logo} className={`header__logo`} alt={`logo`} />
                    </Col>
                    <Col size={6} pull={`right`} contentJustify={`center`}>
                        <div className={`header__menu`}>
                            <ul>
                                <li className={`active`}><button className={`btn-link`} onClick={scrollToTarget('#home')}>Home</button></li>
                                <li><button className={`btn-link`} onClick={scrollToTarget('#about-us')}>About us</button></li>
                                <li className={`cta`}><button className={`btn-cta`} onClick={scrollToTarget('#contact')}>Contact</button></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
