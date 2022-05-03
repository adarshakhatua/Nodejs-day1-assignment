import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import { Routes, Route } from "react-router-dom";
const Banner = () => {
    const slider = [
        {
            src: "https://img.freepik.com/free-vector/realistic-nature-cosmetics-landing-page_52683-43431.jpg?t=st=1650814363~exp=1650814963~hmac=b75eb6b40dc6142a656a1b2ff45d82eec97e421d6eb70d5d6158ccf1f4cbd580&w=1380",
            heading: "First Product",
            description:"this is first product"
        },
        {
            src: "https://i.pinimg.com/736x/2e/82/6f/2e826fd6e70ba610cfb7a93055d012ca.jpg",
            heading: "Second Product",
            description: "this is second product"
        },
        {
            src: "https://www.creativefabrica.com/wp-content/uploads/2021/03/18/watch-product-social-web-banner-design-Graphics-9723455-2-580x386.jpg",
            heading: "Third Product",
            description: "this is third product"
        },
        {
            src: "https://i.pinimg.com/736x/a5/ce/b5/a5ceb5f078dc0928b25fd3c0bfaa159a.jpg",
            heading: "Fourth Product",
            description: "this is fourth product"
        },
        {
            src: "https://frameru.com/wp-content/uploads/2021/06/Black-friday-wrist-watch-sale-facebook-cover-and-web-banner-template.jpg",
            heading: "Fifth Product",
            description: "this is fifth product"
        },
        {
            src: "https://i.pinimg.com/736x/e2/b7/98/e2b79884074d2275ae5ae89a83944e09.jpg",
            heading: "Sixth Product",
            description: "this is sixth product"
        },
        {
            src: "https://videohive.img.customer.envatousercontent.com/files/361597484/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=87888d05cf4b58ea03ecf0c92a2cc675",
            heading: "Seventh Product",
            description: "this is seventh product"
        },
        {
            src: "https://i.ytimg.com/vi/a8hunzlbOUw/maxresdefault.jpg",
            heading: "Eighth Product",
            description: "this is eighth product"
        }
    ]
    return (
        <Routes>
            <Route path='/' element={<Carousel id="slider">
                {slider.map((elem) =>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={elem.src}
                            alt={elem.heading}
                        />
                        <Carousel.Caption>
                            <h3>{elem.heading}</h3>
                            <p>{elem.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                )}

            </Carousel>}></Route>
        </Routes>
    )
}

export { Banner };