import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "./About.css";

const About = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* About Us */}
      <div className="mbt">
        <div className="aboutBlock">
          <p className="abtTitle">About Us</p>
          <p className="abtPara">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
            facilisis felis, in scelerisque lectus. Proin tempor eu ipsum id
            lobortis. Sed vulputate libero vitae pellentesque malesuada. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Aliquam nisi arcu, volutpat sit amet sodales a,
            lacinia imperdiet velit. Mauris placerat egestas dictum. Duis nec
            scelerisque erat. Integer venenatis enim et leo pellentesque
            volutpat. Curabitur pretium sem ac odio sagittis scelerisque. Fusce
            semper tempus justo nec ultrices. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse
            faucibus diam eget ex tempor, in bibendum tellus porttitor. Sed a
            tristique enim. Proin volutpat suscipit luctus. Nulla in neque id
            urna molestie elementum id at leo. Cras consectetur, sapien quis
            aliquam porta, tellus elit bibendum libero, et ultrices justo mi
            quis ipsum. Cras cursus leo ut tellus varius auctor. Nulla facilisi.
            Vestibulum sodales ultrices ligula, vitae hendrerit urna facilisis
            et. Ut eu velit mattis quam pellentesque bibendum. Phasellus at
            convallis tellus. Fusce a ultricies nunc. Vestibulum vitae accumsan
            quam. Morbi vulputate elit sit amet leo dapibus maximus. Quisque
            tortor ipsum, mattis non enim eu, vestibulum volutpat turpis. Nulla
            lacinia tellus at molestie tincidunt. Aliquam ultricies lobortis
          </p>
          <p className="abtTitle">Terms & Conditions</p>
          <p className="abtPara">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
            facilisis felis, in scelerisque lectus. Proin tempor eu ipsum id
            lobortis. Sed vulputate libero vitae pellentesque malesuada. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Aliquam nisi arcu, volutpat sit amet sodales a,
            lacinia imperdiet velit. Mauris placerat egestas dictum. Duis nec
            scelerisque erat. Integer venenatis enim et leo pellentesque
            volutpat. Curabitur pretium sem ac odio sagittis scelerisque. Fusce
            semper tempus justo nec ultrices. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse
            faucibus diam eget ex tempor, in bibendum tellus porttitor.lestie
            tincidunt. Aliquam ultricies lobortis pretium.
          </p>
          <p className="abtTitle">Privacy Policy</p>
          <p className="abtPara">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
            facilisis felis, in scelerisque lectus. Proin tempor eu ipsum id
            lobortis. Sed vulputate libero vitae pellentesque malesuada. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Aliquam nisi arcu, volutpat sit amet sodales a,
            lacinia imperdiet velit. Mauris placerat egestas dictum. Duis nec
            scelerisque erat. Integer venenatis enim et leo pellentesque
            volutpat. Curabitur pretium sem ac odio sagittis scelerisque. Fusce
            semper tempus justo nec ultrices. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse
            faucibus diam eget ex tempor, in bibendum tellus porttitor.lestie
            tincidunt. Aliquam ultricies lobortis pretium.
          </p>
        </div>
        <div className="contactBlock">
          <p className="abtTitle">Contact Us</p>
          <div className="contactBox">
            <div className="contactInnerBox1">
              <div>
                <p>
                  <i class="fa-solid fa-location-dot"></i>
                </p>
                <p className="pop">22nd Street, 8th Avenue</p>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/cd89/e7e0/dfcf8e9ab325f2242dda27a72bcd0dbd?Expires=1699833600&Signature=MvaVWJzKyUdygvnJgiNCXZvx6ZLGb5Wz6JwIVFWHumKO4OEc4qQjZYJp9P60Qzs0lAqPo8eyZs6hesQ5BKm5IkcISuCRzdDNLm-~NesauecwAbO5XbEJ~jrsmhC5p6hjNNSbNMTDu9OKEv9EhF5QhQ0hd2mg1wH8IDj-rdw0w-Q9ASUKFLO89NesULWaBk4QAFwTBNa2gL--ugUNDWOftJiC93VB5-xDa2Y1w-Yq4-XqGyOHH-JhzN6F5XZ851ZkuuVHLCTSPIZuGmoJ1ARR3TekcsfMCL91Sst3gVa9BE~F8gl~-dZDobe-IUOxW905d9OIheTVxBVX59oQaPfQqg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="contactInnerBox2">
              <div>
                <div>
                  <p>
                    <i class="fa-solid fa-phone"></i>
                  </p>
                  <p>
                    <i class="fa-solid fa-envelope"></i>
                  </p>
                </div>
                <div>
                  <p className="pop">1234567890</p>
                  <p className="pop">email@gmail.com</p>
                </div>
              </div>
              <div>
                <p>FOLLOW US AT</p>
                <div className="sclIcons">
                  <p>
                    <i class="fa-brands fa-instagram"></i>
                  </p>
                  <p>
                    <i class="fa-brands fa-square-facebook"></i>
                  </p>
                  <p>
                    <i class="fa-brands fa-twitter"></i>
                  </p>
                  <p>
                    <i class="fa-brands fa-square-pinterest"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="mbt">
        <div className="socialMedia">
          <input type="text" placeholder="Please enter you email to join us" />
        </div>
      </div>

      {/* Footer */}
      <div className="mb">
        <Footer />
      </div>
    </>
  );
};

export default About;
