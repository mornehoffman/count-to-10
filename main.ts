input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Giraffe)
    buttonPressed = 0
    time = 0
    while (buttonPressed != 1) {
        basic.pause(100)
        time += 1
    }
    difference = time - 50
    basic.showNumber(difference)
})
input.onButtonPressed(Button.B, function () {
    buttonPressed = 1
})
let difference = 0
let time = 0
let buttonPressed = 0
basic.showNumber(5)
basic.forever(function () {
	
})
