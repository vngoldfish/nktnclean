from PIL import Image

# Load original text crop 1
orig_crop = Image.open("debug_text_1.png").convert("L")
width, height = orig_crop.size

# Find pixels that are darker (text is dark gray/black)
# The background is light blue-gray (around 210 in grayscale)
# So text should be < 150 in grayscale.
print("Dark pixels in debug_text_1.png:")
for y in range(height):
    row_chars = []
    for x in range(width):
        val = orig_crop.getpixel((x, y))
        if val < 130: # threshold for dark text
            row_chars.append(f"{x}")
    if row_chars:
        print(f"y={y+400} (rel={y}): x at {', '.join(row_chars)}")
