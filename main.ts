radio.onReceivedString(function (receivedString) {
    if (receivedString == "START") {
        reset()
    } else {
        if (receivedString == character) {
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
    }
})
function releaseBall () {
    pins.servoWritePin(AnalogPin.P4, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P4, 100)
}
function generateCharacter () {
    character = String.fromCharCode(Math.randomRange(65, 68))
    basic.showString("" + (character))
}
function reset () {
    correctCounter = 0
    list = []
    generateCharacter()
}
let list: number[] = []
let correctCounter = 0
let character = ""
radio.setGroup(20)
pins.analogSetPeriod(AnalogPin.P0, 20000)
pins.servoSetPulse(AnalogPin.P0, 2000)
basic.showIcon(IconNames.Heart)
