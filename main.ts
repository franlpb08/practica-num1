input.onButtonPressed(Button.A, function () {
    basic.showString("Exceso de ruido hoy=")
    basic.showNumber(0)
})
input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.showString("Iniciando sistema de control de sonido y temperatura")
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.forever(function () {
	
})
