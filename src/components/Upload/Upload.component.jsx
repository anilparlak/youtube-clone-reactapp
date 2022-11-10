import React, { useEffect, useState } from "react";
import {
  Button,
  Close,
  Container,
  Desc,
  Input,
  Label,
  Title,
  Wrapper,
} from "./upload.style";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import { useSelector } from "react-redux";
const INITIAL_INFO = {
  title: "",
  description: "",
};

const Upload = ({ setOpen }) => {
  const [image, setImage] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const [info, setInfo] = useState(INITIAL_INFO);
  const [tags, setTags] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleTags = (e) => {
    setTags(() => e.target.value.split(","));
  };
  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "imageUrl"
          ? setImgPerc(Math.round(progress))
          : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log("error",error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInfo((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    video && uploadFile(video, "videoUrl");
  }, [video]);

  useEffect(() => {
    image && uploadFile(image, "imageUrl");
  }, [image]);

  const handleUpload = async (e) => {
    e.preventDefault();
    const response = await api(currentUser.token).post("/videos", { ...info, tags });
    console.log("res",response)
    setOpen(false);
    response.status === 200 && navigate(`/video/${response.data._id}`);
  };
  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>Upload a New Video</Title>
        <Label>Video:</Label>
        {videoPerc > 0 ? (
          "Uploading:" + videoPerc
        ) : (
          <Input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        )}
        <Input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleInfo}
        />
        <Desc
          placeholder="Description"
          rows={8}
          name="description"
          onChange={handleInfo}
        />
        <Input
          type="text"
          placeholder="Separate the tags with commas"
          name="tags"
          onChange={handleTags}
        />
        <Label>Image:</Label>
        {imgPerc > 0 ? (
          "Uploading:" + imgPerc + "%"
        ) : (
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        )}
        <Button onClick={handleUpload}>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;
