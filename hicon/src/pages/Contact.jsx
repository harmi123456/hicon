import React, { useEffect, useState } from 'react'

export default function Contact() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


   const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.question.trim()) {
      newErrors.question = 'Please enter your question';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
      
      setTimeout(() => {
        setFormData({ name: '', email: '', question: '' });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>

      <div className="form-container">
        <div className="form-card">
          <div className="form-header">
            <h1>Get In Touch</h1>
            <p>We'd love to hear from you. Send us a message!</p>
          </div>
          
          {submitted ? (
            <div className="success-message">
              <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <h2>Thank You!</h2>
              <p>Your message has been sent successfully.</p>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="question" className="form-label">Your Question</label>
                <textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  className={`form-textarea ${errors.question ? 'error' : ''}`}
                  placeholder="Tell us what's on your mind..."
                  rows="5"
                ></textarea>
                {errors.question && <span className="error-text">{errors.question}</span>}
              </div>

              <button type="button" onClick={handleSubmit} className="submit-btn">
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}