'use strict'

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}



var storytext = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
const insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
]
const insertY = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
]
const insertZ = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
]



randomize.addEventListener('click', result);

function result() {

    let newstory = storytext;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newstory = newstory.replace(/:insertx:/g, xItem);
    newstory = newstory.replace(/:inserty:/g, yItem);
    newstory = newstory.replace(/:insertz:/g, zItem);


    if (customName.value !== '') {
        let name = customName.value;
        newstory = newstory.replace(/Bob/g, name);
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300 * 0.071429) + ' ' + 'stone';
        let temperature = Math.round((94 - 32) / 1.8) + ' ' + 'centigrade';
        newstory = newstory.replace("94 fahrenheit", temperature);
        newstory = newstory.replace("300 pounds", weight);
    }

    story.textContent = newstory;
    story.style.visibility = 'visible';
}