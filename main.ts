while (true) {
    console.log("Light level: " + input.lightLevel())
    if (input.lightLevel() <= 6) {
        light.setAll(color.rgb(255, 255, 255))
    } else {
        light.clear()
    }
    
}
