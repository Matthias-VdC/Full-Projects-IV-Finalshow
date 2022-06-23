# Full Projects IV - Web Platform

_Djari Ilyes, Mayorga Mera Ricardo, Van De Casteele Matthias, Dossoine Benoît, Janssens Finn_

**Backend-server doesn't have HTTPS**

Things we've tried to fix this:

- Use cors-anywhere (https://github.com/Rob--W/cors-anywhere) server hosted on Heroku (https://mighty-earth-63459.herokuapp.com/)
  - API-calls go through this server and fixes the fetching of data. Example call: https://mighty-earth-63459.herokuapp.com/http://finalshowcasebackend.be/finalwork
- I've written a NodeJS app that fetches an image with a given image name (passed as a url parameter). This server saves this image to it's file system, sends it to the user and then deletes the image. The idea was to host this Node server on Heroku and fetch the images and videos from there but sadly the heroku filesystem does not support this. (https://github.com/FinnJanssensEHB/image-server)


## Deployment documentation

Repository link: https://github.com/EHB-MCT/Full-Projects-IV-web-platform.git
Website: https://finalshow.be/
The platform was built using the React library (https://reactjs.org/).

```
git clone https://github.com/EHB-MCT/Full-Projects-IV-web-platform.git

cd Full-Projects-IV-web-platform

npm i

npm start

```

**The current working release lives on the development branch.**

_used packages_

- react-router-dom: https://www.npmjs.com/package/react-router-dom
- react-three-fiber: https://www.npmjs.com/package/@react-three/fiber
- react-burger-menu: https://www.npmjs.com/package/react-burger-menu
- react-countdown: https://www.npmjs.com/package/react-countdown
- react-ga: https://www.npmjs.com/package/react-ga
- react-player: https://www.npmjs.com/package/react-player
