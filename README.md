# QR Code Generator 

A simple and efficient Node.js application that generates a QR code from a user-provided URL and saves it as an image file, along with the entered URL saved in a text file. 🖼️📝

---

##  Features ✨
- 📥  **Prompts the user for a URL**.
- 🖼️  **Generates a QR code image** for the provided URL.
- 💾  **Saves the QR code** as `qr_img.png`.
- 📝  **Writes the provided URL** to a file named `URL.txt`.

---

## Installation ⇣

1. **Clone this repository** or download the source code.
2. Navigate to the project directory and run the following command to install the necessary dependencies:

   ```bash
   npm install

---
## Running the Script ▶️

1. Open a terminal in the script's directory.
2. Run the script using:

   ```bash
   node index.js

---
## Dependencies 📦

- [**inquirer**](https://www.npmjs.com/package/inquirer) : A collection of interactive command-line user interfaces. 💬
- [**qr-image**](https://www.npmjs.com/package/qr-image) : A QR code image generator. 🖼️
- **fs** : Node.js file system module for reading and writing files. 📂

---
## Example Output 💡

- **Input**: `https://github.com/majedalshehri1`

- **Generated files**:
  - `qr_img.png` (QR code image)
  - `URL.txt` (Contains the URL: `https://github.com/majedalshehri1`)
