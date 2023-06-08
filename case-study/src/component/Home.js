import React, {Component} from "react";

export default class Home extends Component {
    render() {
        return (
            <>
                <meta charSet="utf-8"/>
                <title>Furama</title>
                <link
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n        body {\n            background-image: url('https://furamavietnam.com/wp-content/uploads/2018/08/BG2.jpg');\n            background-position: right bottom;\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-attachment: fixed;\n        }\n    "
                    }}
                />


                <div className="row">
                    <div className="col-lg-12">
                        <div className=" bg-dark text-white">
                            <div
                                id="carouselExampleSlidesOnly"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            height="500px"
                                            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            height="500px"
                                            src="https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            height="500px"
                                            src="https://images.pexels.com/photos/358472/pexels-photo-358472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2  "
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card-img-overlay">
                                <div className="row mt-5">
                                    <div className="col-lg-6 mt-5 d-flex">
                                        {/*                        <div class="col-lg-6">*/}
                                        {/*                            <img width="300" height="250" src="https://www.hoteljob.vn/uploads/images/18-01-17-09/Logo-FURAMA-RESORT.jpg" alt="">*/}
                                        {/*                        </div>*/}
                                        <div className="col-lg-6">
                <span style={{fontSize: 50, fontFamily: '"Times New Roman"'}}>
                  Furama Resort
                </span>
                                            <h5 style={{fontFamily: '"Times New Roman"'}}>
                                                A CULINARY RESORT ON ONE OF THE SIX MOST LUXURIOUS BEACHES IN
                                                THE WORLD
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className="row mt-4">
                                            <div className="col-lg-12 d-flex justify-content-end">
                                                <div className="btn-group dropstart w-25 h-100">
                                                    <button
                                                        type="button"
                                                        className="btn btn-success dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={30}
                                                            height={30}
                                                            fill="currentColor"
                                                            className="bi bi-telephone"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                                        </svg>
                                                        <p className="mt-3">Support</p>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                0934774152
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Another action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Something else here
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-lg-12 d-flex justify-content-end">
                                                <div className="btn-group dropstart w-25 h-100">
                                                    <button
                                                        type="button"
                                                        className="btn btn-success dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={30}
                                                            height={30}
                                                            fill="currentColor"
                                                            className="bi bi-file-earmark-image"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                                            <path
                                                                d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z"/>
                                                        </svg>
                                                        <p className="mt-3">Galleries</p>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Another action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Something else here
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-lg-12 d-flex justify-content-end">
                                                <div className="btn-group dropstart w-25 h-100">
                                                    <button
                                                        type="button"
                                                        className="btn btn-success dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={30}
                                                            height={30}
                                                            fill="currentColor"
                                                            className="bi bi-geo-alt"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                                            <path
                                                                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                        </svg>
                                                        <p className="mt-3">Excursion</p>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                style={{backgroundColor: "#094007"}}
                                                            >
                                                                Action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                style={{backgroundColor: "#094007"}}
                                                            >
                                                                {" "}
                                                                Another Action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Something else here
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-5">
                        <iframe
                            width="100%"
                            height={315}
                            src="https://www.youtube.com/embed/Pa8tN0u0Rr0"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                        />
                    </div>
                    <div className="col-lg-7">
                        <h5 className="text-warning" style={{fontFamily: '"Times New Roman"'}}>
                            THIS WORLD CLASS RESORT, FURAMA DANANG, REPUTABLE FOR BEING A CULINARY
                            RESORT IN VIETNAM
                        </h5>
                        <p>
                            Overlooking the long stretch of wide white sand on Danang Beach, Furama
                            Resort Danang is a gateway to three World Heritage Sites of Hoi An (20
                            minutes), My Son (90 minutes) and Hue (2 hours). The 198 rooms and
                            suites plus 70 two to four bedroom pool villas feature tasteful décor,
                            designed with traditional Vietnamese style and a touch of French
                            colonial architecture and guarantee the Vietnam’s the most prestigious
                            resort -counting royalty, presidents, movie stars and international
                            business leaders among its celebrity guests.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5 text-center bg-light">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1
                                    style={{fontFamily: '"Times New Roman"'}}
                                    className="text-warning"
                                >
                                    ROOMS &amp; SUITES
                                </h1>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4"/>
                            <div className="col-4">
                                <p className="fw-light">
                                    All 198 rooms &amp; suites have polished timber floors, natural
                                    fabrics, comfortable cane furniture, plantation style shutters and
                                    ceiling fans. Each room also has its own balcony or spacious terrace
                                    providing complete privacy and with a superb view of the ocean, the
                                    tropical garden or the freshwater swimming lagoon pool.
                                </p>
                                <a href="#" className="fw-bold text-decoration-none text-success">
                                    VIEW ALL ROOMS
                                </a>
                            </div>
                            <div className="col-4"/>
                        </div>
                    </div>
                </div>
                <div className="row align-items-start mt-3">
                    <div className="col">
                        <div className="card">
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Villa</h5>
                                <p className="card-text">
                                    The villa has 4 bedrooms, two on each floor, all own a broad view of
                                    the ocean. Large private swimming pool by the grass garden on the
                                    beach where you can gather with friends and family members for a
                                    cocktail reception or a BBQ.
                                </p>
                                <a href="#" className="btn btn-success">
                                    View
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Garden-Deluxe-twin-bed-F-370x239.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Houes</h5>
                                <p className="card-text">
                                    You will like this deluxe and spacious room! The sitting area with
                                    an elegant sofa, coffee table, and comfortable armchair will help
                                    you relax. The large bathroom decorated with honey-colored marble
                                    offers a separate shower and bathtub.
                                </p>
                                <a href="#" className="btn btn-success">
                                    View
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Rooms</h5>
                                <p className="card-text">
                                    This charming room overlooks our beautiful tropical garden and the
                                    landscaped lagoon pool. Enjoy the view over palm trees, plants, and
                                    flowers in all kinds of shapes and colors. At night, the pool and
                                    garden are romantically illuminated.
                                </p>
                                <a href="#" className="btn btn-success">
                                    View
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12 text-center mt-5">
                        <h2 className="text-warning" style={{fontFamily: '"Times New Roman"'}}>
                            JOINING OUR CULINARY &amp; RECREATIONAL EXPERIENCE
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3"/>
                    <div className="col-lg-12 text-center">
                        <p>
                            The Furama Resort aims to make your stay in Vietnam a unique and
                            unforgettable experience. Whether you prefer to be active or just to
                            relax, we offer a wide range of activities and services to suit your
                            needs.
                        </p>
                    </div>
                    <div className="col-lg-3"/>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <img
                            width="600px"
                            src="https://furamavietnam.com/wp-content/uploads/2018/07/CULIRARY.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h3
                                    className="card-title text-warning"
                                    style={{fontFamily: '"Times New Roman"'}}
                                >
                                    CULINARY
                                </h3>
                                <p className="card-text mt-5">
                                    The resort’s culinary experience features a mixture of the authentic
                                    and locally inspired Vietnamese, Asian, Italian and other European
                                    cuisines plus the best imported steaks. The resort presents guests
                                    with varied gastronomic venues – the hip and breezy bar overlooking
                                    the beach, the exclusive Lagoon pool surrounded by a tropical
                                    garden, the true Italian flare offered at the Don Cipriani’s, the
                                    refined Asian touch at Café Indochine or the authentic central
                                    Vietnam cuisine at the Danaksara.
                                </p>
                                <a href="#" className="btn btn-success">
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h3
                                    className="card-title text-warning"
                                    style={{fontFamily: '"Times New Roman"'}}
                                >
                                    MEETING &amp; EVENT
                                </h3>
                                <p className="card-text mt-5">
                                    A well-appointed International Convention Palace with ballrooms can
                                    accommodate up to 1,000 people in style, with another ten function
                                    rooms for 50 to 300 people each. A variety of cultural-themed
                                    parties on the beach or around the lagoon, in the ballrooms or
                                    outside the resort, with the surprising arrivals of VIPs from
                                    Helicopter landing on the resort’s own Helipad…
                                </p>
                                <a href="#" className="btn btn-success">
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img
                            width="600px"
                            src="https://furamavietnam.com/wp-content/uploads/2018/10/02.-ICP-ICP_Furama_Danang_-Ball-Room-4.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <img
                            width="600px"
                            src="https://furamavietnam.com/wp-content/uploads/2018/07/RECREATION.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h3
                                    className="card-title text-warning"
                                    style={{fontFamily: '"Times New Roman"'}}
                                >
                                    RECREATION
                                </h3>
                                <p className="card-text mt-5">
                                    A full range of Water Sports will keep you busy. Stop by the Water
                                    Sport House where our experienced staff are waiting to assist or
                                    train you in the use of any of our equipment.
                                </p>
                                <a href="#" className="btn btn-success">
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}