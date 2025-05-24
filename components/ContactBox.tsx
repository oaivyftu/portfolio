import React from 'react';

const ContactBox = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="w-full lg:w-[70%] mx-auto my-[120px] lg:mt-[140px] lg:mb-[200px] text-center">
          <h3>Want to work together?</h3>
          <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect</p>
          <a href="mailto:contact@vincentle.ca" className="my-[15px] text-[34px] leading-[52px] lg:text-[64px] lg:leading-[88px] font-normal no-underline">contact@vincentle.ca</a>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;