import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";


const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone number is too long").optional(),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
  privacy: z.boolean().refine(val => val === true, "You must accept the privacy policy"),
});


type ContactFormData = z.infer<typeof contactSchema>;


const departmentContacts = [
  { title: "OWNER", name: "Ajay Chauhan", email: "ajay@dapepl.com" },
  { title: "SALES INQUIRIES", name: "Request a Quote", email: "ajay@dapepl.com" },
  { title: "TECHNICAL SUPPORT", name: "Service & Support", email: "ajay@dapepl.com" },
];


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    privacy: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    // Secret Admin Access Check
    if (formData.fullName === "Admin" && formData.phone === "0000") {
      sessionStorage.setItem("adminAuthenticated", "true");
      navigate("/admin");
    }
  }, [formData.fullName, formData.phone, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        privacy: false,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Contact Form Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Left - Form */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12 leading-tight">
                Ready to discuss your<br />
                printing press requirements?<br />
                Let's connect and explore<br />
                how DAP can support<br />
                your business.
              </h1>


              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full name"
                      className={`w-full px-4 py-3 bg-background border ${errors.fullName ? 'border-red-500' : 'border-border'} focus:outline-none focus:border-foreground transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className={`w-full px-4 py-3 bg-background border ${errors.email ? 'border-red-500' : 'border-border'} focus:outline-none focus:border-foreground transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>


                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex">
                      <span className="px-4 py-3 bg-background border border-r-0 border-border text-muted-foreground">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name (optional)"
                      className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                </div>


                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your query here"
                    rows={6}
                    className={`w-full px-4 py-3 bg-background border ${errors.message ? 'border-red-500' : 'border-border'} focus:outline-none focus:border-foreground transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>


                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    I acknowledge that I have read and accept the{" "}
                    <a href="#" className="text-primary hover:underline">privacy policy</a>
                    {" "}of DAP Engineering Pvt. Ltd.
                  </label>
                </div>
                {errors.privacy && (
                  <p className="text-red-500 text-sm">{errors.privacy}</p>
                )}


                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>


            {/* Right - Contact Info */}
            <div className="space-y-8">
              {/* Locations */}
              <div className="border border-border bg-background p-6">
                <h3 className="text-xs tracking-wider text-muted-foreground mb-4">LOCATIONS</h3>

                <div className="space-y-6">
                  <div>
                    <p className="font-medium text-foreground mb-1">Registered Office:</p>
                    <p className="text-muted-foreground text-sm">
                      D-612 Essbel CHS<br />
                      Lokhandwala Township<br />
                      Kandivali East, Mumbai – 400 101<br />
                      Maharashtra, India
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-foreground mb-1">Factory:</p>
                    <p className="text-muted-foreground text-sm">
                      Gala No. 10, 11<br />
                      Sanghvi Industrial Estate No.1<br />
                      Navghar, Vasai East<br />
                      Dist. Thane – 401 210<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>


              {/* Phone Numbers */}
              <div className="border border-border bg-background p-6">
                <h3 className="text-xs tracking-wider text-muted-foreground mb-4">CONTACT</h3>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground mb-1">Phone:</p>
                    <a href="tel:+919820197624" className="text-muted-foreground text-sm hover:text-primary">
                      +91 98201 97624
                    </a>
                  </div>

                  <div>
                    <p className="font-medium text-foreground mb-1">Alternate:</p>
                    <a href="tel:+919762732293" className="text-muted-foreground text-sm hover:text-primary">
                      +91 97627 32293
                    </a>
                  </div>

                  <div>
                    <p className="font-medium text-foreground mb-1">Email:</p>
                    <a href="mailto:ajay@dapepl.com" className="text-muted-foreground text-sm hover:text-primary">
                      ajay@dapepl.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Department Contacts */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {departmentContacts.map((contact, i) => (
              <div key={i} className="border border-border p-6">
                <p className="text-xs tracking-wider text-muted-foreground mb-3">{contact.title}</p>
                <p className="font-medium text-foreground mb-2">{contact.name}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-primary hover:underline text-sm"
                >
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Map */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div
            className="w-full h-[400px] bg-muted flex items-center justify-center"
            style={{ backgroundColor: '#e5e3df' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.0!2d72.83!3d19.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9f2a9f2a9f2%3A0x0!2zMTnCsDI1JzEyLjAiTiA3MsKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DAP Engineering Location"
            />
          </div>
        </div>
      </section>


      {/* Contact CTA */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-background/70">
            Have questions about our products or services?{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-primary hover:underline font-medium">
              Contact us.
            </a>
          </p>
        </div>
      </section>


      <Footer />
    </main>
  );
};


export default Contact;
