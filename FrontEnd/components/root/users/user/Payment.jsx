import {useLocation, Link ,useNavigate} from "react-router-dom";
import cardpay from "../../../../img/cardpay.jpg"
import AuthenticationService from "../../../../api/authentication/AuthenticationService";
import { Button } from "bootstrap";

const Payment=()=> {
  const location= useLocation();
  let navigate=useNavigate();
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  const isBusinessLoggedIn = AuthenticationService.isBusinessLoggedIn();
function sucessfull()
{
  alert("Thank You For Subscription");
  if (isUserLoggedIn) {
    navigate(`/user-home`);
  } else if (isBusinessLoggedIn) {
    navigate(`/business-home`);
  }

}

  return (
    <div
      className="container  d-flex justify-content-center"
      style={{ height: "100vh", marginTop: "50px" }}
    >
       <img src={cardpay} width="700" height="520"></img>
      <div className="row col-5 ">
        <div className="box-2">
       
          <div className="box-inner-2">
            <div>
               
              <p className="fw-bold">Payment Details</p>
              <p className="dis mb-3">
                Complete your purchase by providing your payment details
              </p>
            </div>
            <form action="">
              <div className="mb-3">
                <p className="dis fw-bold mb-2">Email address</p>{" "}
                <input className="form-control" type="email" required />
              </div>
              <div>
                <p className="dis fw-bold mb-2">Card details</p>
                <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                  <div className="fab fa-cc-visa ps-3"></div>{" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card Details"
                    required
                  />&nbsp;&nbsp;&nbsp;
                  <div className="d-flex w-50">
                    {" "}
                    <input
                      type="text"
                      className="form-control px-0"
                      placeholder="MM/YY"
                      required
                    />{" "}&nbsp;&nbsp;&nbsp;
                    <input
                      type="password"
                      className="form-control px-0"
                      placeholder="CVV"
                      required
                    />{" "}&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
                <div className="my-3 cardname">
                  <p className="dis fw-bold mb-2">Cardholder name</p>{" "}
                  <input className="form-control" type="text" required />
                </div>
                <div className="address">
                  <div className="d-flex">
                    {" "}
                    <input
                      className="form-control zip"
                      type="text"
                      placeholder="Pin"
                      required
                    />{" "}
                    <input
                      className="form-control state"
                      type="text"
                      placeholder="State"
                      required
                    />{" "}
                  </div>

                  <div className="d-flex flex-column dis">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p className="fw-bold">Total</p>
                      <p className="fw-bold">
                        <span className="fas fa-dollar-sign"></span>
                        {""}
                      </p>
                    </div>
                    <button className="btn btn-primary mt-2" onClick={sucessfull}>
                    <div className="btn btn-primary mt-2">
                    Pay              
                      <span className="fas fa-dollar-sign px-1"></span>
                      {location.state}{" "}
                    </div></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
