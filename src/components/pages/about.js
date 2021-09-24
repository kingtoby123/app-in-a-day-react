import React from 'react';


export default function about(props) {
    return (
        <div className="about-wrapper">
           <Header />
            <div className="page-container">
                <div className="content-wrapper">
                    <img src="https://i.postimg.cc/52GfVDY3/Big-Blue-Tank.jpg" alt="Featured Tank" id="BigBlueTank" width="25%"/>
                    <p className="about-us-text">Hello! I'm Patrick Neary, creator of Neary Brothers Aquatics! My brothers aren't really involved but if they ever want to be, the name is ready! I have been keeping fish since I was 12 years old. It's been a dream of mine to one day have a fish room. Now I'm living that dream! I researched a lot of fish rooms and built my first one after framing in half of my parents' garage. Here are some pictures of that if you're interested. <a href="https://www.facebook.com/media/set/?set=a.503862638677&type=3" target="_blank">First Fish Room!</a> It was running when I was in Seminary. I would come back up regularly and take care of a few things, but my parents fed the fish and bred some angels while I was in school. Then an ice-storm came and that was the end of that first fish room. </p>
                    <p className="about-us-text">After I bought a place in Fort Worth I had a sun room built with plans to make it a fish room. After reading up on aquaponics and seeing how various plants could filter the water for large food fish like tilapia, catfish, and trout, I thought surely these plants could filter water for the pretty little aquarium fish I like to keep. I had an unintentional small setup already after placing a potted pothos ivy plant at the top of a fish tank in my room because I didn't want to bother watering it. The tank was by a window and the pothos grew like crazy! It had leaves bigger than my hand. After scouring the internet looking for something linking aquaponics with aquariums, I found very few examples and the setups were small. So after a lot of research on regular systems, thinking, and planning, I built 2 1000 gallons system of tanks with a cut IBC tote with a grown bed that has a fill and drain siphon as my sump and have water pumped from there to all the tanks, draining back to the sump through gutters. Then I put it on YouTube so others could see the results!</p>
                </div>
            </div>
            <div className="60"></div>

            <div className="squares-wrapper">
                <div className="squares">
                    <div className="square">
                        <div className="img-wrapper">
                            <img src="https://i.postimg.cc/vH2srCzs/Triforce-tank.png" alt="Triforce Tank" width="25%" height="25%"/>
                        </div>

                        <div className="square-text-wrapper">
                            <h1>I call this my triforce tank.</h1>
                            <p className="about-us-text">It's a stack of 3 tanks, a 60 gallon on top with a 75 gallon footprint, just shorter (I love that tank) and 2 72 gallon bowfronts. It also has a 30 gallon plastic tote on the side. Water is pumped from the bottom 72 gallon to the top 60, then gravity takes it back down to the middle level 72 gallon tank and plastic tote, then on back down to the bottom 72 gallon tank. Note the air is pumped using USB pumps!</p>
                        </div>
                    </div>             
               
                    <div className="square">
                        <div className="square-text-wrapper">
                            <h1>The Fish Room / Sun Room / Aquaponics Room in all its glory!</h1>
                            <p className="about-us-text">The path down the middle seperates the two 1000 gallon systems, each with their own cut ibc tote as a sump. The smaller pvc running around the room carries the air to all the tanks. The larger pvc running around each side carries the water from the sumps to the top tanks. Gravity takes care of the rest. Note the jungle of pothos ivy growing everywhere! It keeps the water pristine for the fish!</p>
                        </div>

                        <div className="img-wrapper">
                            <img src="https://i.postimg.cc/bvtpNL1j/Fish-Room-1-9.png" alt="FishRoom1-9" width="25%" height="25%"/>
                        </div>
                    </div>
                </div>             
            </div>
            <Footer />
        </div>
    )
}