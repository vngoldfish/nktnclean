from PIL import Image

# Open original artifact image
orig_path = "C:/Users/TUSAN/.gemini/antigravity/brain/04d70857-3b31-4032-be99-9303447bb74c/photo_report_jp_1779454285030.png"
img = Image.open(orig_path)

# Crop region around first image text: x from 450 to 550, y from 400 to 450
img.crop((450, 400, 550, 450)).save("debug_text_1.png")

# Crop region around second image text: x from 450 to 550, y from 530 to 580
img.crop((450, 530, 550, 580)).save("debug_text_2.png")

# Crop region around third image text: x from 450 to 550, y from 650 to 700
img.crop((450, 650, 550, 700)).save("debug_text_3.png")

print("Text crops saved!")
