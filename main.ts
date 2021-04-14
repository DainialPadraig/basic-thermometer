input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature() * (9 / 5) + 32)
    basic.showString("F")
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature() + 273.15)
    basic.showString("K")
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
    basic.showString("C")
    basic.pause(100)
    basic.clearScreen()
})
