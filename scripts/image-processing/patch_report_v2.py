from PIL import Image, ImageDraw

def create_circular_avatar(logo_path, size=36):
    # Open the logo image
    logo = Image.open(logo_path).convert("RGBA")
    
    # Create a white background circle
    avatar = Image.new("RGBA", (size, size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(avatar)
    # Draw white filled circle
    draw.ellipse((0, 0, size - 1, size - 1), fill=(255, 255, 255, 255))
    
    # Calculate resizing keeping aspect ratio
    logo_w, logo_h = logo.size
    aspect = logo_w / logo_h
    # We want the logo to occupy about 60% of the circle (around 22px)
    logo_size = int(size * 0.62)
    if aspect > 1:
        new_w = logo_size
        new_h = int(new_w / aspect)
    else:
        new_h = logo_size
        new_w = int(new_h * aspect)
        
    logo_resized = logo.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Paste logo onto the white circle (centered)
    x_offset = (size - new_w) // 2
    y_offset = (size - new_h) // 2
    avatar.paste(logo_resized, (x_offset, y_offset), logo_resized)
    
    # Draw a thin light-gray border around the circle for definition
    draw.ellipse((0, 0, size - 1, size - 1), outline=(215, 218, 222, 255), width=1)
    
    return avatar

def patch_report():
    orig_path = "C:/Users/TUSAN/.gemini/antigravity/brain/04d70857-3b31-4032-be99-9303447bb74c/photo_report_jp_1779454285030.png"
    logo_path = "logo.png"
    dest_path = "public/works/photo-report.png"
    
    # Open original artifact image
    img = Image.open(orig_path).convert("RGBA")
    
    # Create circular avatar (36x36 pixels)
    avatar = create_circular_avatar(logo_path, size=36)
    
    # Paste top avatar at (346, 274)
    img.paste(avatar, (346, 274), avatar)
    
    # Paste bottom avatar at (346, 714)
    img.paste(avatar, (346, 714), avatar)
    
    # Set up drawing context
    draw = ImageDraw.Draw(img)
    
    # Paint over [OS] text at first message: y=412..428, x=480..520
    bg_color_1 = img.getpixel((460, 420))
    draw.rectangle([475, 410, 520, 428], fill=bg_color_1)
    
    # Paint over [OSJ] text at second message: y=542..558, x=478..520
    bg_color_2 = img.getpixel((460, 550))
    draw.rectangle([478, 540, 520, 558], fill=bg_color_2)
    
    # Paint over [OSJ] text at third message: y=662..678, x=485..525
    bg_color_3 = img.getpixel((460, 670))
    draw.rectangle([485, 660, 525, 678], fill=bg_color_3)
    
    # Save the output image
    img.convert("RGB").save(dest_path, "PNG")
    print(f"Patched report saved to {dest_path}!")

if __name__ == "__main__":
    patch_report()
