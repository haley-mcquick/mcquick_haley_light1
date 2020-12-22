while True:
    light.set_brightness(5)
    print("Light level: " + input.light_level())
    if input.light_level() <= 6 and input.light_level() >= 3:
        light.set_all(color.rgb(0, 0, 255))
    elif input.light_level() < 3:
        light.set_all(color.rgb(255, 165, 0))
    else:
        light.clear()
        