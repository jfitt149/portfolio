// src/components/Contact/index.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Message</Label>
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;