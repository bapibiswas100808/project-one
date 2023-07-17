import React from "react";
import { Container } from "react-bootstrap";
import "./Message.css";

const Message = () => {
  return (
    <section className="message-area">
      <Container>
        <div className="message-content">
          <h3 className="text-center text-white">
            “Own a piece of the future, own the Blade.”
          </h3>
        </div>
      </Container>
    </section>
  );
};

export default Message;
