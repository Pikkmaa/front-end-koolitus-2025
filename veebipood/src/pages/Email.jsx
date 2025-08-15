import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Button, Rating, TextField } from "@mui/material";
import { useState } from "react";
function Email() {
  const [value, setValue] = useState(2);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zlucts3', 'template_089w8zj', form.current, {
        publicKey: 'c119ZEYcRJNqD7eY0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className="vorm" ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label>
      <input type="text" name="from_name" /> */}
      <br />
      <TextField label="Nimi" variant="outlined" name="from_name" />
      <br />
      {/* <label>Email</label>
      <input type="email" name="from_email" /> */}
      <TextField label="Email" variant="outlined" name="from_email" />
      <br />
{/*       <label>Message</label>
      <textarea name="message" /> */}
      <TextField label="Message" variant="outlined" name="message" />
      <Rating
        name="rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Button type="submit" variant="contained" >Send</Button>
      <br />
      {/* <input type="submit" value="Saada" /> */}
    </form>
  );
}

export default Email