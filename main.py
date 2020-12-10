while True:
    print("Light level: " + input.light_level())
    if input.light_level() <= 6:
        light.set_all(color.rgb(255, 255, 255))
    else:
        light.clear()