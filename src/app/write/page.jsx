"use client";

import { useState } from "react";
import styles from "./writePage.module.css";

import { IconButton } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <div className={styles.buttons}>
          <IconButton
            aria-label="add"
            color={"info"}
            onClick={() => setOpen(!open)}
          >
            <AddCircleOutlineRoundedIcon fontSize={"large"} />
          </IconButton>
          {open && (
            <div>
              <IconButton aria-label="add">
                <AddPhotoAlternateIcon fontSize={"large"} color={"success"} />
              </IconButton>
              <IconButton aria-label="add" color={"success"}>
                <AddCircleOutlineRoundedIcon fontSize={"large"} />
              </IconButton>
              <IconButton aria-label="add" color={"success"}>
                <SmartDisplayIcon fontSize={"large"} />
              </IconButton>
            </div>
          )}
        </div>
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
        <button className={styles.publish}>Publish</button>
      </div>
    </div>
  );
};

export default WritePage;
