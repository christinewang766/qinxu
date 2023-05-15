// import useMediaQuery from "./hooks/useMediaQuery";
import { motion } from "framer-motion";

const Home = () => {
  // const isAboveMediumScreens = useMediaQuery("(min-width:1060px");

  return (
    
    /** background */
    <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
    <div>
      /** divide functional and gif into two grid */
      <div>
        /** functional box container */
        <div>
          /** divide functional into two grid*/
          <div>
            /** first grid */
            <div>
              /** ig pic */
              <img></img>
              /** i luv u */
              <img></img>
              /** misses u message */
              <div>
                frame
                <div>
                  inner frame
                  <p>christine misses you from ... km away!</p>
                </div>
              </div>
              /** second grind */
              <div>
                <img>christine</img>
                <img>qinxu</img>
                /** map frame */
                <div></div>
              </div>
            </div>
          </div>
        </div>
        /** gif box container */
        <div>
          <img>qinxu clouds</img>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Home;