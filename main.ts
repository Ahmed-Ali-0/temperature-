let Temperaturemicrobit = 0
basic.forever(function () {
    Temperaturemicrobit = input.temperature()
    basic.showNumber(Temperaturemicrobit)
    basic.pause(1000)
    basic.clearScreen()
})
