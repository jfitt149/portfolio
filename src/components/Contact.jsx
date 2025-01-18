// src/components/Contact/index.js
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 100px 50px;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.white};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.text};
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
  
  &:focus {
    border-color: ${props => props.theme.colors.secondary};
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.text};
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
  min-height: 150px;
  
  &:focus {
    border-color: ${props => props.theme.colors.secondary};
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 30px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled(motion.div)`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  text-align: center;
  
  ${props => props.$type === 'success' && `
    background: rgba(100, 255, 218, 0.1);
    color: ${props.theme.colors.secondary};
  `}
  
  ${props => props.$type === 'error' && `
    background: rgba(255, 100, 100, 0.1);
    color: #ff6464;
  `}
`;

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    emailjs.init({
              publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            });

    try {
      console.log(form.current);
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        form.current.reset();
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
      console.error("Error sending email:", error);

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      <ContactForm ref={form} onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="user_name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="user_email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Message</Label>
          <TextArea
            name="message"
            required
          />
        </FormGroup>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </ContactForm>

      {status.message && (
        <StatusMessage
          $type={status.type}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {status.message}
        </StatusMessage>
      )}
    </ContactSection>
  );
};

export default Contact;