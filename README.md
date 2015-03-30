### Cool Video Player angular module

*********

#### snapshots show :)

![snap1](./snapshot/snap1.png)

![snap2](./snapshot/snap2.png)


#### now how to use it?

1. include src/ng-cool-video.js and src/ng-cool-video.css in your html

2. inject module in your app like `angular.module('app', ['ngCoolVideo'])`

3. directive stuff in your html markup `<ng-cool-video source="source"></ng-cool-video>`

4. in controller you should give a source object     

**source object like below**


    source: {
      src: 'your video src', //needed
      poster: 'your poster url', //optional
      config: { //this optional
        autoplay: true,
        loop: true
      }
    }

**the source.src also can be an array**

    source: {
      src: [
        {url: 'video src', type: 'video/mp4'},
        {url: 'video src', type: 'video/webm'}
      ],
    }

### finally we get our video player, happy? you should :)

#### if you want to style it, just modify the css file! :)
#### you can clone this and `bower install`, check dummy demo in html, love ya all!
