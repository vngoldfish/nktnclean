from PIL import Image, ImageDraw, ImageFont

# Load image
img = Image.open("public/works/photo-report.png")
draw = ImageDraw.Draw(img)

# Draw grid lines every 50 pixels
width, height = img.size
for x in range(0, width, 50):
    draw.line([(x, 0), (x, height)], fill="red", width=1)
    draw.text((x + 2, 5), str(x), fill="red")

for y in range(0, height, 50):
    draw.line([(0, y), (width, y)], fill="red", width=1)
    draw.text((5, y + 2), str(y), fill="red")

img.save("grid_report.png")
print("Grid image saved to grid_report.png")
