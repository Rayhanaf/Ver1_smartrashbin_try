let jarak = 0
basic.forever(function () {
    jarak = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    basic.showNumber(jarak)
    if (jarak <= 15) {
        servos.P1.setAngle(90)
        if (jarak > 15) {
            servos.P1.setAngle(0)
        }
    } else {
        servos.P1.setAngle(0)
    }
})
