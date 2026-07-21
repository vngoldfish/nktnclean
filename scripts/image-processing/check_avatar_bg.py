from PIL import Image
import numpy as np

img = Image.open("C:/Users/TUSAN/.gemini/antigravity/brain/04d70857-3b31-4032-be99-9303447bb74c/photo_report_jp_1779454285030.png")
# Check pixels around top avatar text
pixels = []
for y in range(310, 325):
    row = []
    for x in range(340, 390):
        row.append(img.getpixel((x, y)))
    pixels.append(row)

# Let's see what is the most common color in this box
# The most common color should be the background color of the chat window
flat_pixels = [p[:3] for r in pixels for p in r]
unique_colors, counts = np.unique(flat_pixels, axis=0, return_counts=True)
sorted_idx = np.argsort(-counts)

print("Top 5 most common colors in the top avatar name region:")
for i in range(min(5, len(unique_colors))):
    print(f"Color: {unique_colors[sorted_idx[i]]}, count: {counts[sorted_idx[i]]}")

# Also check for the bottom avatar text
pixels_bottom = []
for y in range(750, 765):
    row = []
    for x in range(340, 390):
        row.append(img.getpixel((x, y)))
    pixels_bottom.append(row)

flat_pixels_bottom = [p[:3] for r in pixels_bottom for p in r]
unique_colors_b, counts_b = np.unique(flat_pixels_bottom, axis=0, return_counts=True)
sorted_idx_b = np.argsort(-counts_b)

print("\nTop 5 most common colors in the bottom avatar name region:")
for i in range(min(5, len(unique_colors_b))):
    print(f"Color: {unique_colors_b[sorted_idx_b[i]]}, count: {counts_b[sorted_idx_b[i]]}")
