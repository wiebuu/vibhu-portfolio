import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Koala from "../assets/img/creator picture.jpg";
import creator from "../assets/img/creator picture2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>{`Hi! I'm Vishwas`} <br/> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer" ]'><span className="wrap">{text}</span></span></h2>
                  <p>I'm a Coder. I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I was in 11th grade and I tried creating a HTML website — And I just knew that this was it and I wanted to keep going so I tried adding CSS in the website and since then I have always tried to learn new technologies and improve myself.</p>
                  <p>Here are a few technologies I’ve been working with:</p>
                  <ul className="skills-list">
                    <li ><a className="skills-list-content" href='https://en.wikipedia.org/wiki/HTML'>HTML</a></li>
                    <li ><a className="skills-list-content" href='https://en.wikipedia.org/wiki/CSS'>CSS</a></li>
                    <li ><a className="skills-list-content" href='https://en.wikipedia.org/wiki/JavaScript'>JavaScript</a></li>
                    <li ><a className="skills-list-content" href='https://en.wikipedia.org/wiki/React_(JavaScript_library)'>React</a></li>
                  </ul>
                  {/* <button>Let’s Connect <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
            {({ isVisible }) =>
                <div>
                  <img id="creator-img1"src={creator} alt="Header Img"/>
                  <img id="creator-img2"src={Koala} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
