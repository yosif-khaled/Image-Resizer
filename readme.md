## scripts needed to Test/ Start/ Build The Application

### compile and run code: 
 npm run start 

### use tsc in watch mode: 
 npm run watch

### test code: 
 npm run test

## Endpoints

GET "/" should render Index.ejs where you can choose and image from your hard drive
-- IMAGE SHOULD BE /jpeg|jpg|png|gif/ only and not larger than 3 mb --

POST "/upload" should direct you to process_image.ejs each time user access this endpoint all files in processed and uploaded Images will be deleted

POST "/processed_images/:filename" should Download The File ONLY when you enter a width and a height as Integers in positive range