from PIL import Image

img = Image.open("public/works/photo-report.png")
# print the pixel colors at y=415, x from 475 to 500
for x in range(475, 500):
    print(f"x={x}, color={img.getpixel((x, 415))}")
