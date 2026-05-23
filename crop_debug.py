from PIL import Image

# Open original artifact image
orig_path = "C:/Users/TUSAN/.gemini/antigravity/brain/04d70857-3b31-4032-be99-9303447bb74c/photo_report_jp_1779454285030.png"
img = Image.open(orig_path)

# Crop region around top avatar: x from 330 to 390, y from 260 to 330
top_crop = img.crop((330, 260, 390, 330))
top_crop.save("debug_top.png")

# Crop region around bottom avatar: x from 330 to 390, y from 690 to 760
bottom_crop = img.crop((330, 690, 390, 760))
bottom_crop.save("debug_bottom.png")

print("Crops saved!")
