require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];



},{}],"page1module":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.page1module = (function(superClass) {
  var IF_lets_you_create, byIFTTT, calendar, facebook, gmail, instagram, iphone, page1, rss_feed, soundcloud, stocks, weather;

  extend(page1module, superClass);

  function page1module() {
    return page1module.__super__.constructor.apply(this, arguments);
  }

  page1 = new Layer({
    backgroundColor: "transparent",
    width: 640,
    height: 1334,
    x: 0,
    superLayer: page.content
  });

  iphone = new Layer({
    y: 82 * 2,
    width: 150 * 2,
    height: 300 * 2,
    image: "images/phone.png",
    superLayer: page1
  });

  iphone.centerX();

  IF_lets_you_create = new Layer({
    y: 402 * 2,
    width: 470,
    height: 130,
    image: "images/IF_lets_you_create.png",
    superLayer: page1
  });

  IF_lets_you_create.centerX();

  byIFTTT = new Layer({
    y: 491 * 2,
    width: 98 * 2,
    height: 30 * 2,
    image: "images/byIFTTT.png",
    superLayer: page1
  });

  byIFTTT.centerX();

  instagram = new Layer({
    x: 55 + 25 * 2,
    y: 199 * 2,
    width: 55 * 2,
    height: 55 * 2,
    image: "images/instagram.png",
    index: 2
  });

  rss_feed = new Layer({
    x: 55 + 45 * 2,
    y: 264 * 2,
    width: 36 * 2,
    height: 36 * 2,
    image: "images/rss_feed.png",
    index: 1
  });

  weather = new Layer({
    x: 55 + 37 * 2,
    y: 130 * 2,
    width: 62 * 2,
    height: 62 * 2,
    image: "images/weather.png",
    index: 1
  });

  facebook = new Layer({
    x: 55 + 241 * 2,
    y: 120 * 2,
    width: 27 * 2,
    height: 27 * 2,
    image: "images/facebook.png",
    index: 1
  });

  gmail = new Layer({
    x: 55 + 270 * 2,
    y: 175 * 2,
    width: 31 * 2,
    height: 23 * 2,
    image: "images/gmail.png",
    index: 1
  });

  calendar = new Layer({
    x: 55 + 203 * 2,
    y: 165 * 2,
    width: 55 * 2,
    height: 50 * 2,
    image: "images/icon_calendar.png",
    index: 2
  });

  stocks = new Layer({
    x: 55 + 230 * 2,
    y: 219 * 2,
    width: 61 * 2,
    height: 61 * 2,
    image: "images/stocks.png",
    index: 1
  });

  soundcloud = new Layer({
    x: 55 + 246 * 2,
    y: 292 * 2,
    width: 40 * 2,
    height: 40 * 2,
    image: "images/soundcloud.png",
    index: 1
  });

  return page1module;

})(Layer);



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGFuaWVsL0dpdGh1Yi9uaWNlLWxvb3BzL2lmdHR0LW9uYm9hcmRpbmctZHcuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiL1VzZXJzL2RhbmllbC9HaXRodWIvbmljZS1sb29wcy9pZnR0dC1vbmJvYXJkaW5nLWR3LmZyYW1lci9tb2R1bGVzL3BhZ2UxbW9kdWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0lBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLFlBQWhCLENBQUE7O0FBQUEsT0FFTyxDQUFDLFVBQVIsR0FBcUIsU0FBQSxHQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTixFQURvQjtBQUFBLENBRnJCLENBQUE7O0FBQUEsT0FLTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FMbEIsQ0FBQTs7Ozs7QUNEQSxJQUFBOzZCQUFBOztBQUFBLE9BQWEsQ0FBQztBQUdiLE1BQUEsdUhBQUE7O0FBQUEsaUNBQUEsQ0FBQTs7OztHQUFBOztBQUFBLEVBQUEsS0FBQSxHQUFZLElBQUEsS0FBQSxDQUNYO0FBQUEsSUFBQSxlQUFBLEVBQWlCLGFBQWpCO0FBQUEsSUFDQSxLQUFBLEVBQU8sR0FEUDtBQUFBLElBQ1ksTUFBQSxFQUFRLElBRHBCO0FBQUEsSUFFQSxDQUFBLEVBQUcsQ0FGSDtBQUFBLElBR0EsVUFBQSxFQUFZLElBQUksQ0FBQyxPQUhqQjtHQURXLENBQVosQ0FBQTs7QUFBQSxFQU9BLE1BQUEsR0FBYSxJQUFBLEtBQUEsQ0FDWjtBQUFBLElBQUEsQ0FBQSxFQUFHLEVBQUEsR0FBRyxDQUFOO0FBQUEsSUFDQSxLQUFBLEVBQU0sR0FBQSxHQUFJLENBRFY7QUFBQSxJQUNhLE1BQUEsRUFBTyxHQUFBLEdBQUksQ0FEeEI7QUFBQSxJQUVBLEtBQUEs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Iiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5jbGFzcyBleHBvcnRzLnBhZ2UxbW9kdWxlIGV4dGVuZHMgTGF5ZXJcbiMgcGFnZTFtb2R1bGUucGFnZTFwdXNoID0gLT5cblx0IyBwYWdlIDFcblx0cGFnZTEgPSBuZXcgTGF5ZXJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHRcdHdpZHRoOiA2NDAsIGhlaWdodDogMTMzNFxuXHRcdHg6IDBcblx0XHRzdXBlckxheWVyOiBwYWdlLmNvbnRlbnRcblx0XHRcblx0IyBwYWdlIDE6IGNvbnRlbnRcblx0aXBob25lID0gbmV3IExheWVyXG5cdFx0eTogODIqMlxuXHRcdHdpZHRoOjE1MCoyLCBoZWlnaHQ6MzAwKjJcblx0XHRpbWFnZTpcImltYWdlcy9waG9uZS5wbmdcIlxuXHRcdHN1cGVyTGF5ZXI6IHBhZ2UxXG5cdGlwaG9uZS5jZW50ZXJYKClcblxuXHRJRl9sZXRzX3lvdV9jcmVhdGUgPSBuZXcgTGF5ZXJcblx0XHR5OjQwMioyLCBcblx0XHR3aWR0aDo0NzAsIGhlaWdodDoxMzAsXG5cdFx0aW1hZ2U6XCJpbWFnZXMvSUZfbGV0c195b3VfY3JlYXRlLnBuZ1wiXG5cdFx0c3VwZXJMYXllcjogcGFnZTFcblx0SUZfbGV0c195b3VfY3JlYXRlLmNlbnRlclgoKVxuXG5cdGJ5SUZUVFQgPSBuZXcgTGF5ZXJcblx0XHR5OjQ5MSoyLCBcblx0XHR3aWR0aDo5OCoyLCBoZWlnaHQ6MzAqMixcblx0XHRpbWFnZTpcImltYWdlcy9ieUlGVFRULnBuZ1wiXG5cdFx0c3VwZXJMYXllcjogcGFnZTFcblx0YnlJRlRUVC5jZW50ZXJYKClcblxuXHQjIHBhZ2UgMTogY29udGVudCBOT1QgaW4gc2Nyb2xsdmlld1xuXHQjIGFkZGluZyA1NSB0byB0aGUgeCB0byBhY2NvdW50IGZvciBpUGhvbmUgNSB0byA2IHdpZHRoIGRpZmZlcmVuY2UgKDY0MC01NjAgPSAxMTAuIDExMC8yID0gNTUpXG5cdGluc3RhZ3JhbSA9IG5ldyBMYXllclxuXHRcdHg6IDU1ICsgMjUqMiwgeTogMTk5KjIsIFxuXHRcdHdpZHRoOiA1NSoyLCBoZWlnaHQ6IDU1KjIsIFxuXHRcdGltYWdlOiBcImltYWdlcy9pbnN0YWdyYW0ucG5nXCJcblx0XHRpbmRleDogMlxuXHRyc3NfZmVlZCA9IG5ldyBMYXllclxuXHRcdHg6IDU1ICsgNDUqMiwgeTogMjY0KjIsIFxuXHRcdHdpZHRoOiAzNioyLCBoZWlnaHQ6IDM2KjIsIFxuXHRcdGltYWdlOiBcImltYWdlcy9yc3NfZmVlZC5wbmdcIlxuXHRcdGluZGV4OiAxXG5cdHdlYXRoZXIgPSBuZXcgTGF5ZXJcblx0XHR4OiA1NSArIDM3KjIsIHk6IDEzMCoyLCBcblx0XHR3aWR0aDogNjIqMiwgaGVpZ2h0OiA2MioyLFxuXHRcdGltYWdlOiBcImltYWdlcy93ZWF0aGVyLnBuZ1wiXG5cdFx0aW5kZXg6IDFcblx0ZmFjZWJvb2sgPSBuZXcgTGF5ZXJcblx0XHR4OiA1NSArIDI0MSoyLCB5OiAxMjAqMiwgXG5cdFx0d2lkdGg6IDI3KjIsIGhlaWdodDogMjcqMixcblx0XHRpbWFnZTogXCJpbWFnZXMvZmFjZWJvb2sucG5nXCJcblx0XHRpbmRleDogMVxuXHRnbWFpbCA9IG5ldyBMYXllclxuXHRcdHg6IDU1ICsgMjcwKjIsIHk6IDE3NSoyLCBcblx0XHR3aWR0aDogMzEqMiwgaGVpZ2h0OiAyMyoyLFxuXHRcdGltYWdlOiBcImltYWdlcy9nbWFpbC5wbmdcIlxuXHRcdGluZGV4OiAxXG5cdGNhbGVuZGFyID0gbmV3IExheWVyXG5cdFx0eDogNTUgKyAyMDMqMiwgeTogMTY1KjIsIFxuXHRcdHdpZHRoOiA1NSoyLCBoZWlnaHQ6IDUwKjIsIFxuXHRcdGltYWdlOiBcImltYWdlcy9pY29uX2NhbGVuZGFyLnBuZ1wiXG5cdFx0aW5kZXg6IDJcblx0c3RvY2tzID0gbmV3IExheWVyXG5cdFx0eDogNTUgKyAyMzAqMiwgeTogMjE5KjIsIFxuXHRcdHdpZHRoOiA2MSoyLCBoZWlnaHQ6IDYxKjIsIFxuXHRcdGltYWdlOiBcImltYWdlcy9zdG9ja3MucG5nXCJcblx0XHRpbmRleDogMVxuXHRzb3VuZGNsb3VkID0gbmV3IExheWVyXG5cdFx0eDogNTUgKyAyNDYqMiwgeTogMjkyKjIsXG5cdFx0d2lkdGg6IDQwKjIsIGhlaWdodDogNDAqMiwgXG5cdFx0aW1hZ2U6IFwiaW1hZ2VzL3NvdW5kY2xvdWQucG5nXCJcblx0XHRpbmRleDogMVxuIl19
