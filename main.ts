while (true) {
    light.setBrightness(5)
    console.log("Light level: " + input.lightLevel())
    if (input.lightLevel() <= 6 && input.lightLevel() >= 3) {
        light.setAll(color.rgb(0, 0, 255))
    } else if (input.lightLevel() < 3) {
        light.setAll(color.rgb(255, 165, 0))
    } else {
        light.clear()
    }
    
}
