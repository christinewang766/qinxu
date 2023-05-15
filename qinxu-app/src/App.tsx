// import { motion } from "framer-motion";
import "./App.css";
import PlaidBorder from "@/assets/border.png";
import IG from "@/assets/ig.png";
import Love from "@/assets/iluvu.png";
import Christine from "@/assets/christine-profile.png";
import Qinxu from "@/assets/qinxu-profile.png";
import Green from "@/assets/green-plaid.png";
import Button from "@/assets/button.png";
import Movie from "@/assets/fish.gif";
import Clouds from "@/assets/qinxu-clouds.gif";
import { useGeoLocation } from "./useGeoLocation";

function distance(lat: number, lng: number) {
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  var a =
    0.5 -
    c((lat - 49.08645) * p) / 2 +
    (c(49.08645 * p) * c(lat * p) * (1 - c((lng - -123.09834) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

function note() {
  alert("I am an alert box!");
}

function App() {
  const location = useGeoLocation();

  return (
    <>
      <div className="max-h-screen overflow-hidden bg-desktop-home bg-cover bg-center bg-no-repeat">
        <img
          src={PlaidBorder}
          className="h-auto max-w-full"
          alt="plaid border"
        />
        <div className="container grid max-w-full grid-cols-2">
          <div className="grid h-[90vh] max-w-full grid-rows-2 content-center justify-center align-middle">
            <div className="flex flex-row">
              <img
                src={IG}
                className="ml-[20px] h-auto max-w-[40%] pt-[10px]"
                alt="ig post"
              />
              <div className="grid max-w-full grid-rows-2 content-center justify-center">
                <div className="flex flex-col items-center justify-center pt-[150px]">
                  <img
                    src={Love}
                    className="max-w-[70%] items-center justify-center object-contain pb-[20px] pl-[15px] pt-[10px] drop-shadow-bold-shadow"
                    alt="i luv you"
                  />
                  <div className="flex max-w-[70%] items-center justify-center rounded-[1rem] border-[7px] border-dark bg-frog p-3 drop-shadow-bold-shadow">
                    <div className="text-md flex items-center justify-center rounded-[1rem] border-4 border-dotted border-dark bg-light p-3 text-dark">
                      christine misses you from{" "}
                      {location.loaded
                        ? distance(
                            location.coordinates.lat,
                            location.coordinates.lng
                          ).toFixed(2)
                        : "[plz enable location ❤]"}{" "}
                      km away!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group h-screen w-full">
              <div className="group-hover:hidden">
                <img
                  src={Movie}
                  className="ml-[20px] mt-[10px] max-h-[92%] min-w-[80%] items-center justify-center rounded-[1rem] border-[20px] border-frog hover:bg-white"
                  alt="Movie"
                />
              </div>

              <div className="hidden relative group-hover:flex">
                <img
                  src={Green}
                  className="ml-[20px] mt-[10px] max-h-[92%] min-w-[80%] items-center justify-center rounded-[1rem] border-[20px] border-frog hover:bg-white"
                  alt="Movie"
                />
                <h1 className="absolute text-md text-dark top-[40%] left-[45%] -translate-x-1/3 -translate-y-3/4 font-poppins">"Kimi no Na wa" reminds me of our friendship! If you haven't seen it, it's about two strangers who switch bodies and save a town. It refers to the Red String of Fate--which is where we come in. I'm so lucky to have you as a friend, and even though we've never met IRL, I feel like we've known each other for many alifetimes. Thank you for always staying connected with me.</h1>
              </div>
            </div>
          </div>
          <img
            src={Clouds}
            className="ml-[10%] mt-[20px] max-h-[85%] max-w-[100%]"
            alt="Clouds"
          />
        </div>
        <img
          src={PlaidBorder}
          className="absolute bottom-0 h-auto max-w-full rotate-180"
          alt="plaid border"
        />
        <img
          src={Christine}
          className="absolute bottom-0 max-h-[35%]"
          alt="Christine"
        />
        <img
          src={Qinxu}
          className="absolute bottom-0 ml-[40%] max-h-[50%]"
          alt="Qinxu"
        />
        <button>
          <img
            src={Button}
            className="absolute right-6 top-12 max-h-[120px] rotate-[-25deg]"
            alt="button"
            onClick={note}
          />
        </button>
      </div>
    </>
  );
}

export default App;
