import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import closeIcon from '../../assets/icons/close.svg'
import { device } from "../../helpers/useMediaQuery";

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  .modal {
    width: 90vw;
    height: auto;
    background-color: #fff;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.3);
    position: relative;

    @media ${device.tablet} {
      width: 40vw;
    }

    .close {
      position: absolute;
      top: 10px;
      right: 10px;

      img {
        width: 0.8rem;
        height: auto;
        transition: all 0.3s;
      }

      &:hover {
        img {
          transform: scale(1.2);
        }
      }
    }
  }
`;

const HeaderWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Content = styled.div`
`;

const Modal = ({ show, close, data }) => {
  return (
    <>
      {show
        ? createPortal(
            <Container id="modal_container" onClick={() => close()}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <HeaderWrapper className="modal_header">
                  <h2 className="modal_header-title">{data.header || 'Modal header'}</h2>
                  <button className="close" onClick={() => close()}>
                    <img src={closeIcon} alt="close" />
                  </button>
                </HeaderWrapper>
                <Content className="modal_content">{data.description}</Content>
              </div>
            </Container>,
            document.getElementById("modal")
          )
        : null}
    </>
  );
};

export default Modal;