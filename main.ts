let Temperaturemicrobit = 0
input.onButtonPressed(Button.A, function () {
    Temperaturemicrobit = input.temperature()
    basic.showString("" + (Temperaturemicrobit))
    basic.pause(1000)
    basic.clearScreen()
})
