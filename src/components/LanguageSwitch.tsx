import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
   
    i18n.changeLanguage(lang);
    
  };
  

  return (
    <div className="ms-10">
   
      <StyledWrapper>
        <div className="container">
          <div className="tabs items-center">
            <input
              type="radio"
              id="radio-1"
              name="tabs"
              value="en"
              defaultChecked
              onChange={(e) => changeLanguage(e.target.value)} 
            />
            <label className="tab" htmlFor="radio-1">
              English
            </label>
            <input
              type="radio"
              id="radio-2"
              name="tabs"
              value="ar"
              onChange={(e) => changeLanguage(e.target.value)}
            />
            <label className="tab" htmlFor="radio-2">
              العربية
            </label>
            <span className="glider" />
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
};


const StyledWrapper = styled.div`
  .tabs {
    display: flex;
    position: relative;
    background-color: #fff;
    box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15),
      0 6px 12px 0 rgba(24, 94, 224, 0.15);
    padding: 0.75rem;
    border-radius: 99px;
  }

  .tabs * {
    z-index: 2;
  }

  .container input[type="radio"] {
    display: none;
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 50px;
    font-size: 0.8rem;
    color: black;
    font-weight: 500;
    border-radius: 99px;
    cursor: pointer;
    transition: color 0.15s ease-in;
  }

  

  .container input[type="radio"]:checked + label {
    color: #185ee0;
  }

  .container input[type="radio"]:checked + label > .notification {
    background-color: #185ee0;
    color: #fff;
    margin: 0px;
  }

  .container input[id="radio-1"]:checked ~ .glider {
    transform: translateX(0);
  }

  .container input[id="radio-2"]:checked ~ .glider {
    transform: translateX(100%);
  }

  .container input[id="radio-3"]:checked ~ .glider {
    transform: translateX(200%);
  }

  .glider {
    position: absolute;
    display: flex;
    height: 30px;
    width: 50px;
    background-color: #e6eef9;
    z-index: 1;
    border-radius: 99px;
    transition: 0.25s ease-out;
  }

  @media (max-width: 700px) {
    .tabs {
      transform: scale(0.6);
    }
  }
`;


export default LanguageSwitcher;
