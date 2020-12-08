while True:
    print("Light level: " + input.light_level())
    if input.light_level() <= 40:
        light.set_all(color.rgb(255, 0, 0))
    elif input.light_level() > 40:
        light.set_all(color.rgb(0, 255, 255))