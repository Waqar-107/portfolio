## important!!!
When you are deploying your app you must deploy the production build of the app not the devlopment build.

If you are going to deploy it on <a href="https://www.heroku.com/home" target="blank">Heroku</a> then you must change a settings in the app settings on Heroku. Go to <i>settings -> Add Buildpacks</i> and add <a href="https://github.com/mars/create-react-app-buildpack" target="blank">this link</a> so that it deploys the production build. In my case, at first development build was deployed that took almost a minute to load the application. Now it takes no more than 6-7s 



The actual design is taken from https://brittanychiang.com/ 