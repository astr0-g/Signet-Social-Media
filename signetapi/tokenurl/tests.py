from PIL import Image
import pillow_avif
# Create your tests here.
file = "./media/images/"+"468658376639833002212406.jpg"
print(file)
JPGimg = Image.open(file)
print(JPGimg)
print(1)
JPGimg.save(file, 'AVIF')
print(1)
