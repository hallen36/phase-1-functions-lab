// Code your solution in this file!
function distanceFromHqInBlocks(number){
    return Math.abs(number-42)
}
function distanceFromHqInFeet(number) {
    return distanceFromHqInBlocks(number) * 264
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination) * 264
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
    } else if (distanceTravelledInFeet(start, destination) > 2000) {
        return 25
    } else if (distanceTravelledInFeet(start, destination) > 400) {
        return (distanceTravelledInFeet(start, destination)-400) * .02
    } else if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    }
}