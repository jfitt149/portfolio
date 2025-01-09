// src/pages/Contact.js
import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection>
      <Container>
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat.</p>
        <Form action="https://formspree.io/f/mgvvpgqw" method="POST">
          <InputWrapper>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="email">Email</label>
            <input type="email" name="_replyto" required />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="5" required></textarea>
          </InputWrapper>
          <Button type="submit">Send Message</Button>
        </Form>
      </Container>
    </ContactSection>
  );
};

export default Contact;

// Styled Components
const ContactSection = styled.section`
  padding: 4rem 0;
  background: #f9f9f9;
`;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  
  p {
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  display: grid;
  grid-gap: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input, textarea {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
      outline: none;
      border-color: #e91e63;
    }
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #e91e63;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background: #d81b60;
  }
`;