import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
// Prompt the user to enter a URL
inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    // Generate a QR code image from the URL
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    // Save the URL into a text file
    fs.writeFile("URL.txt", url, (err) =>{
      if(err) throw err;
      console.log("The file has been saved!")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
