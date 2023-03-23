input.onSound(DetectedSound.Loud, function () {
    if (on == 0) {
        on = 1
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        on = 0
        basic.clearScreen()
    }
})
let on = 0
on = 0
basic.forever(function () {
	
})
