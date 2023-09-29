//import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Background from "../fragments/background/Background";
import style from "../../../css/Presentation.module.css"
import blueImg from "../../../img/Otp.jpg";

const Otpvalidation = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
  
    function onCaptchVerify() {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              onSignup();
            },
            "expired-callback": () => {},
          },
          auth
        );
      }
    }
  
    function onSignup() {
      setLoading(true);
      onCaptchVerify();
      const appVerifier = window.recaptchaVerifier;
      const formatPh = "+" + ph;
      console.log(auth+"  "+ formatPh+" "+appVerifier);
      signInWithPhoneNumber(auth,formatPh,appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setLoading(false);
          setShowOTP(true);
          toast.success("OTP sended successfully!");
        })
        .catch((error) => 
        {
         //console.log(error);
         navigate("/Otpvalidation")
          setLoading(false);
        });
    }
  
    function onOTPVerify() {
      setLoading(true);
      window.confirmationResult
        .confirm(otp)
        .then(async (res) => {
        //   console.log(res);
        //   setUser(res.user);
        navigate("/login");
        setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  
    return (
       
      <section className={style.otpborder}>
     <section>
     <img className={style.otpi} src={blueImg}></img>
     </section>
     <div id="recaptcha-container"></div>     
        <div className={style.tag}>

          {(
            <div >
              <h1>&nbsp;&nbsp;&nbsp;
                Welcome<br/> Passion Pursuit
              </h1>
              {showOTP ? (
                <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label
                    htmlFor="otp" >
                    Enter your OTP
                  </label><br/><br/>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container "
                  ></OtpInput><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    onClick={onOTPVerify}
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Verify OTP</span>
                  </button>
                </>
              ) : (
                <>
                  <label
                    htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Verify your phone number<br/>
                  </label><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <PhoneInput country={"in"} value={ph} onChange={setPh} /><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    onClick={onSignup}
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Send code via SMS</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
        <Background/>
      </section>

    );




}

export default Otpvalidation;