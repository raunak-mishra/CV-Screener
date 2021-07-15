console.log('CV Scanner');

const data = [
    {
        name: 'Raunak Mishra',
        age: 19,
        city: 'Mumbai',
        languages: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/34.jpg'
    },
    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Banglore',
        languages: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/25.jpg'
    },
    {
        name: 'Camila Cabello',
        age: 19,
        city: 'Mumbai',
        languages: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Aishwarya Rai',
        age: 46,
        city: 'Mumbai',
        languages: 'python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'Rohit Sharma',
        age: 35,
        city: 'Jharkhand',
        languages: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    }

]

// CV Iterator
function cvIterator(profiles){
    let i = 0;
    return{
        next: function(){
            return i<profiles.length?
            {value: profiles[i++], done:false} : {done:true}
        }
    };
}

const candidates = cvIterator(data);
nextCV();
// Button Listener

const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate!=undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`
    profile.innerHTML =`<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age} years old</li>
    <li class="list-group-item">City: ${currentCandidate.city}</li>
    <li class="list-group-item">Languages:
    ${currentCandidate.languages}</li>
    <li class="list-group-item">Framework:
    ${currentCandidate.framework}</li>
  </ul>`
    }
    else{
        alert(`Applications Ended`);
        window.location.reload();
    }
}