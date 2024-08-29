// for css
import './ContactForm.css'

function ContactForm() {
  return (
    <form action="/submit-form" method="post">
    <div>
      <label htmlFor="fname">Full Name</label>
      <input type="text" id="fname" placeholder="Your Name..." />
    </div>
  
    <div>
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" placeholder="Your E-mail" />
    </div>
  
    <div>
      <label htmlFor="subject">Subject</label>
      <input type="text" id="subject" placeholder="Subject" />
    </div>
  
    <div>
      <label htmlFor="Message">Message</label>
      <textarea name="Message" id="Message" defaultValue="Your Message" />
    </div>
    
    <input type="submit" value="Send Message"/>
  </form>
  
  );
}

export default ContactForm;
