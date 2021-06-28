import React, { useState } from "react";
import "./addphoto.css";
import axios from "axios";
const BASE_URL = "http://localhost:3000/";

function AddPhoto(props) {
  const [uploadedimage, setuploadedimage] = useState([]);
  const [imageuploaded, setimageuploaded] = useState(false);

  const selectFile = (event) => {
    setuploadedimage(event.target.files[0]);
    setimageuploaded(true);
  };
  const submitImagetoImgur = () => {
    if (imageuploaded === false) {
    } else {
      // axios
      //   .get("https://dog.ceo/api/breeds/image/random")
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      // console.log("Uploading file to Imgur..");
      // const instance = axios.create({
      //   baseURL: "https://api.imgur.com/3/image/",
      // });

      // Alter defaults after instance has been created
      // Replace ctrlq with your own API key
      var apiUrl = "https://api.imgur.com/3/image/";
      var apiKey = "Client-ID 41f97ec30b09d4c";
      const formData = new FormData();
      formData.append("image", imageuploaded);

      const options = {
        method: "POST",
        headers: {
          // "content-type": "application/x-www-form-urlencoded",
          Authorization: apiKey,
        },
        data: imageuploaded,
        url: apiUrl,
      };
      axios(options).then((req) => {
        console.log(req);
      });
    }
  };

  return (
    <div className="addphotoModule">
      <div className="modulebackground"></div>
      <div className="mainaddphotomodule">
        <div className="preferencesTab3 preferencesTab">Upload Image</div>
        <div className="mainColorBox">
          <p className="uploadInstructions">Step 1: Upload Image from Device</p>
          <input type="file" onChange={selectFile} />
          <p className="uploadInstructions">Step 2: Save Image to Imgur</p>
          <div className="uploadFlexBox">
            <img
              src="/assests/loadinggifforcolors.gif"
              class="imgurloadingGif"
            />
            <button onClick={submitImagetoImgur}>Save Imgur</button>
          </div>
          <input type="range" min="50" max="150" value="100" />
          <div className="picturemovertoggle">
            <div className="upbuttonmover"></div>
            <div className="downbuttonmover"></div>
            <div className="rightbuttonmover"></div>
            <div className="leftbuttonmover"></div>
            <div className="centerbutton"></div>
            <div className="centerbutton2"></div>
          </div>

          <img src="/assests/gif-arrow.gif" class="arrowgif" />
          <div class="imageSaved">Image Saved</div>
          <div class="submit submitNo3">Save Preferences</div>
        </div>
      </div>
    </div>
  );
}

export default AddPhoto;
