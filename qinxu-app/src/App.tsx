// import { motion } from "framer-motion";
import PlaidBorder from "@/assets/border.png";
import IG from "@/assets/ig.png";
import Love from "@/assets/iluvu.png";
import Christine from "@/assets/christine-profile.png";
import Qinxu from "@/assets/qinxu-profile.png";
import Clouds from "@/assets/qinxu-clouds.gif";
import { useGeoLocation } from "./useGeoLocation";

function distance(lat:number, lng:number) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat - 49.086450) * p)/2 + 
          c(49.086450 * p) * c(lat * p) * 
          (1 - c((lng - (-123.098340)) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

function App() {
  const location = useGeoLocation();

  return (
    <>
      <div className="max-h-screen bg-desktop-home bg-cover bg-center bg-no-repeat">
        <img
          src={PlaidBorder}
          className="h-auto max-w-full"
          alt="plaid border"
        ></img>
        <div className="container grid max-w-full grid-cols-2">
          <div className="grid h-[90vh] max-w-full grid-rows-2 content-center justify-center align-middle">
            <div className="flex flex-row">
              <img
                src={IG}
                className="h-auto max-w-[40%] pt-[10px]"
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
                      christine misses you from {location.loaded ? distance(location.coordinates.lat,location.coordinates.lng).toFixed(2)
                       : "[plz enable location ❤]"} km away!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-w-[90%] items-center justify-center rounded-[1rem] border-[20px] border-[#B4D7EB] bg-[#F0F0F0] p-3 align-middle">



            </div>
          </div>

          <img src={Clouds} className="ml-[10%] mt-[20px] max-w-[100%] max-h-[85%]" alt="Clouds" />
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
      </div>
    </>
  );
}

export default App;