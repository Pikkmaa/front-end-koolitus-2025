import { useRef } from "react";
import emailjs from '@emailjs/browser';
function Email() {
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
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Saada" />
    </form>
  );
}

export default Email