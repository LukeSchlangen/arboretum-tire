import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import 'css/bootstrap.css';
import 'css/freelancer.css'
import 'css/font-awesome.min.css';
import 'css/css.css';

const IndexPage = () => (
<div id="page-top" class="index">
  <main class="do-not-print">
    {/* Navigation */}
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div class="navbar-header page-scroll">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">
              Toggle navigation
            </span>
            <span class="icon-bar">
            </span>
            <span class="icon-bar">
            </span>
            <span class="icon-bar">
            </span>
          </button>
          <a href="#page-top">
            <h1 class="navbar-brand">Arboretum Tire &amp; Auto</h1>
          </a>
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li class="hidden">
              <a href="#page-top">
              </a>
            </li>
            <li class="page-scroll" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <a href="#services">
                Services
              </a>
            </li>
            <li class="page-scroll" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <a href="#specials">
                Specials
              </a>
            </li>
            <li class="page-scroll" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <a href="#about">
                About
              </a>
            </li>
            <li class="page-scroll" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <a href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* /.navbar-collapse */}
      </div>
      {/* /.container-fluid */}
    </nav>
    <header>
      <div class="row">
        <div class="container">
          <a href="https://www.google.com/maps/place/Arboretum+Tire+%26+Auto/@44.857322,-93.596309,15z/data=!4m2!3m1!1s0x0:0x925335aeb48a9454"
            target="_blank" class="btn btn-outline-hover">
            <i class="fa fa-map-marker fa-3x">
            </i>
            <h3>
              Location
            </h3>
            <p class="small">
              8175 Hazeltine Blvd
            </p>
            <p class="small">
              Chaska, MN 55318
            </p>
          </a>
          <a href="#contact" class="btn btn-outline-hover">
            <i class="fa fa-phone fa-3x">
            </i>
            <h3>
              Contact
            </h3>
            <p class="small">
              (952) 368-5000
            </p>
            <p class="small">
              info@arboretumtireandauto.com
            </p>
          </a>
          <div class="btn btn-outline">
            <i class="fa fa-clock-o fa-3x">
            </i>
            <h3>
              Hours
            </h3>
            <p class="small">
              Weekdays: 7am to 7pm
            </p>
            <p class="small">
              Saturday: 7am to 3pm
            </p>
          </div>
        </div>
      </div>
      {/*
    </section>
  */}
    </header>
    <section id="tires-search">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2>
              Tires
            </h2>
            <hr class="star-primary"/>
          </div>
        </div>
        <div id="ta-widget-container" class="tasite-bootstrap-styles" data-dealer="949d1b6e-dec2-431e-bc99-29cfdbfbe136" data-hostUrl="https://ta3.tiresanytime.com"
          data-parentUsesBootstrapCss="false"></div>
        <script src="https://ta3.tiresanytime.com/app/widget/searchWidget.js" type="text/javascript"></script>
      </div>
    </section>
    <section id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2>
              Services
            </h2>
            <hr class="star-primary"/>
          </div>
        </div>
        {/*Air Conditioning*/}
        <div class="col-sm-4 services-item">
          <a href="#AirConditioning" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Air Conditioning
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/air-conditioning.jpg" class="img-responsive" alt="Air Conditioning"/>
          </a>
        </div>
        {/*Alignment*/}
        <div class="col-sm-4 services-item">
          <a href="#Alignment" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Alignment
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/alignment.jpg" class="img-responsive" alt="Alignment"/>
          </a>
        </div>
        {/*Batteries*/}
        <div class="col-sm-4 services-item">
          <a href="#Batteries" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Batteries
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/batteries.jpg" class="img-responsive" alt="Batteries"/>
          </a>
        </div>
        {/*Belts and Hoses*/}
        <div class="col-sm-4 services-item">
          <a href="#BeltsAndHoses" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Belts and Hoses
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/belts-and-hoses.jpg" class="img-responsive" alt="Belts and Hoses"/>
          </a>
        </div>
        {/*Brakes*/}
        <div class="col-sm-4 services-item">
          <a href="#Brakes" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Brakes
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/brakes.jpg" class="img-responsive" alt="Brakes"/>
          </a>
        </div>
        {/*Coolant Flush*/}
        <div class="col-sm-4 services-item">
          <a href="#CoolantFlush" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Coolant Flush
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/coolant-flush.jpg" class="img-responsive" alt="Coolant Flush"/>
          </a>
        </div>
        {/*Diagnostic*/}
        <div class="col-sm-4 services-item">
          <a href="#Diagnostic" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Diagnostic
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/diagnostic.jpg" class="img-responsive" alt="Diagnostic"/>
          </a>
        </div>
        {/*Maintenance*/}
        <div class="col-sm-4 services-item">
          <a href="#Maintenance" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Maintenance
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/maintenance.jpg" class="img-responsive" alt="Maintenance"/>
          </a>
        </div>
        {/*Oil Change*/}
        <div class="col-sm-4 services-item">
          <a href="#OilChange" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Oil Change
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/oil-change.jpg" class="img-responsive" alt="Oil Change"/>
          </a>
        </div>
        {/*Propane*/}
        <div class="col-sm-4 services-item">
          <a href="#Propane" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Propane
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/propane.jpg" class="img-responsive" alt="Propane"/>
          </a>
        </div>

        {/*Rental Car*/}
        <div class="col-sm-4 services-item">
          <a href="#RentalCar" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Rental Vehicle
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/rental-car.jpg" class="img-responsive" alt="Rental Car"/>
          </a>
        </div>
        {/*Suspension*/}
        <div class="col-sm-4 services-item">
          <a href="#Suspension" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Suspension
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/suspension.jpg" class="img-responsive" alt="Suspension"/>
          </a>
        </div>
        {/*Tire Pressure Monitoring System*/}
        <div class="col-sm-4 services-item">
          <a href="#TirePressureMonitoringSystem" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Tire Pressure Monitoring System
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/tire-pressure-monitoring.jpg" class="img-responsive" alt="Tire Pressure Monitoring System"/>
          </a>
        </div>
        {/*Tires*/}
        <div class="col-sm-4 services-item">
          <a href="#Tires" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Tires
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/tires.jpg" class="img-responsive" alt="Tires"/>
          </a>
        </div>
        {/*Wipers*/}
        <div class="col-sm-4 services-item">
          <a href="#Wipers" class="services-link" data-toggle="modal">
            <div class="carousel-caption">
              <h3>
                Wipers
              </h3>
            </div>
            <div class="caption">

            </div>
            <img src="images/wipers.jpg" class="img-responsive" alt="Windshield Wipers"/>
          </a>
        </div>
      </div>
    </section>




    {/*Air Conditioning Pop Up Modal*/}
    <div class="services-modal modal fade" id="AirConditioning" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Air Conditioning
                </h2>
                <hr class="star-primary"/>
                <img src="images/air-conditioning.jpg" class="img-responsive img-centered" alt=""/>
                <p>
                  Drive cool and comfortable this season with a fine tuned A/C system!

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*Alignment Pop Up Modal*/}
    <div class="services-modal modal fade" id="Alignment" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Alignment
                </h2>
                <hr class="star-primary"/>
                <img src="images/alignment.jpg" class="img-responsive img-centered" alt=""/>
                <p>
                  Alignments may be needed for pulling, ride issues, tire wear, etc. If you have been hitting pot holes, curbs, etc., it may be time
                  to get your vehicle aligned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*Batteries Pop Up Modal*/}
    <div class="services-modal modal fade" id="Batteries" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Batteries
                </h2>
                <hr class="star-primary"/>
                <img src="images/batteries.jpg" class="img-responsive img-centered" alt=""/>
                <p>
                  We have a great selection of EXCIDE batteries plus top notch personalized service. Minnesota's hot summers and cold winters
                  are hard on batteries and if your battery is over 5 years old it may be time for replacement. We can replace
                  your battery and make the proper inspections to ensure that your vehicle's electrical components are
                  working properly. Cross this off your check list today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Belts and Hoses Pop Up Modal*/}
    <div class="services-modal modal fade" id="BeltsAndHoses" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Belts and Hoses
                </h2>
                <hr class="star-primary"/>
                <img src="images/belts-and-hoses.jpg" class="img-responsive img-centered" alt=""/>
                <p> Belts and hoses wear out over time so have them checked by our staff. Whether you live in Chaska, Chanhassen,
                  Victoria, Carver, Excelsior, or Eden Prairie, we can replace worn belts and hoses so you're ready for
                  your next road trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/*Brakes Pop Up Modal*/}
    <div class="services-modal modal fade" id="Brakes" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Brakes
                </h2>
                <hr class="star-primary"/>
                <img src="images/brakes.jpg" class="img-responsive img-centered" alt=""/>
                <p>
                  Protect yourself, your passengers, and your vehicle with fully operational brakes. Our certified specialist can provide a
                  detailed estimate and an inspection report. We have a state-of-the-art on-car brake lathe and operate as
                  a certified rotor matching center. Rotor matching is a service that can prevent annoying brake pulsation.
                  Whether the issue is with your brake pads, rotors, calipers, lines, or soft pedal, we are qualified to
                  help keep you safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/*Coolant Flush Pop Up Modal*/}
    <div class="services-modal modal fade" id="CoolantFlush" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Coolant Flush
                </h2>
                <hr class="star-primary"/>
                <img src="images/coolant-flush.jpg" class="img-responsive img-centered" alt="Coolant Flush"/>
                <p>
                  Every other year we recommend that you flush your cooling system so you can maintain a long lifespan for your vehicle. We will
                  complete the job in a timely manner and help you save money by maintaining your vehicle. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/*Diagnostic Pop Up Modal*/}
    <div class="services-modal modal fade" id="Diagnostic" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Diagnostic
                </h2>
                <hr class="star-primary"/>
                <img src="images/diagnostic.jpg" class="img-responsive img-centered" alt=""/>
                <p>
                  Our state-of-the-art diagnostics equipment can help troubleshoot your vehicles check engine lights. Next time you see a check
                  engine light, service engine soon, ABS, etc., stop by and let our technicians recommend the proper solutions.
                  Repairs to maximize your vehicles performance and longevity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/*Maintenance Pop Up Modal*/}
    <div class="services-modal modal fade" id="Maintenance" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Maintenance
                </h2>
                <hr class="star-primary"/>
                <img src="images/maintenance.jpg" class="img-responsive img-centered" alt=""/>
                <p>
                  If your maintenance goal is to create a long vehicle life and good performance, let us make it simple for you. Whether your
                  vehicle's mileage is 30k, 60k, 90k or more, we can look up your vehicles's interval maintenance and handle
                  it for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*Oil Change Pop Up Modal*/}
    <div class="services-modal modal fade" id="OilChange" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Oil Change
                </h2>
                <hr class="star-primary"/>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row flat">
            <div class="col-sm-offset-0 col-sm-4 col-xs-8 col-xs-offset-2">
              <ul class="plan">
                <li class="plan-name">
                  Basic Oil Change
                </li>
                <li class="plan-price">
                  <strong>
                    $28
                  </strong>
                </li>
                <li>
                  <strong>
                    Up to 5 qts of Oil
                  </strong>
                </li>
                <li>
                  <strong>
                    Lube
                  </strong>
                </li>
                <li>
                  <strong>
                    Oil Filter
                  </strong>
                </li>
                <s>
                  <li>
                    <strong>
                      Top Off Fluid Levels
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Check Tire Pressure
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Check Belts &amp; Hoses
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Check Anti-Freeze
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Check Air Filter
                    </strong>
                  </li>
                </s>
              </ul>
            </div>

            <div class="col-sm-offset-0 col-sm-4 col-xs-8  col-xs-offset-2">
              <ul class="plan featured">
                <li class="plan-name">
                  Ultimate Oil Change
                </li>
                <li class="plan-price">

                  <strong>
                    $32
                  </strong>
                </li>
                <li>
                  <strong>
                    Up to 5 qts of Oil
                  </strong>
                </li>
                <li>
                  <strong>
                    Lube
                  </strong>
                </li>
                <li>
                  <strong>
                    Oil Filter
                  </strong>
                </li>
                <li>
                  <strong>
                    Check &amp; Top Off Fluid Levels
                  </strong>
                </li>
                <li>
                  <strong>
                    Check Tire Pressure
                  </strong>
                </li>
                <li>
                  <strong>
                    Check Belts &amp; Hoses
                  </strong>
                </li>
                <li>
                  <strong>
                    Check Anti-Freeze
                  </strong>
                </li>
                <li>
                  <strong>
                    Check Air Filter
                  </strong>
                </li>
                <li class="plan-action">
                  <button class="btn btn-outline-hover" onclick="window.print();">
                    <i class="fa fa-print">
                    </i>
                    Print Coupon
                  </button>
                </li>
              </ul>
            </div>

            <div class="col-sm-offset-0 col-sm-4 col-xs-8  col-xs-offset-2">
              <ul class="plan">
                <li class="plan-name">
                  Synthetic Ultimate Oil Change
                </li>
                <li class="plan-price">

                  <strong>
                    $55
                  </strong>
                </li>
                <li>
                  <strong>
                    Up to 5 qts of Synthetic Oil
                  </strong>
                </li>
                <li>
                  <strong>
                    Lube
                  </strong>
                </li>
                <li>
                  <strong>
                    Oil Filter
                  </strong>
                </li>
                <li>
                  <strong>
                    Check &amp; Top Off Fluid Levels
                  </strong>
                </li>
                <li>
                  <strong>
                    Check Tire Pressure
                  </strong>
                </li>
                <li>
                  <strong>
                    Check Belts &amp; Hoses
                  </strong>
                </li>
                <li>
                  <strong>
                    Check Anti-Freeze
                  </strong>
                </li>
                <li>
                  <strong>
                    Check Air Filter
                  </strong>
                </li>
                <li class="plan-action">
                  <button class="btn btn-outline-hover" onclick="window.print();">
                    <i class="fa fa-print">
                    </i>
                    Print Coupon
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/*Propane Pop Up Modal*/}
    <div class="services-modal modal fade" id="Propane" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Propane
                </h2>
                <hr class="star-primary"/>
                <img src="images/propane.jpg" class="img-responsive img-centered" alt=""/>
                <p>
                  We can refill your current 20lb propane tank for only $20. We also refill R.V. and forklift tanks. Whether you are in Chaska,
                  Chanhassen, Victoria, Carver, Excelsior, or Eden Prairie, stop in today so we can get you grilling again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*Rental Car Pop Up Modal*/}
    <div class="services-modal modal fade" id="RentalCar" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Rental Vehicle
                </h2>
                <hr class="star-primary"/>
                <img src="images/rental-car.jpg" class="img-responsive img-centered" alt=""/>
                <p>
                  We have a rental vehicle while your vehicle is being repaired at Arboretum Tire &amp; Auto. Hopefully this can minimize the stress
                  level. Renting from us is not only convenient, but affordable as well. Call ahead to reserve our rental
                  vehicle and don’t let your vehicle repairs get in the way of your busy schedule. Rent today for only $25
                  for a 5 hour rental or 50 cents per mile (whichever is greater).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*Suspension Pop Up Modal*/}
    <div class="services-modal modal fade" id="Suspension" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Suspension
                </h2>
                <hr class="star-primary"/>
                <img src="images/suspension.jpg" class="img-responsive img-centered" alt=""/>
                <p>
                  Is your vehicle handling much different then it did when it was new? Do you feel every bump in the road? Is your vehicle
                  doing a nose dive at every stop? Does your vehicle sway or lean when changing lanes or cornering? Our experts
                  can assess your vehicle and advise on the need for replacement of shocks or struts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*Tire Pressure Monitoring System Pop Up Modal*/}
    <div class="services-modal modal fade" id="TirePressureMonitoringSystem" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  TPMS or Tire Pressure Monitoring System
                </h2>
                <hr class="star-primary"/>
                <img src="images/tire-pressure-monitoring.jpg" class="img-responsive img-centered" alt="Tire Pressure Monitoring System"/>
                <p>
                  Have you seen a light on your dash that looks like a tire? It could mean that you have low tire pressure, bad TPMS (tire
                  pressure monitor system) sensor, or that your vehicles TPMS sensors need to be reprogrammed. Most manufactures
                  recommend that you install a TPMS kit when you replace a tire. This kit includes a core, cap, washer, hex
                  nut, and grommet. So whether you are in need of a tire repair, TPMS reprogram or replacement, think of
                  Arboretum Tire &amp; Auto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*Tires Pop Up Modal*/}
    <div class="services-modal modal fade" id="Tires" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Tires
                </h2>
                <hr class="star-primary"/>
                <img src="images/tires.jpg" class="img-responsive img-centered" alt=""/>
                <p>
                  We offer a wide selection of all season, all terrain, performance, luxury, and economy tires. Our inventory features only
                  the best brands in a multitude of sizes sure to fit your car, truck, or SUV. Not sure what you need? That’s
                  not a problem because we can assist you in selecting the best tires for your specific vehicle and driving
                  needs. All new tire purchases come with a FREE lifetime tire rotation to maximize the life of your tires.
                  Chaska, Chanhassen, Victoria, Carver, Excelsior, Eden Prairie, and Waconia can enjoy our top quality service.
                  Keep your vehicle driving smooth with a new set of tires from Arboretum Tire &amp; Auto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*Wipers Pop Up Modal*/}
    <div class="services-modal modal fade" id="Wipers" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
              <div class="modal-body">
                <h2>
                  Wipers
                </h2>
                <hr class="star-primary"/>
                <img src="images/wipers.jpg" class="img-responsive img-centered" alt=""/>
                <p>
                  Everybody needs a clean windshield for safe driving. Don't wait for the next storm, let our crew at Arboretum Tire &amp; Auto
                  install new wipers for you today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





    <section class="success" id="specials">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2>
              Specials
            </h2>
            <hr class="star-light"/>
          </div>
        </div>
        <div class="col-lg-8 col-lg-offset-2 text-center">
          <a href="images/specials.jpg">
            <button class="btn btn-outline-hover">
              <i class="fa fa-eye">
              </i>
              View Our Coupon
            </button>
          </a>
        </div>
        <div class="col-lg-8 col-lg-offset-2 text-center">
          <button class="btn btn-outline-hover" onclick="window.print();">
            <i class="fa fa-print">
            </i>
            Print Our Coupon
          </button>
        </div>
        <img src="images/specials.jpg" class="print"/>
      </div>
    </section>
    <img src="awards.png" class="banner-image" alt="Sun Sailor Reader's Choice and Automotive Service Excellence Awards"/>
    <section class="success" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2>
              About
            </h2>
            <hr class="star-light"/>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-lg-offset-2">
            <p>
              We have been fortunate to serve the west metro area for 33+ years, and we earn your business every visit with our friendly
              and professional staff. Whether minor maintenance or a major repair, we are always honest and transparent.
            </p>
          </div>
          <div class="col-lg-4">
            <p>
              We get your vehicle fixed right and back it with a service guarantee of 12 months or 12k miles! Stop in and visit our store,
              conveniently located 3/4 mile south of the intersection of highway 5 and 41 on the border of Chanhassen &amp; Chaska.
            </p>
          </div>
        </div>
        {/* Button trigger modal */}
        <div class="col-lg-8 col-lg-offset-2 text-center hidden-xs">
          <button class="btn btn-outline-hover" data-toggle="modal" data-target="#youtubeVideoModal">
            <i class="fa fa-play">
            </i>
            Watch our video
          </button>
        </div>
        {/* Modal */}
        <div class="modal fade" id="youtubeVideoModal" tabindex="-1" role="dialog" aria-labelledby="youtubeVideoModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-body">
              <iframe id="youtubeIframe" frameborder="0" allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2>
              Contact Us
            </h2>
            <hr class="star-primary"/>
            <a href="tel:9523685000">
              <h3>
                952-368-5000
              </h3>
            </a>
            <a href="mailto:info@arboretumtireandauto.com" target="_blank">
              <p>
                info@arboretumtireandauto.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
    <footer class="text-center">
      <div class="footer-above">
        <div class="container">
          <div class="row">
            <div class="footer-col col-md-4">
              <h3>
                Hours
              </h3>
              <p>
                Weekdays: 7am to 7pm
              </p>
              <p>
                Saturday: 7am to 3pm
              </p>
            </div>
            <div class="footer-col col-md-4">
              <h3>
                Location
              </h3>
              <p>
                8175 Hazeltine Blvd
              </p>
              <p>
                Chaska, MN 55318
              </p>
            </div>
            <div class="footer-col col-md-4">
              <h3>
                Contact
              </h3>
              <p>
                <a href="tel:9523685000" target="_blank">
                  (952) 368-5000
                </a>
              </p>

              <a href="mailto:info@arboretumtireandauto.com">
                <p>
                  info@arboretumtireandauto.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="scroll-top page-scroll visible-xs visble-sm">
      <a class="btn btn-primary" href="#page-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>


    {/* <link rel="icon" type="image/png" href="images/icon.png"></link>
    Scripts
    <script src="js/jquery-1.10.2.js"></script>
    <script src="js/aware.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/classie.js"></script>
    <script src="js/cbpAnimatedHeader.js"></script>
    <script src="js/freelancer.js"></script> */}
  </main>
  <div class="print">
    <img src="images/specials.jpg" alt="Arboretum Tire and Auto Coupon" class="print"/>
  </div>
</div>
)

export default IndexPage
