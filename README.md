# SpyCat
A WebRTC application to remotely spy on @antonk52's cats  

## The idea
SSH into a laptop, start the program, open a link that is shown in the console, see what the cats are up to. If they're not being nice, tell them.

## Suggestions
I found [this library named PeerJS](http://peerjs.com) which I think would be nice to use. It seems pretty easy and good.  
We were planning to boot this up through SSH. We could write a bash script, but I think going with Gulp would also be cool as we could use it in development and it would immediately be cross-platform.  

#### Potentially useful links
https://webrtchacks.com/baby-motion-detector/
https://github.com/jimCresswell/web-cam-motion-detection
http://reallygood.co.il/plugins/motion/
http://www.soundstep.com/blog/experiments/jsdetection/
https://www.google.nl/search?q=User+Media+Motion+detection
http://peerjs.com/docs/#start

Note that WebRTC seems to now require HTTPS, and thus most of these applications aren't working. I'm not sure how we can work around that. Maybe it's easier on localhost, we'll see.
