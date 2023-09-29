import React from "react";
import payment from "../../../../img/payment.jpg"
import { Link } from "react-router-dom";

const Subscriptionbizz = () => {
  return (
    <>
    <main>
   <main class="container">
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-4">Choose Your Subscription Plan !</h1>
    <p class="lead">Select from best plans,ensuring a perfect match.Need more or less?<br/>
    Customize your subscription for a seamless fit!</p>
  </div>

  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col">
      <div class="card mb-4 shadow-sm">
          
      <div class="card-header">
        <h4 class="my-0 fw-normal">Silver</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">555 Rs <small class="text-muted">/year</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>10 Create Offer</li>
          <li>Next subscription 10% off</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <Link to="/Paymentbizz" state={555}>
        <button type="button" class="w-100 btn btn-lg btn-primary">Get Started</button>
        </Link>
      </div>
    </div>
    </div>
    
    <div class="col">
      <div class="card mb-4 shadow-sm">
          
      <div class="card-header">
        <h4 class="my-0 fw-normal">Gold</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">5555 Rs<small class="text-muted">/year</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>50 Create Offer</li>
          <li>Next subscription 25% off</li>
          <li>Priority email support</li>
          <li>Help center access</li>
        </ul>
        <Link to="/Paymentbizz" state={5555}>
        <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
        </Link>
      </div>
    </div>
    </div>


    <div class="col">
      <div class="card mb-4 shadow-sm">        
      <div class="card-header">
        <h4 class="my-0 fw-normal">Platinum</h4>
      </div>
      
      <div class="card-body">
        <h1 class="card-title pricing-card-title">55555 Rs<small class="text-muted">/year</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>100 Create Offer</li>
          <li>Next subscription 50% off</li>
          <li>Phone and email support</li>
          <li>Help center access</li>
        </ul>
        <Link to="/Paymentbizz" state={55555}>
        <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
        </Link>
      </div>
    </div>
    </div>
  </div>

  <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
      <div class="col-12 col-md">
        <img class="mb-2" src={payment} alt="" width="250" height="250"/>
      </div>
      <div class="col-6 col-md">
        <h5>Features</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Cool stuff</a></li>
          <li><a class="link-secondary" href="#">Random feature</a></li>
          <li><a class="link-secondary" href="#">Team feature</a></li>
          <li><a class="link-secondary" href="#">Stuff for developers</a></li>
          <li><a class="link-secondary" href="#">Another one</a></li>
          <li><a class="link-secondary" href="#">Last time</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Resource</a></li>
          <li><a class="link-secondary" href="#">Resource name</a></li>
          <li><a class="link-secondary" href="#">Another resource</a></li>
          <li><a class="link-secondary" href="#">Final resource</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Team</a></li>
          <li><a class="link-secondary" href="#">Locations</a></li>
          <li><a class="link-secondary" href="#">Privacy</a></li>
          <li><a class="link-secondary" href="#">Terms</a></li>
        </ul>
      </div>
         </div>
        </footer>
        </main>
        </main>
    </>
  );
};

export default Subscriptionbizz;
