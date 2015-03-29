(function() {
  'use strict';
  angular
    .module('app', [
      'ngCoolVideo'
    ])
    .controller('MainCtrl', function($scope) {
      var item1 = {
        source: {
          src: 'https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.mp4',
          poster: './snapshot/poster_PayPal_Austin2.jpg',
          config: {
            autoplay: false,
            loop: false
          }
        }
      };
      var item2 = {
        source: {
          src: [
            {
              url: 'http://iurevych.github.com/Flat-UI-videos/big_buck_bunny.mp4',
              type: 'video/mp4'
            },
            {
              url: 'http://iurevych.github.com/Flat-UI-videos/big_buck_bunny.webm',
              type: 'video/webm'
            }
          ],
          poster: 'http://designmodo.github.io/Flat-UI/docs/assets/img/video/poster.jpg',
          config: {
            autoplay: false,
            loop: true
          }
        }
      }
      $scope.items = [];
      $scope.items.push(item1);
      $scope.items.push(item2);
    })
})();
