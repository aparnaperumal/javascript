const a = {
    b : '23',
    c : '432'
}

const d = "2343"

const e = {
    ...a,
    d
}

console.log(e)

const vacation = {
    destination : "abc",
    travellers : 2,
    activity: "skiing",
    cost : "abc"
};

function marketing({destination,activity}){
    console.log(`come to ${destination} to do some ${activity}`)
};

console.log(marketing(vacation))