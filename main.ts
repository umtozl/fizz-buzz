let item = 0
input.onButtonPressed(Button.A, function () {
    let index = 0
    if (index % 15 == 0) {
        basic.showString("Fizz+Buzz")
    } else if (index % 5 == 0) {
        basic.showString("Buzz")
    } else if (index % 3 == 0) {
        basic.showString("Fizz")
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    for (let index = 0; index <= 30; index++) {
        item = index
        basic.showNumber(item)
        basic.pause(500)
    }
})
