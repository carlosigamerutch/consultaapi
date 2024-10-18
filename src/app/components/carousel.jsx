import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import logo from '../components/ExampleCarouselImage/IMG_20220818_141520_HDR.jpg';
import logo1 from '../components/ExampleCarouselImage/IMG-20210928-WA0016.jpg';
import logo2 from '../components/ExampleCarouselImage/IMG_20221225_1410260001.jpg';

function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image
                    src={logo}
                    alt="mi mama y yo"
                    layout="responsive"
                    width={350}  // Tamaño reducido
                    height={237} // Tamaño reducido
                />
                <Carousel.Caption>
                    <h3>Conviviendo con mi mamá en la catedral</h3>
                    <p>Año 2022</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src={logo1}
                    alt="boda de mi prima Reina Mayra en Tijuana"
                    layout="responsive"
                    width={350}  // Tamaño reducido
                    height={237} // Tamaño reducido
                />
                <Carousel.Caption>
                    <h3>Conviviendo en Tijuana</h3>
                    <p>Año 2021</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src={logo2}
                    alt="paseo en la catedral"
                    layout="responsive"
                    width={350}  // Tamaño reducido
                    height={237} // Tamaño reducido
                />
                <Carousel.Caption>
                    <h3>Pasando en familia en Puebla</h3>
                    <p>Año 2022</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;