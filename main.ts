radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.SmallDiamond)
    if (receivedString == "START") {
        reset()
    } else if (receivedString == character) {
        if (correctCounter == 4) {
            basic.showIcon(IconNames.Yes)
            releaseBall()
        } else {
            correctCounter += 1
            generateCharacter()
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
function releaseBall () {
    pins.servoWritePin(AnalogPin.P4, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P4, 100)
}
function generateCharacter () {
    character = String.fromCharCode(Math.randomRange(65, 68))
    basic.showString(character)
}
input.onButtonPressed(Button.B, function () {
    reset()
})
function reset () {
    basic.showIcon(IconNames.Diamond)
    correctCounter = 0
    list = []
    generateCharacter()
}
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
