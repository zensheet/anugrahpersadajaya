import fitz  # PyMuPDF
import os

pdf_path = "PROPOSAL PENAWARAN(SoftN).pdf"
output_dir = "extracted_content"
images_dir = "images"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)
if not os.path.exists(images_dir):
    os.makedirs(images_dir)

doc = fitz.open(pdf_path)
full_text = ""

for page_num in range(len(doc)):
    page = doc.load_page(page_num)
    full_text += page.get_text()
    
    # Extract images
    image_list = page.get_images()
    for img_index, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image_filename = f"page{page_num+1}_img{img_index+1}.{image_ext}"
        with open(os.path.join(images_dir, image_filename), "wb") as f:
            f.write(image_bytes)
        print(f"Saved image: {image_filename}")

with open(os.path.join(output_dir, "extracted_text.txt"), "w", encoding="utf-8") as f:
    f.write(full_text)

print(f"Extracted text to {output_dir}/extracted_text.txt")
doc.close()
