require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"OrientationEvents":[function(require,module,exports){
// Generated by CoffeeScript 1.9.1

/*

Based with values documented in:

deviceorientation -> https://developer.mozilla.org/en-US/docs/Web/Events/deviceorientation
devicemotion - > https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion
 */
var _motion, _orientation, filteredAlpha, filteredBeta, filteredGamma, filteredGravX, filteredGravY, filteredGravZ, filteredX, filteredY, filteredZ;

exports.orientation = null;

exports.motion = null;

exports.smoothOrientation = 1;

exports.smoothMotion = 1;

filteredAlpha = 0;

filteredBeta = 0;

filteredGamma = 0;

filteredX = 0;

filteredY = 0;

filteredZ = 0;

filteredGravX = 0;

filteredGravY = 0;

filteredGravZ = 0;

exports.OrientationEvents = function() {
  var events;
  return events = (function() {
    switch (false) {
      case !(window.DeviceOrientationEvent && !window.DeviceMotionEvent):
        window.addEventListener("deviceorientation", _orientation);
        return print("Device motion events are not support on this device.");
      case !(window.DeviceMotionEvent && !window.DeviceOrientationEvent):
        window.addEventListener("devicemotion", _motion);
        return print("Device orientation events are not suported on this device");
      case !(window.DeviceOrientationEvent && window.DeviceMotionEvent):
        window.addEventListener("deviceorientation", _orientation);
        return window.addEventListener("devicemotion", _motion);
      default:
        return print("Device orientation and motion events are not support on this device.");
    }
  })();
};

_motion = function(event) {
  filteredX = (event.acceleration.x * exports.smoothMotion) + (filteredX * (1 - exports.smoothMotion));
  filteredY = (event.acceleration.y * exports.smoothMotion) + (filteredY * (1 - exports.smoothMotion));
  filteredZ = (event.acceleration.z * exports.smoothMotion) + (filteredZ * (1 - exports.smoothMotion));
  filteredGravX = (event.accelerationIncludingGravity.x * exports.smoothMotion) + (filteredGravX * (1 - exports.smoothMotion));
  filteredGravY = (event.accelerationIncludingGravity.y * exports.smoothMotion) + (filteredGravY * (1 - exports.smoothMotion));
  filteredGravZ = (event.accelerationIncludingGravity.z * exports.smoothMotion) + (filteredGravZ * (1 - exports.smoothMotion));
  exports.motion = {
    x: filteredX,
    y: filteredY,
    z: filteredZ,
    gravX: filteredGravX,
    gravY: filteredGravY,
    gravZ: filteredGravZ,
    rotationRate: event.rotationRate,
    interval: event.interval
  };
  return motion;
};

_orientation = function(event) {
  filteredAlpha = (event.alpha * exports.smoothOrientation) + (filteredAlpha * (1 - exports.smoothOrientation));
  filteredBeta = (event.beta * exports.smoothOrientation) + (filteredBeta * (1 - exports.smoothOrientation));
  filteredGamma = (event.gamma * exports.smoothOrientation) + (filteredGamma * (1 - exports.smoothOrientation));
  exports.orientation = {
    alpha: filteredAlpha,
    beta: filteredBeta,
    gamma: filteredGamma,
    absolute: event.absolute
  };
  return orientation;
};

},{}],"OrientationEvents":[function(require,module,exports){

/*

Based with values documented in:

deviceorientation -> https://developer.mozilla.org/en-US/docs/Web/Events/deviceorientation
devicemotion - > https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion
 */
var _motion, _orientation, filteredAlpha, filteredBeta, filteredGamma, filteredGravX, filteredGravY, filteredGravZ, filteredX, filteredY, filteredZ;

exports.orientation = null;

exports.motion = null;

exports.smoothOrientation = 1;

exports.smoothMotion = 1;

filteredAlpha = 0;

filteredBeta = 0;

filteredGamma = 0;

filteredX = 0;

filteredY = 0;

filteredZ = 0;

filteredGravX = 0;

filteredGravY = 0;

filteredGravZ = 0;

exports.OrientationEvents = function() {
  var events;
  return events = (function() {
    switch (false) {
      case !(window.DeviceOrientationEvent && !window.DeviceMotionEvent):
        window.addEventListener("deviceorientation", _orientation);
        return print("Device motion events are not support on this device.");
      case !(window.DeviceMotionEvent && !window.DeviceOrientationEvent):
        window.addEventListener("devicemotion", _motion);
        return print("Device orientation events are not suported on this device");
      case !(window.DeviceOrientationEvent && window.DeviceMotionEvent):
        window.addEventListener("deviceorientation", _orientation);
        return window.addEventListener("devicemotion", _motion);
      default:
        return print("Device orientation and motion events are not support on this device.");
    }
  })();
};

_motion = function(event) {
  filteredX = (event.acceleration.x * exports.smoothMotion) + (filteredX * (1 - exports.smoothMotion));
  filteredY = (event.acceleration.y * exports.smoothMotion) + (filteredY * (1 - exports.smoothMotion));
  filteredZ = (event.acceleration.z * exports.smoothMotion) + (filteredZ * (1 - exports.smoothMotion));
  filteredGravX = (event.accelerationIncludingGravity.x * exports.smoothMotion) + (filteredGravX * (1 - exports.smoothMotion));
  filteredGravY = (event.accelerationIncludingGravity.y * exports.smoothMotion) + (filteredGravY * (1 - exports.smoothMotion));
  filteredGravZ = (event.accelerationIncludingGravity.z * exports.smoothMotion) + (filteredGravZ * (1 - exports.smoothMotion));
  exports.motion = {
    x: filteredX,
    y: filteredY,
    z: filteredZ,
    gravX: filteredGravX,
    gravY: filteredGravY,
    gravZ: filteredGravZ,
    rotationRate: event.rotationRate,
    interval: event.interval
  };
  return motion;
};

_orientation = function(event) {
  filteredAlpha = (event.alpha * exports.smoothOrientation) + (filteredAlpha * (1 - exports.smoothOrientation));
  filteredBeta = (event.beta * exports.smoothOrientation) + (filteredBeta * (1 - exports.smoothOrientation));
  filteredGamma = (event.gamma * exports.smoothOrientation) + (filteredGamma * (1 - exports.smoothOrientation));
  exports.orientation = {
    alpha: filteredAlpha,
    beta: filteredBeta,
    gamma: filteredGamma,
    absolute: event.absolute
  };
  return orientation;
};



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9kYW5pZWwvR2l0aHViL25pY2UtbG9vcHMvbW9pcmUuZnJhbWVyL21vZHVsZXMvT3JpZW50YXRpb25FdmVudHMuanMiLCIvVXNlcnMvZGFuaWVsL0dpdGh1Yi9uaWNlLWxvb3BzL21vaXJlLmZyYW1lci9tb2R1bGVzL09yaWVudGF0aW9uRXZlbnRzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQUE7Ozs7OztHQUFBO0FBQUEsSUFBQSwrSUFBQTs7QUFBQSxPQVlPLENBQUMsV0FBUixHQUFzQixJQVp0QixDQUFBOztBQUFBLE9BZU8sQ0FBQyxNQUFSLEdBQWlCLElBZmpCLENBQUE7O0FBQUEsT0FrQk8sQ0FBQyxpQkFBUixHQUE0QixDQWxCNUIsQ0FBQTs7QUFBQSxPQW1CTyxD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O0FBQUEsQ0EzRWYsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuOS4xXG5cbi8qXG5cbkJhc2VkIHdpdGggdmFsdWVzIGRvY3VtZW50ZWQgaW46XG5cbmRldmljZW9yaWVudGF0aW9uIC0+IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9kZXZpY2VvcmllbnRhdGlvblxuZGV2aWNlbW90aW9uIC0gPiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvZGV2aWNlbW90aW9uXG4gKi9cbnZhciBfbW90aW9uLCBfb3JpZW50YXRpb24sIGZpbHRlcmVkQWxwaGEsIGZpbHRlcmVkQmV0YSwgZmlsdGVyZWRHYW1tYSwgZmlsdGVyZWRHcmF2WCwgZmlsdGVyZWRHcmF2WSwgZmlsdGVyZWRHcmF2WiwgZmlsdGVyZWRYLCBmaWx0ZXJlZFksIGZpbHRlcmVkWjtcblxuZXhwb3J0cy5vcmllbnRhdGlvbiA9IG51bGw7XG5cbmV4cG9ydHMubW90aW9uID0gbnVsbDtcblxuZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbiA9IDE7XG5cbmV4cG9ydHMuc21vb3RoTW90aW9uID0gMTtcblxuZmlsdGVyZWRBbHBoYSA9IDA7XG5cbmZpbHRlcmVkQmV0YSA9IDA7XG5cbmZpbHRlcmVkR2FtbWEgPSAwO1xuXG5maWx0ZXJlZFggPSAwO1xuXG5maWx0ZXJlZFkgPSAwO1xuXG5maWx0ZXJlZFogPSAwO1xuXG5maWx0ZXJlZEdyYXZYID0gMDtcblxuZmlsdGVyZWRHcmF2WSA9IDA7XG5cbmZpbHRlcmVkR3JhdlogPSAwO1xuXG5leHBvcnRzLk9yaWVudGF0aW9uRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBldmVudHM7XG4gIHJldHVybiBldmVudHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoIChmYWxzZSkge1xuICAgICAgY2FzZSAhKHdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50ICYmICF3aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQpOlxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZW9yaWVudGF0aW9uXCIsIF9vcmllbnRhdGlvbik7XG4gICAgICAgIHJldHVybiBwcmludChcIkRldmljZSBtb3Rpb24gZXZlbnRzIGFyZSBub3Qgc3VwcG9ydCBvbiB0aGlzIGRldmljZS5cIik7XG4gICAgICBjYXNlICEod2luZG93LkRldmljZU1vdGlvbkV2ZW50ICYmICF3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudCk6XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlbW90aW9uXCIsIF9tb3Rpb24pO1xuICAgICAgICByZXR1cm4gcHJpbnQoXCJEZXZpY2Ugb3JpZW50YXRpb24gZXZlbnRzIGFyZSBub3Qgc3Vwb3J0ZWQgb24gdGhpcyBkZXZpY2VcIik7XG4gICAgICBjYXNlICEod2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgd2luZG93LkRldmljZU1vdGlvbkV2ZW50KTpcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VvcmllbnRhdGlvblwiLCBfb3JpZW50YXRpb24pO1xuICAgICAgICByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2Vtb3Rpb25cIiwgX21vdGlvbik7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcHJpbnQoXCJEZXZpY2Ugb3JpZW50YXRpb24gYW5kIG1vdGlvbiBldmVudHMgYXJlIG5vdCBzdXBwb3J0IG9uIHRoaXMgZGV2aWNlLlwiKTtcbiAgICB9XG4gIH0pKCk7XG59O1xuXG5fbW90aW9uID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgZmlsdGVyZWRYID0gKGV2ZW50LmFjY2VsZXJhdGlvbi54ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkWCAqICgxIC0gZXhwb3J0cy5zbW9vdGhNb3Rpb24pKTtcbiAgZmlsdGVyZWRZID0gKGV2ZW50LmFjY2VsZXJhdGlvbi55ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkWSAqICgxIC0gZXhwb3J0cy5zbW9vdGhNb3Rpb24pKTtcbiAgZmlsdGVyZWRaID0gKGV2ZW50LmFjY2VsZXJhdGlvbi56ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkWiAqICgxIC0gZXhwb3J0cy5zbW9vdGhNb3Rpb24pKTtcbiAgZmlsdGVyZWRHcmF2WCA9IChldmVudC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnggKiBleHBvcnRzLnNtb290aE1vdGlvbikgKyAoZmlsdGVyZWRHcmF2WCAqICgxIC0gZXhwb3J0cy5zbW9vdGhNb3Rpb24pKTtcbiAgZmlsdGVyZWRHcmF2WSA9IChldmVudC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnkgKiBleHBvcnRzLnNtb290aE1vdGlvbikgKyAoZmlsdGVyZWRHcmF2WSAqICgxIC0gZXhwb3J0cy5zbW9vdGhNb3Rpb24pKTtcbiAgZmlsdGVyZWRHcmF2WiA9IChldmVudC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnogKiBleHBvcnRzLnNtb290aE1vdGlvbikgKyAoZmlsdGVyZWRHcmF2WiAqICgxIC0gZXhwb3J0cy5zbW9vdGhNb3Rpb24pKTtcbiAgZXhwb3J0cy5tb3Rpb24gPSB7XG4gICAgeDogZmlsdGVyZWRYLFxuICAgIHk6IGZpbHRlcmVkWSxcbiAgICB6OiBmaWx0ZXJlZFosXG4gICAgZ3Jhdlg6IGZpbHRlcmVkR3JhdlgsXG4gICAgZ3Jhdlk6IGZpbHRlcmVkR3JhdlksXG4gICAgZ3Jhdlo6IGZpbHRlcmVkR3JhdlosXG4gICAgcm90YXRpb25SYXRlOiBldmVudC5yb3RhdGlvblJhdGUsXG4gICAgaW50ZXJ2YWw6IGV2ZW50LmludGVydmFsXG4gIH07XG4gIHJldHVybiBtb3Rpb247XG59O1xuXG5fb3JpZW50YXRpb24gPSBmdW5jdGlvbihldmVudCkge1xuICBmaWx0ZXJlZEFscGhhID0gKGV2ZW50LmFscGhhICogZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikgKyAoZmlsdGVyZWRBbHBoYSAqICgxIC0gZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikpO1xuICBmaWx0ZXJlZEJldGEgPSAoZXZlbnQuYmV0YSAqIGV4cG9ydHMuc21vb3RoT3JpZW50YXRpb24pICsgKGZpbHRlcmVkQmV0YSAqICgxIC0gZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikpO1xuICBmaWx0ZXJlZEdhbW1hID0gKGV2ZW50LmdhbW1hICogZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikgKyAoZmlsdGVyZWRHYW1tYSAqICgxIC0gZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikpO1xuICBleHBvcnRzLm9yaWVudGF0aW9uID0ge1xuICAgIGFscGhhOiBmaWx0ZXJlZEFscGhhLFxuICAgIGJldGE6IGZpbHRlcmVkQmV0YSxcbiAgICBnYW1tYTogZmlsdGVyZWRHYW1tYSxcbiAgICBhYnNvbHV0ZTogZXZlbnQuYWJzb2x1dGVcbiAgfTtcbiAgcmV0dXJuIG9yaWVudGF0aW9uO1xufTtcbiIsIiMjI1xuXG5CYXNlZCB3aXRoIHZhbHVlcyBkb2N1bWVudGVkIGluOlxuXG5kZXZpY2VvcmllbnRhdGlvbiAtPiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvZGV2aWNlb3JpZW50YXRpb25cbmRldmljZW1vdGlvbiAtID4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL2RldmljZW1vdGlvblxuXG4jIyNcblxuIyDigJPigJPigJPigJMgVkFSSUFCTEVTXG5cbiMgT3JpZW50YXRpb24gdmFsdWVzXG5leHBvcnRzLm9yaWVudGF0aW9uID0gbnVsbFxuXG4jIE1vdGlvbiBWYWx1ZXNcbmV4cG9ydHMubW90aW9uID0gbnVsbFxuXG4jIFVzZWQgZm9yIHNtb290aGluZyBvdXQgZGF0YSB2YWx1ZXNcbmV4cG9ydHMuc21vb3RoT3JpZW50YXRpb24gPSAxXG5leHBvcnRzLnNtb290aE1vdGlvbiA9IDFcblxuIyBGaWx0ZXJlZCB2YXJpYWJsZXMgZm9yIG9yaWVudGF0aW9uXG5maWx0ZXJlZEFscGhhID0gMFxuZmlsdGVyZWRCZXRhID0gMFxuZmlsdGVyZWRHYW1tYSA9IDBcblxuIyBGaWx0ZXJlZCB2YXJpYWJsZXMgZm9yIG1vdGlvblxuZmlsdGVyZWRYID0gMFxuZmlsdGVyZWRZID0gMFxuZmlsdGVyZWRaID0gMFxuZmlsdGVyZWRHcmF2WCA9IDBcbmZpbHRlcmVkR3JhdlkgPSAwXG5maWx0ZXJlZEdyYXZaID0gMFxuXG4jIOKAk+KAk+KAk+KAkyBQVUJMSUNcblxuZXhwb3J0cy5PcmllbnRhdGlvbkV2ZW50cyA9IC0+XG5cdGV2ZW50cyA9IHN3aXRjaFxuXHRcdHdoZW4gd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgISh3aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQpXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciBcImRldmljZW9yaWVudGF0aW9uXCIsIF9vcmllbnRhdGlvblxuXG5cdFx0XHRwcmludCBcIkRldmljZSBtb3Rpb24gZXZlbnRzIGFyZSBub3Qgc3VwcG9ydCBvbiB0aGlzIGRldmljZS5cIlxuXHRcdHdoZW4gd2luZG93LkRldmljZU1vdGlvbkV2ZW50ICYmICEod2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQpXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciBcImRldmljZW1vdGlvblwiLCBfbW90aW9uXG5cblx0XHRcdHByaW50IFwiRGV2aWNlIG9yaWVudGF0aW9uIGV2ZW50cyBhcmUgbm90IHN1cG9ydGVkIG9uIHRoaXMgZGV2aWNlXCJcblx0XHR3aGVuIHdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50ICYmIHdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudFxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIgXCJkZXZpY2VvcmllbnRhdGlvblwiLCBfb3JpZW50YXRpb25cblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIFwiZGV2aWNlbW90aW9uXCIsIF9tb3Rpb25cblx0XHRlbHNlIFxuXHRcdFx0cHJpbnQgXCJEZXZpY2Ugb3JpZW50YXRpb24gYW5kIG1vdGlvbiBldmVudHMgYXJlIG5vdCBzdXBwb3J0IG9uIHRoaXMgZGV2aWNlLlwiXG5cbiMg4oCT4oCT4oCT4oCTIFBSSVZBVEVcblxuX21vdGlvbiA9IChldmVudCkgLT5cblx0ZmlsdGVyZWRYID0gKGV2ZW50LmFjY2VsZXJhdGlvbi54ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkWCAqICgxLWV4cG9ydHMuc21vb3RoTW90aW9uKSlcblx0ZmlsdGVyZWRZID0gKGV2ZW50LmFjY2VsZXJhdGlvbi55ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkWSAqICgxLWV4cG9ydHMuc21vb3RoTW90aW9uKSlcblx0ZmlsdGVyZWRaID0gKGV2ZW50LmFjY2VsZXJhdGlvbi56ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkWiAqICgxLWV4cG9ydHMuc21vb3RoTW90aW9uKSlcblxuXHRmaWx0ZXJlZEdyYXZYID0gKGV2ZW50LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueCAqIGV4cG9ydHMuc21vb3RoTW90aW9uKSArIChmaWx0ZXJlZEdyYXZYICogKDEtZXhwb3J0cy5zbW9vdGhNb3Rpb24pKVxuXHRmaWx0ZXJlZEdyYXZZID0gKGV2ZW50LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueSAqIGV4cG9ydHMuc21vb3RoTW90aW9uKSArIChmaWx0ZXJlZEdyYXZZICogKDEtZXhwb3J0cy5zbW9vdGhNb3Rpb24pKVxuXHRmaWx0ZXJlZEdyYXZaID0gKGV2ZW50LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueiAqIGV4cG9ydHMuc21vb3RoTW90aW9uKSArIChmaWx0ZXJlZEdyYXZaICogKDEtZXhwb3J0cy5zbW9vdGhNb3Rpb24pKVxuXG5cdGV4cG9ydHMubW90aW9uID0gXG5cdFx0eDogZmlsdGVyZWRYXG5cdFx0eTogZmlsdGVyZWRZXG5cdFx0ejogZmlsdGVyZWRaXG5cdFx0Z3Jhdlg6IGZpbHRlcmVkR3Jhdlhcblx0XHRncmF2WTogZmlsdGVyZWRHcmF2WVxuXHRcdGdyYXZaOiBmaWx0ZXJlZEdyYXZaXG5cdFx0cm90YXRpb25SYXRlOiBldmVudC5yb3RhdGlvblJhdGVcblx0XHRpbnRlcnZhbDogZXZlbnQuaW50ZXJ2YWxcblxuXHRyZXR1cm4gbW90aW9uXG5cbl9vcmllbnRhdGlvbiA9IChldmVudCkgLT5cblx0ZmlsdGVyZWRBbHBoYSA9IChldmVudC5hbHBoYSAqIGV4cG9ydHMuc21vb3RoT3JpZW50YXRpb24pICsgKGZpbHRlcmVkQWxwaGEgKiAoMS0gZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikpXG5cdGZpbHRlcmVkQmV0YSA9IChldmVudC5iZXRhICogZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikgKyAoZmlsdGVyZWRCZXRhICogKDEtIGV4cG9ydHMuc21vb3RoT3JpZW50YXRpb24pKVxuXHRmaWx0ZXJlZEdhbW1hID0gKGV2ZW50LmdhbW1hICogZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikgKyAoZmlsdGVyZWRHYW1tYSAqICgxLSBleHBvcnRzLnNtb290aE9yaWVudGF0aW9uKSlcblxuXHRleHBvcnRzLm9yaWVudGF0aW9uID0gXG5cdFx0YWxwaGE6IGZpbHRlcmVkQWxwaGFcblx0XHRiZXRhOiBmaWx0ZXJlZEJldGFcblx0XHRnYW1tYTogZmlsdGVyZWRHYW1tYVxuXHRcdGFic29sdXRlOiBldmVudC5hYnNvbHV0ZVxuXG5cblx0cmV0dXJuIG9yaWVudGF0aW9uXG5cbiJdfQ==
