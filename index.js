console.log('this is cv screening');

const data = [
    {
        uname:'ak',
        age:22,
        city:'managaluru',
        languages:'javascript',
        framework:'react',
        image:'https://randomuser.me/api/portraits/med/men/75.jpg'
    },
    {
        uname:'shafiq',
        age:22,
        city:'managaluru',
        languages:'python',
        framework:'readjangoct',
        image:'https://randomuser.me/api/portraits/med/men/50.jpg'
    },
    {
        uname:'suhail',
        age:22,
        city:'managaluru',
        languages:'html',
        framework:'angular',
        image:'https://randomuser.me/api/portraits/med/men/62.jpg'
    },
    {
        uname:'riza',
        age:22,
        city:'managaluru',
        languages:'sql',
        framework:'nodejs',
        image:'https://randomuser.me/api/portraits/med/men/69.jpg'
    },
    {
        uname:'sana',
        age:22,
        city:'udupi',
        languages:'java',
        framework:'view',
        image:'https://randomuser.me/api/portraits/med/women/75.jpg'
    }
];

// cv iterator

function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value:profiles[nextIndex++],done:false}:
            {done:true}
        }
    };
}
const candidates = cvIterator(data);
nextCv();
// console.log(candidate)
const next = document.getElementById('next');
next.addEventListener('click',nextCv);

function nextCv(){
    let currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate!=undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="lig-group">
    <li class="list-group-item">Name:${currentCandidate.uname}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.languages}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework}</li>
    </ul>`;
    }
    else{
        alert('End of application');
        window.location.reload()
    }
}