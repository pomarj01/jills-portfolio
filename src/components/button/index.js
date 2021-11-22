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
// Refactor in the future, probably add in card component
// as this is specifially for that component for hiding CTA 

const complexColor = css`
  ${(props) =>
    props.variant === "primary"
      ? ` background: ${theme.colors.primary}; `
      : (props.variant !== 'custom' &&
      `
        background: ${theme.colors[`${props.variant}`]};
        border: ${theme.borders.thin};
        border-color: ${theme.colors.primary};
      `)}

  ${(props) =>
    props.variant === "custom" &&
    `
      background: ${props.customColor};
      color: ${props.customText};
    `}
`;
  
const BaseButton = styled.button`
  justify-content: center;
  align-items: center;
  padding: ${theme.space[5]} ${theme.space[9]};
  margin: ${theme.space[4]};
  color: ${theme.colors.dark};
  border-radius: ${theme.radii.base};
  font-weight: ${theme.fontWeights.bold};
  ${(props) => (props.hidden ? complexDisplay : "display: flex")};
  ${(props) => props.variant && complexColor};
  
  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    color: ${theme.colors.dark};
    border-color: ${theme.colors.accent[0]};
    background-color: ${theme.colors.accent[0]};
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
    cursor: not-allowed;
  }
`;


const Button = ({
  children,
  label,
  variant,
  onClick,
  disabled,
  device,
  customColor,
  customText,
}) => {
  const renderChildren = () => {
    if (label) return label;
    if (children) return children;

    return "Button";
  };

  const handleOnClick = (event) => {
    if (disabled) return;

    onClick && onClick({ event });
  };

  return (
    <BaseButton
      variant={variant}
      disabled={disabled}
      hidden={device}
      onClick={handleOnClick}
      customColor={customColor}
      customText={customText}
    >
      {renderChildren()}
    </BaseButton>
  );
};

BaseButton.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "custom"]),
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