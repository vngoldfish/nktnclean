from PIL import Image

# Load top crop
top_crop = Image.open("debug_top.png").convert("L")
width, height = top_crop.size

print("Dark pixels in debug_top.png:")
for y in range(height):
    row_chars = []
    for x in range(width):
        val = top_crop.getpixel((x, y))
        if val < 130:
            row_chars.append(f"{x}")
    if row_chars:
        print(f"y={y+260} (rel={y}): x at {', '.join(row_chars)}")
