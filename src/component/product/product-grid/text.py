import os

# Directory containing the font files
font_dir = r"C:\Users\hp\Downloads\fpnts"

# Output CSS file
css_file = r"C:\Users\hp\Downloads\fpnts\fonts.css"

# Function to generate the @font-face declaration
def generate_font_declaration(font_filename, font_family):
    return f"""
@font-face {{
  font-family: '{font_family}';
  src: url('{font_filename}') format('truetype');
}}
"""

# Get a list of text files in the directory
text_files = [file for file in os.listdir(font_dir) if file.endswith(".otf")]
print(text_files)
# Write @font-face declarations to the CSS file
with open(css_file, "w") as f:
    for font_file in text_files:
        # Extract font family from the file name (remove the ".ttf" extension)
        font_family = os.path.splitext(font_file)[0]
        print(font_family)
        # Generate the @font-face declaration and write it to the CSS file
        css_declaration = generate_font_declaration(font_file, font_family)
        f.write(css_declaration)

print(f"{len(text_files)} @font-face declarations written to {css_file}")
