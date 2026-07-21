from PIL import Image, ImageDraw, ImageOps

def create_circular_avatar(logo_path, size=33):
    # Open the logo image
    logo = Image.open(logo_path).convert("RGBA")
    
    # Create a white background circle
    avatar = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    draw = ImageDraw.Draw(avatar)
    draw.ellipse((0, 0, size - 1, size - 1), fill=(255, 255, 255, 255))
    
    # Calculate resizing keeping aspect ratio
    logo_w, logo_h = logo.size
    aspect = logo_w / logo_h
    if aspect > 1:
        new_w = int(size * 0.75)
        new_h = int(new_w / aspect)
    else:
        new_h = int(size * 0.75)
        new_w = int(new_h * aspect)
        
    logo_resized = logo.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Paste logo onto the white circle (centered)
    x_offset = (size - new_w) // 2
    y_offset = (size - new_h) // 2
    avatar.paste(logo_resized, (x_offset, y_offset), logo_resized)
    
    # Draw a thin light-gray border around the avatar
    draw.ellipse((0, 0, size - 1, size - 1), outline=(220, 220, 220, 255), width=1)
    
    return avatar

def patch_report():
    img_path = "public/works/photo-report.png"
    logo_path = "logo.png"
    
    # Open target image
    img = Image.open(img_path).convert("RGBA")
    
    # Create circular avatar
    avatar = create_circular_avatar(logo_path, size=34) # diameter 34 matches grid
    
    # Paste avatar 1: x=345, y=285
    # (Let's adjust coordinates slightly for perfect centering: x=344, y=284, size=34)
    img.paste(avatar, (344, 284), avatar)
    
    # Paste avatar 2: x=356, y=722
    # (Let's adjust coordinates slightly: x=356, y=721, size=34)
    img.paste(avatar, (356, 721), avatar)
    
    # Paint over [OS], [OSJ] texts in the chat
    # We sample the background color next to the text.
    # The background of the chat page next to the image attachment is around x=470, y=420.
    # Let's inspect the pixels or just draw a filled rectangle with the exact background color.
    # We can sample the pixel at (460, 420) for the first one, (460, 550) for the second, (470, 675) for the third.
    draw = ImageDraw.Draw(img)
    
    # Let's get the background color at (460, 420)
    bg_color_1 = img.getpixel((460, 420))
    # Box for [OS] text: x from 476 to 502, y from 412 to 430
    draw.rectangle([476, 412, 502, 430], fill=bg_color_1)
    
    # Let's get the background color at (460, 550)
    bg_color_2 = img.getpixel((460, 550))
    # Box for [OSJ] text: x from 478 to 506, y from 542 to 560
    draw.rectangle([478, 542, 506, 560], fill=bg_color_2)
    
    # Let's get the background color at (470, 675)
    bg_color_3 = img.getpixel((470, 675))
    # Box for [OSJ] text: x from 488 to 516, y from 667 to 685
    draw.rectangle([488, 667, 516, 685], fill=bg_color_3)
    
    # Save the patched image
    # Keep format as PNG (RGBA)
    img.convert("RGB").save("public/works/photo-report.png", "PNG")
    print("Report patched successfully!")

if __name__ == "__main__":
    patch_report()
