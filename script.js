let outputcontainer = document.getElementById('outputcontainer')

function generator(){

let rand = Math.random()
let first , second , third
first = ['Tech', 'Green', 'Sky', 'Blue', 'Sun', 'Moon', 'Star', 'Eco', 'Bio', 'Smart']
second = ['Innovative', 'Creative', 'Dynamic', 'Global', 'Modern', 'Elegant', 'Bold', 'Vibrant', 'Inclusive', 'Strategic']
third = ['Solutions', 'Hub', 'Group', 'Ventures', 'Network', 'Innovations', 'Studio', 'Lab', 'Synergy', 'Systems']

let rrandomfirst = Math.random()*first.length | 0
let rrandomsecond = Math.random()*second.length | 0
let rrandomthird = Math.random()*third.length | 0

let final = alert(`Your Bussiness Name:\n${first[rrandomfirst]}\n${second[rrandomsecond]}\n${third[rrandomthird]}`);

let para = document.createElement('p')
para.innerHTML = `Your Business Name:<br>${first[rrandomfirst]}  ${second[rrandomsecond]}  ${third[rrandomthird]}`;outputcontainer.appendChild(para)

}
