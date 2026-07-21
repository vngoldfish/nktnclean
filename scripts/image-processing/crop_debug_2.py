from PIL import Image

# Open original artifact image
orig_path = "C:/Users/TUSAN/.gemini/antigravity/brain/04d70857-3b31-4032-be99-9303447bb74c/photo_report_jp_1779454285030.png"
img = Image.open(orig_path)

# Crop region around bottom avatar: x from 330 to 400, y from 700 to 790
bottom_crop = img.crop((330, 700, 400, 790))
bottom_crop.save("debug_bottom_full.png")

print("Crops saved!")
