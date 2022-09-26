basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 200) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P0)))
})
