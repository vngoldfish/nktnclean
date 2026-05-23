from PIL import Image

def inspect_image(path):
    try:
        with Image.open(path) as img:
            print(f"File: {path}")
            print(f"  Format: {img.format}")
            print(f"  Size: {img.size}")
            print(f"  Mode: {img.mode}")
            # Check if there is transparency
            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                print("  Transparency: Yes")
            else:
                print("  Transparency: No")
    except Exception as e:
        print(f"Error reading {path}: {e}")

inspect_image("logo.png")
inspect_image("public/works/photo-report.png")
inspect_image("public/works/photo-staff.png")
inspect_image("public/works/company-office.png")
