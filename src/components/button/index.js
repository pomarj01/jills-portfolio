import React from "react";
import PropTypes from 'prop-types'
import styled, { css } from "styled-components";
import { device, theme } from "../../utils";

const complexDisplay = css`
  ${(props) =>
    props.hidden === "xsmallUp"
      ? `@media ${device.l_mobile} { display: none; };`
      : `display: flex;`}

  ${(props) =>
    props.hidden === "smallUp"
      ? `@media ${device.tablet} { display: none; };`
      : `display: flex;`}

  ${(props) =>
    props.hidden === "mediumUp"
      ? `@media ${device.laptop} { display: none; };`
      : `display: flex;`}

  ${(props) =>
    props.hidden === "largeUp"
      ? `@media ${device.l_laptop} { display: none; };`
      : `display: flex;`}
`;

const BaseButton = styled.button`
  ${(props) => (props.hidden ? complexDisplay : "display: flex")};
  justify-content: center;
  align-items: center;
  padding: ${theme.space[4]} ${theme.space[5]};
  margin: ${theme.space[4]};

  background: ${(props) =>
    props.variant === "primary" 
      ? theme.colors.primary 
      : theme.colors[`${props.variant}`]
    };
  border: ${theme.borders.thin};
  border-color: ${theme.colors.primary};
  border-radius: ${theme.radii.base};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.dark};

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    color: ${theme.colors.light};
    border-color: ${theme.colors.accent};
    background-color: ${theme.colors.accent};
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
    cursor: not-allowed;
  }
`;


const Button = ({ children, label, variant, onClick, disabled, device  }) => {

  const renderChildren = () => {
    if (label) return label;
    if (children) return children;

    return 'Button';
  };

  const handleOnClick = (event) => {
    if (disabled) return;

    onClick &&
      onClick({ event});
  };

  return (
    <BaseButton variant={variant} disabled={disabled} hidden={device} onClick={handleOnClick}>
      {renderChildren()}
    </BaseButton>
  );
};

BaseButton.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.string,
  children: PropTypes.node.isRequired,
};

BaseButton.defaultProps = {
  variant: "primary",
  label: '',
  hidden: '',
  disabled: false,
};


export default Button;