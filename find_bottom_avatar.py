from PIL import Image

img = Image.open("debug_bottom_full.png").convert("L")
width, height = img.size
print("Dark pixels in debug_bottom_full.png:")
for y in range(height):
    row_chars = []
    for x in range(width):
        val = img.getpixel((x, y))
        if val < 130:
            row_chars.append(f"{x}")
    if row_chars:
        # print first and last few x coordinates to see the bounding box
        if len(row_chars) > 10:
            print(f"y={y+700}: x from {row_chars[0]} to {row_chars[-1]} (count {len(row_chars)})")
        else:
            print(f"y={y+700}: x at {', '.join(row_chars)}")
