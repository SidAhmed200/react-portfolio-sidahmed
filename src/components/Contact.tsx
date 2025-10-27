import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>You can reach me directly at <strong>mekiri.sidahmd@gmail.com</strong></p>
          <Button
            variant="contained"
            endIcon={<EmailIcon />}
            href="mailto:mekiri.sidahmd@gmail.com"
          >
            Send Email
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
