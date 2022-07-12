import sharp, {Sharp} from "sharp";
import express from "express";
import fs from 'fs';

export default class imageUtilities {
  static areParametersValid(request: express.Request): boolean {
    let areValid = true;
    console.log("Filename: " + request.query.filename);
    if (this.isEmpty(request.query.filename as string)) {
      areValid = false;
    }

    console.log("Height: " + request.query.height);
    if (!this.isValidNumber(request.query.height as string)) {
      areValid = false;
    }

    if (!this.isValidNumber(request.query.width as string)) {
      areValid = false;
    }

    return areValid;
  }

  static isEmpty(value: string) {
    console.log("Is field empty? " + (value == null || value.length == 0));
    return value == null || value.length == 0; // Or any other logic, removing whitespace, etc.
  }

  static isValidNumber(value: string): boolean {
    let areValid = true;
    const num = parseInt(value); // Or any other logic, removing whitespace, etc.
    if (isNaN(num)) {
      areValid = false;
    } else {
      areValid = num > 0;
    }
    console.log("Is field a number? " + areValid);
    return areValid;
  }

  static existsImage(fileName: string ): boolean {
    console.log("Image exists?");
    let exists= false;

    try {
    if(fs.existsSync('./images/'+fileName+'.jpg')){
      exists = true;
      console.log("Image exists");
    }
    } catch(e) {
      console.log("An error occurred.")
    }
    return exists;
  }
}
