"use strict";

console.log('CV Scanner');
var data = [{
  name: 'Raunak Mishra',
  age: 19,
  city: 'Mumbai',
  languages: 'python',
  framework: 'Django',
  image: 'https://randomuser.me/api/portraits/men/34.jpg'
}, {
  name: 'Shubham Sharma',
  age: 28,
  city: 'Banglore',
  languages: 'JavaScript',
  framework: 'Angular',
  image: 'https://randomuser.me/api/portraits/men/25.jpg'
}, {
  name: 'Camila Cabello',
  age: 19,
  city: 'Mumbai',
  languages: 'python',
  framework: 'Django',
  image: 'https://randomuser.me/api/portraits/women/75.jpg'
}, {
  name: 'Aishwarya Rai',
  age: 46,
  city: 'Mumbai',
  languages: 'python',
  framework: 'Flask',
  image: 'https://randomuser.me/api/portraits/women/75.jpg'
}, {
  name: 'Rohit Sharma',
  age: 35,
  city: 'Jharkhand',
  languages: 'Go',
  framework: 'Go Framework',
  image: 'https://randomuser.me/api/portraits/men/75.jpg'
}]; // CV Iterator

function cvIterator(profiles) {
  var i = 0;
  return {
    next: function next() {
      return i < profiles.length ? {
        value: profiles[i++],
        done: false
      } : {
        done: true
      };
    }
  };
}

var candidates = cvIterator(data);
nextCV(); // Button Listener

var next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
  var currentCandidate = candidates.next().value;
  var image = document.getElementById('image');
  var profile = document.getElementById('profile');

  if (currentCandidate != undefined) {
    image.innerHTML = "<img src='".concat(currentCandidate.image, "'>");
    profile.innerHTML = "<ul class=\"list-group\">\n    <li class=\"list-group-item\">Name: ".concat(currentCandidate.name, "</li>\n    <li class=\"list-group-item\">Age: ").concat(currentCandidate.age, " years old</li>\n    <li class=\"list-group-item\">City: ").concat(currentCandidate.city, "</li>\n    <li class=\"list-group-item\">Languages:\n    ").concat(currentCandidate.languages, "</li>\n    <li class=\"list-group-item\">Framework:\n    ").concat(currentCandidate.framework, "</li>\n  </ul>");
  } else {
    alert("Applications Ended");
    window.location.reload();
  }
}