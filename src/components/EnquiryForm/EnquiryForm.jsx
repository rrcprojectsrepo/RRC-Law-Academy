import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { PROGRAMME_OPTIONS } from '../../data/academy';
import { openWhatsAppEnquiry } from '../../utils/whatsapp';

const INITIAL_STATE = { name: '', phone: '', email: '', programme: '', message: '' };

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your full name.';
  if (!form.phone.trim()) errors.phone = 'Please enter your phone number.';
  else if (!/^[0-9+\-\s()]{7,16}$/.test(form.phone.trim())) errors.phone = 'Please enter a valid phone number.';
  if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!form.programme) errors.programme = 'Please select a programme.';
  return errors;
};

export default function EnquiryForm({ initialProgramme = '' }) {
  const [form, setForm] = useState({ ...INITIAL_STATE, programme: initialProgramme });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setSubmitted(false);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      openWhatsAppEnquiry(form);
      setSubmitted(true);
    }
  };

  return (
    <form className="enquiry-card" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="enquiry-name">Full Name <span className="req" aria-hidden="true">*</span></label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? 'has-error' : ''}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
          />
          {errors.name && <p className="field-error" id="enquiry-name-error" role="alert">{errors.name}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="enquiry-phone">Phone Number <span className="req" aria-hidden="true">*</span></label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your phone number"
            value={form.phone}
            onChange={handleChange}
            className={errors.phone ? 'has-error' : ''}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'enquiry-phone-error' : undefined}
          />
          {errors.phone && <p className="field-error" id="enquiry-phone-error" role="alert">{errors.phone}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="enquiry-email">Email</label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? 'has-error' : ''}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
          />
          {errors.email && <p className="field-error" id="enquiry-email-error" role="alert">{errors.email}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="enquiry-programme">Programme <span className="req" aria-hidden="true">*</span></label>
          <select
            id="enquiry-programme"
            name="programme"
            value={form.programme}
            onChange={handleChange}
            className={errors.programme ? 'has-error' : ''}
            aria-invalid={Boolean(errors.programme)}
            aria-describedby={errors.programme ? 'enquiry-programme-error' : undefined}
          >
            <option value="">Select a programme</option>
            {PROGRAMME_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.programme && <p className="field-error" id="enquiry-programme-error" role="alert">{errors.programme}</p>}
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="enquiry-message">Message</label>
          <textarea
            id="enquiry-message"
            name="message"
            placeholder="Tell us about your preparation goals…"
            value={form.message}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-submit">
        <button type="submit" className="btn btn--whatsapp btn--lg">
          <FaWhatsapp aria-hidden="true" />
          Send Enquiry on WhatsApp
        </button>
        {submitted && <p className="form-hint" role="status">Opening WhatsApp… your message is ready to send.</p>}
      </div>
      <p className="form-hint">
        Submitting this form opens WhatsApp with your enquiry pre-filled. No data is stored on this website.
      </p>
    </form>
  );
}