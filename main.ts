while (true) {
    console.log("Light level: " + input.lightLevel())
    if (input.lightLevel() <= 40) {
        light.setAll(color.rgb(255, 0, 0))
    } else if (input.lightLevel() > 40) {
        light.setAll(color.rgb(0, 255, 255))
    }
    
}
