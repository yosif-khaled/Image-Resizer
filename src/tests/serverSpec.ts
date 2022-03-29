import supertest from 'supertest';
import { resolve } from 'path';
import { existsSync, copyFileSync } from 'fs';

import app from '../server';
import { resizeUploadedImage } from '../utils/image_processing/resize';
import { getDimensions } from '../utils/image_processing/image_size';

const filename = 'Cat_Eye.jpg'; // name of picture used in testing ./src/tests/Cat_Eye.jpg
const resizedFilePath = resolve(__dirname, '..', '..', 'images', 'processed_images', filename);
const uploadedFilePath = resolve(__dirname, '..', '..', 'images', 'uploaded_images', filename);

const request = supertest(app);

describe('testing', () => {

  describe("Resize Image Using Sharp Library :: Testing Using Meta Data", () => {

    const height = '300';
    const width = '300';

    console.log(resizedFilePath);

    beforeAll(async () => {
      await resizeUploadedImage(filename, height, width);
    });

    it("-- Image Will Be Assigned To New Directory", async () => {
      expect(existsSync(resizedFilePath)).toBeTrue;
    });

    it("-- Image Will Be Resized", async () => {
      let checkDim: boolean;
      if (getDimensions(uploadedFilePath).width == getDimensions(resizedFilePath).width && getDimensions(uploadedFilePath).height == getDimensions(resizedFilePath).height) {
        checkDim = true;
      } else {
        checkDim = false;
      }
      expect(checkDim).toBeTrue;
      // check if file width and hegiht changed
    });
  });

  describe('Get / :: Testing Home Endpoint', () => {
    it('-- Should Render index.ejs and return status code 200', async () => {
      const response = await request.get('/');
      expect(response.status).toBe(200);
    });
  });

  describe('Get /upload :: Testing Home Endpoint', () => {

    it('-- Should Render index.ejs', async () => {
      const response = await request.post('/upload');
      expect(response.status).toBe(200);
    });

  });

  describe('Get /processed_images/:filename :: Testing File IS SENT', () => {
    it('-- Should Render index.ejs and return status code 200', async () => {
      const response = await request.post(`/processed_images/${filename}`);
      expect(response.status).toBe(200);
    });
  });


  describe('Get /upload :: Testing Home Endpoint', () => {

    it('IF POST /upload is Accessed Again -- Should Empty Directory', async () => {
      await request.post('/upload');
      expect(existsSync(uploadedFilePath)).toBeTrue;
    });

  });

  afterAll(()=>{
    try{
      copyFileSync(resolve('./','src','tests','Cat_Eye.jpg'), uploadedFilePath);
    }catch(err){
      console.log(err);
    }    
  });

});
