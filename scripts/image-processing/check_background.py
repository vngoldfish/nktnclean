from PIL import Image

img = Image.open("C:/Users/TUSAN/.gemini/antigravity/brain/04d70857-3b31-4032-be99-9303447bb74c/photo_report_jp_1779454285030.png")
# Check the pixel colors of the text "OSJ" under top avatar (around x=355..375, y=312)
print("Top avatar name text background (x=365, y=311):", img.getpixel((365, 311)))
print("Top avatar name text background (x=365, y=321):", img.getpixel((365, 321)))

# Check the pixel colors of the text "OSJ" under bottom avatar (around x=355..375, y=755)
print("Bottom avatar name text background (x=365, y=751):", img.getpixel((365, 751)))
print("Bottom avatar name text background (x=365, y=761):", img.getpixel((365, 761)))
