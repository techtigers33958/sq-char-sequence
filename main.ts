// When user receives something:
//
//
// -shows diamond icon to indicate that something is
// received
//
//
// -if receivedString = START, reset the program
//
//
// -if receivedString = character (A - D), change
// correctCounter by 1
//
//
// -if the number of correct characters is 4, show the
// check icon and release the ball. Then reset the
// program
//
// -else, generate a new character
//
//
// -if receivedString does not equal character, show
// "x" icon and call reset
//
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.SmallDiamond)
    if (receivedString == "START") {
        reset()
    } else if (receivedString == character) {
        correctCounter += 1
        if (correctCounter == 4) {
            basic.showIcon(IconNames.Yes)
            releaseBall()
            reset()
        } else {
            generateCharacter()
        }
    } else {
        basic.showIcon(IconNames.No)
        reset()
    }
})
// Releases the ball:
//
//
// -pushes ball out
//
// -waits 1 sec
//
// -moves motor back
function releaseBall () {
    pins.servoWritePin(AnalogPin.P4, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P4, 100)
}
// Generates a character:
//
//
// -sets the variable character to a random letter
// from A-D
//
// -displays character
function generateCharacter () {
    character = String.fromCharCode(Math.randomRange(65, 68))
    basic.showString(character)
}
// When button B is pressed:
//
//
// -on demand, resets the program
input.onButtonPressed(Button.B, function () {
    reset()
})
// Resets the program:
//
//
// -shows the diamond icon
//
// -sets the number of correct characters to 0
//
// -clears the screen
//
// -generates a new character
//
function reset () {
    basic.showIcon(IconNames.Diamond)
    correctCounter = 0
    list = []
    generateCharacter()
}
// When button A pressed:
//
//
// -on demand, calls function release ball
//
// -used when ball gets stuck
input.onButtonPressed(Button.A, function () {
    releaseBall()
})
let list: number[] = []
let correctCounter = 0
let character = ""
radio.setGroup(20)
pins.analogSetPeriod(AnalogPin.P0, 20000)
pins.servoSetPulse(AnalogPin.P0, 2000)
reset()
