import Carousel from 'react-bootstrap/Carousel';

function KarusellGalerii() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className=""
          src="https://cdn.midjourney.com/62293a4c-4eb9-4624-b853-a1174687b7bc/0_2.png"
          alt="First slide"
        />
{/*         <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src="https://cdn.midjourney.com/8dc1c057-875f-4210-be7e-724f3333c4f3/0_0.png"
          alt="Second slide"
        />
{/*         <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src="https://cdn.midjourney.com/f701990a-b795-4c7b-9e77-64acf4c997ab/0_3.png"
          alt="Third slide"
        />
{/*         <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default KarusellGalerii;