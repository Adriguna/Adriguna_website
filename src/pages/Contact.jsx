import ContactHero from "../sections/Contact/ContactHero";
import ContactInfo from "../sections/Contact/ContactInfo";
import ContactForm from "../sections/Contact/ContactForm";
import Footer from "../sections/Footer";

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#050816]">
      
      {/* Hero */}
      <ContactHero />

      {/* Contact Information */}
      <ContactInfo />

      {/* Contact Form */}
      <ContactForm />
      <Footer />

    </main>
  );
};

export default Contact;