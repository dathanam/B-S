import React from 'react';
import '../../CSS/Client.css'

function Home() {
    return (
        <div>
            <header id="site-header" class="fixed-top">
                <div class="container">
                    <nav class="navbar navbar-expand-lg stroke">
                        <h1> <a class="navbar-brand" href="index.html">
                            <span class="lnr lnr-bicycle"></span> Workout
                        </a></h1>
                        <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                            <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item @@about__active">
                                    <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item @@classes__active">
                                    <a class="nav-link" href="classes.html">Classes</a>
                                </li>
                                <li class="nav-item @@contact__active">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                                <li>
                                    <div class="columns text-lg-right social-grid">
                                        <ul class="social">
                                            <li><a href="#url"><span class="fa fa-facebook" aria-hidden="true"></span></a></li>
                                            <li><a href="#url"><span class="fa fa-instagram" aria-hidden="true"></span></a></li>
                                            <li><a href="#url"><span class="fa fa-twitter" aria-hidden="true"></span></a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <section class="w3l-main-slider position-relative" id="home">
                <div class="companies20-content">
                    <div class="owl-one owl-carousel owl-theme">
                        <div class="item">
                            <li>
                                <div class="slider-info banner-view bg bg2">
                                    <div class="banner-info">
                                        <div class="container">
                                            <div class="banner-info-bg">
                                                <h5>For the world of Fitness.</h5>
                                                <a class="btn btn-style btn-primary mt-md-5 mt-4" href="services.html">View
                                                    classes</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div class="item">
                            <li>
                                <div class="slider-info  banner-view banner-top1 bg bg2">
                                    <div class="banner-info">
                                        <div class="container">
                                            <div class="banner-info-bg">
                                                <h5>For those who Work out the Hardest!</h5>
                                                <a class="btn btn-style btn-primary mt-md-5 mt-4" href="services.html">View
                                                    classes</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div class="item">
                            <li>
                                <div class="slider-info banner-view banner-top2 bg bg2">
                                    <div class="banner-info">
                                        <div class="container">
                                            <div class="banner-info-bg">
                                                <h5>15% Off for All New Attendees!</h5>
                                                <a class="btn btn-style btn-primary mt-md-5 mt-4" href="services.html">View
                                                    classes</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div class="item">
                            <li>
                                <div class="slider-info banner-view banner-top3 bg bg2">
                                    <div class="banner-info">
                                        <div class="container">
                                            <div class="banner-info-bg">
                                                <h5>Best fitness centre for Men & Women.</h5>
                                                <a class="btn btn-style btn-primary mt-md-5 mt-4" href="services.html">View
                                                    classes</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w3l-bottom-grids-6 py-5" id="why">
                <div class="container py-lg-5 py-md-4">
                    <div class="grids-area-hny main-cont-wthree-fea row">
                        <div class="col-lg-3 col-sm-6 grids-feature">
                            <div class="area-box">
                                <div class="icon">
                                    <span class="lnr lnr-cog"></span>
                                </div>
                                <h4><a href="#feature" class="title-head">Quality Service</a></h4>
                                <p>Vivamus a ligula quam. Dolor blandit eu leo non et init set ipsum corsec monec..</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 grids-feature mt-sm-0 mt-5">
                            <div class="area-box">
                                <div class="icon">
                                    <span class="lnr lnr-license"></span>
                                </div>
                                <h4><a href="#feature" class="title-head">Spacious Gym</a></h4>
                                <p>Vivamus a ligula quam. Dolor blandit eu leo non et init set ipsum corsec monec..</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 grids-feature mt-lg-0 mt-5">
                            <div class="area-box">
                                <div class="icon">
                                    <span class="lnr lnr-file-empty"></span>
                                </div>
                                <h4><a href="#feature" class="title-head">Fitness Programms</a></h4>
                                <p>Vivamus a ligula quam. Dolor blandit eu leo non et init set ipsum corsec monec..</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 grids-feature mt-lg-0 mt-5">
                            <div class="area-box">
                                <div class="icon">
                                    <span class="lnr lnr-users"></span>
                                </div>
                                <h4><a href="#feature" class="title-head">Group classes</a></h4>
                                <p>Vivamus a ligula quam. Dolor blandit eu leo non et init set ipsum corsec monec..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w3l-blog-block py-5">
                <div class="container py-lg-5 py-md-4">
                    <div class="heading text-center mx-auto">
                        <h5 class="title-small text-center mb-2">Blog posts</h5>
                        <h3 class="title-big title-big-center mb-md-5 mb-4">Most recent fitness posts</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 item">
                            <div class="card">
                                <div class="card-header p-0 position-relative">
                                    <a href="#blog-single">
                                        <img class="card-img-bottom d-block" src="assets/images/blog1.jpg" alt="Card image cap" />
                                    </a>
                                    <ul class="location-top">
                                        <li class="new">Fitness</li>
                                    </ul>
                                </div>
                                <div class="card-body blog-details">
                                    <a href="#blog-single" class="blog-desc">The heavy weight of olympics: power lifting for the
                                        pros</a>
                                    <p>Lorem ipsum dolor sit amet ipsum elit. Qui eligendi
                                        vitae sit isque male suada.</p>
                                    <div class="author align-items-center mt-3 mb-1">
                                        <div class="img-circle">
                                            <img src="assets/images/a1.jpg" class="mr-3 img-fluid" alt="..." />
                                        </div>
                                        <div class="author-info">
                                            <a href="#author">Maxwell ker</a> <br /> <span class="meta-value">July 1, 2020 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 item mt-md-0 mt-5">
                            <div class="card">
                                <div class="card-header p-0 position-relative">
                                    <a href="#blog-single">
                                        <img class="card-img-bottom d-block" src="assets/images/blog2.jpg" alt="Card image cap" />
                                    </a>
                                    <ul class="location-top">
                                        <li class="tip">Fitness</li>
                                    </ul>
                                </div>
                                <div class="card-body blog-details">
                                    <a href="#blog-single" class="blog-desc">If my last day of CrossFit were Tomorrow
                                    </a>
                                    <p>Lorem ipsum dolor sit amet ipsum elit. Qui eligendi
                                        vitae sit isque male suada.</p>
                                    <div class="author align-items-center mt-3 mb-1">
                                        <div class="img-circle">
                                            <img src="assets/images/a2.jpg" class="mr-3 img-fluid" alt="..." />
                                        </div>
                                        <div class="author-info">
                                            <a href="#author">Maxwell ker</a> <br /> <span class="meta-value">July 1, 2020 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                            <div class="card">
                                <div class="card-header p-0 position-relative">
                                    <a href="#blog-single">
                                        <img class="card-img-bottom d-block" src="assets/images/blog4.jpg" alt="Card image cap" />
                                    </a>
                                    <ul class="location-top">
                                        <li class="design">Fitness</li>
                                    </ul>
                                </div>
                                <div class="card-body blog-details">
                                    <a href="#blog-single" class="blog-desc">Keeping your Fitness Goals on Track at Work
                                    </a>
                                    <p>Lorem ipsum dolor sit amet ipsum elit. Qui eligendi
                                        vitae sit isque male suada.</p>
                                    <div class="author align-items-center mt-3 mb-1">
                                        <div class="img-circle">
                                            <img src="assets/images/a3.jpg" class="mr-3 img-fluid" alt="..." />
                                        </div>
                                        <div class="author-info">
                                            <a href="#author">Maxwell ker</a> <br /> <span class="meta-value">July 1, 2020 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w3l-footers-20">
                <div class="footers20">
                    <div class="container">
                        <div class="footers20-content">
                            <div class="d-grid grid-col-4 grids-content">
                                <div class="column">
                                    <h4>Address</h4>
                                    <p class="contact-para3">New York, Alexandria, VA 2230, NY-90814 Hill Station 4th Street</p>
                                    <a href="contact.html">
                                        <p class="contact-map mt-2"><span class="lnr lnr-map-marker"></span> Find us on map</p>
                                    </a>
                                </div>
                                <div class="column">
                                    <h4>Get in touch</h4>
                                    <p>Join the Best GYM in Your Town!</p>
                                    <a href="tel:+1-2345-678-11">
                                        <p class="contact-phone mt-2"><span class="lnr lnr-phone-handset"></span> +1-2345-678-11
                                        </p>
                                    </a>
                                    <a href="mailto:mail@example.com">
                                        <p class="contact-mail mt-1"><span class="lnr lnr-envelope"></span> mail@example.com</p>
                                    </a>
                                </div>
                                <div class="column">
                                    <h4>Opening hours</h4>
                                    <p>We are working on</p>
                                    <p class="mt-1"><span class="lnr lnr-clock"></span> <strong>Mon - Fri</strong> : 7am to 9pm
                                    </p>
                                    <p class="mt-1"><span class="lnr lnr-clock"></span> <strong>Sat - Sun</strong> : 10 am to 8
                                        pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;