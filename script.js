const mFactEl = document.getElementById("m-fact-el")
const mStoryEl = document.getElementById("m-story-el")

const kFactEl = document.getElementById("k-fact-el")
const kStoryEl = document.getElementById("k-story-el")

const mDiaryEl = document.getElementById("mema-diary-el")
const kDiaryEl = document.getElementById("kate-diary-el")

// =============== DATA ===============

let mFacts = [
    "born on 2004 July, 30",
    "wants to study psychology and music",
    "Drink occasionally at family parties",
    "Never smoke or vape",
    "Love board games",
    "Nerd for D&D and MTG",
    "INTJ",
    "Leo",
    "Can't ride a motorcycle",
    "Hobbies: baking, music, etc.",
    "Can cook",
    "Used to do magic tricks",
    "170 cm tall"
]

let kFacts = [
    "born on 2007 May, 30",
    "dream job is an architect",
    "ISTP",
    "Can't ride a bicycle",
    "Watch pirated movies with family",
    "158 cm tall",
    "Used to do Jiu-Jitsu",
    "Most clothes are hand-me-downs from relatives",
    "Love and hate drawing the most",
    "Don't eat veggies",
    "Scared of ghosts but love horror stories and movies"
]

let mStories = {
  "My Drill Sergeant": "He was reassigned for striking recruits and was strictly demanding. However, I loved him because he made me a better person.",
  "My Rack Mate": "On recruit day, my rack mate dropped his canteen. The drill sergeant ordered him to pick up water drop by drop with his hands. I laughed, so we both got punished."
}

let kStories = {
  "From Fear to Fascination": "I used to be terrified of fireworks and always cried. One day, trying to look brave in front of my cousins, I forced myself to watch them. I felt faint, but it was my first time really seeing and hearing them. I've looked forward to fireworks ever since.",
  "The Best Gift": "I love music. When my parents bought me headphones, I cried with joy because it was my first time crying over a gift. I loved them so much I named them and still use the purchase date as my password for every account."
}

// ====================================

let mFactList = ""
for (let i = 0; i < mFacts.length; i++) {
 mFactList += `<li>${mFacts[i]}</li>`
}
mFactEl.innerHTML = mFactList

let kFactList = ""
for (let i = 0; i < kFacts.length; i++) {
    kFactList += `<li>${kFacts[i]}</li>`
}
kFactEl.innerHTML = kFactList

let mStoryList = ""
Object.entries(mStories).forEach(([key, value]) => {
    mStoryList += `
    <li>
        <h2>${key}</h2>
        <p>${value}<p>
    </li>
    `
})
mStoryEl.innerHTML = mStoryList

let kStoryList = ""
Object.entries(kStories).forEach(([key, value]) => {
    kStoryList += `
    <li>
        <h2>${key}</h2>
        <p>${value}<p>
    </li>
    `
})
kStoryEl.innerHTML = kStoryList

function toKate() {
    mDiaryEl.style.display = "none";
    kDiaryEl.style.display = "block";
}

function toMema() {
    mDiaryEl.style.display = "block";
    kDiaryEl.style.display = "none";
}