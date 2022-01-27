import React from "react";
import {Link} from "react-router-dom"
import Slideshow from "../components/Slideshow"

const About = () => {
  return (
      <div className="container about-container">
        <div align="center" className="slideshow">
                      <Slideshow className="slideshow"/ >
                      </div>

        <div className="row justify-content-md-center align-center">
          <div className="mbr-white col-md-10">
            <h3 className="mbr-section-subtitle pb-3 display-4" align="center">
              ABOUT PARKS AND REX
            </h3>
            <p align="center">

              Have you ever wondered what it would be like to go back to a time where the trivialities of modern life were non-existent? We all try to escape the mundane day-to-day through beach vacations and new experiences, but as the world has grown, truly unique experiences have all but disappeared. Five brave men have made it their life's mission to transport you not only to a unique place, but also to a time we have only seen through the remanants of fossils and stones. Parks and Rex is the culmination of decades of genetic manipulation to bring the wonders of the Mesozoic Era to our time. You heard that right: Dinosaurs! We five Dino Boiz have curated the premier safari experience with creatures once lost to time, and it is our pleasure to bring this experience to you! But be warned! Once you step back in time with us here at Parks and Rex, you might never want (or be able) to return home!
            {/* EXT	JUNGLE	NIGHT

An eyeball, big, yellowish, distinctly inhuman, stares raptly 
between wooden slats, part of a large crate.  The eye darts from side 
to side, alert as hell.

A legend tries to place us - -

ISLA NUBLAR
120 MILES WEST OF COSTA RICA

- - but to us it's still the middle of nowhere.

It's quiet for a second.  A ROAR rises up from the jungle, 
deafening.  The trees shake as something very, very large plows ahead 
through them, right at us.  Every head gathered in this little clearing 
snaps, turning in the direction of the sound as it bursts through the 
trees.

It's a bulldozer.  It drops its scoop and pushes forward into 
the back end of the crate, shoving it across the jungle floor towards 
an impressive fenced structure that towers over an enclosed section of 
thick jungle.  There's a guard tower at one end of this holding open 
that makes it look like San Quentin.

The bulldozer pushes forward into the back end, the crate THUDS 
TO THE FLOOR.  A door slides open in the pen, making a space as big as 
the end of the crate.

Nobody moves for a second,  A grim-faced guy who seems to be in 
charge (Robert Muldoon, although we don't know it yet).

      MULDOON
  Alright now, pushers move in.  Loading team move it.

The movement as agitated whatever is inside the crate, and the 
whole thing shivers as GROWLS and SNAPS come from inside.
Everyone moves back. */}
            </p>
            <div align="center">
            <Link to="/shop">
            <button>Book Your Visit Now</button>
          </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
