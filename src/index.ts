import '../sass/style.scss';

const containerRadius = document.querySelector('[data-container=container-radius]') as HTMLInputElement;

const inputBorderTopLeftX = document.querySelector('[data-radius=top-left-x]') as HTMLInputElement;
const inputBorderTopLeftY = document.querySelector('[data-radius=top-left-y]') as HTMLInputElement;
const inputBorderTopRightX = document.querySelector('[data-radius=top-right-x]') as HTMLInputElement;
const inputBorderTopRightY = document.querySelector('[data-radius=top-right-y]') as HTMLInputElement;
const inputBorderBottomLeftX = document.querySelector('[data-radius=bottom-left-x]') as HTMLInputElement;
const inputBorderBottomLeftY = document.querySelector('[data-radius=bottom-left-y]') as HTMLInputElement;
const inputBorderBottomRightX = document.querySelector('[data-radius=bottom-right-x]') as HTMLInputElement;
const inputBorderBottomRightY = document.querySelector('[data-radius=bottom-right-y]') as HTMLInputElement;

const surfaceBox = document.querySelector('[data-radius=surface]') as HTMLDivElement;

const processCssCodeBorderRadius = ():void => {
  const borderRadiusInOrder = `${inputBorderTopLeftX.value || 0}px ${inputBorderTopRightX.value || 0}px ${inputBorderBottomLeftX.value || 0}px ${inputBorderBottomRightX.value || 0}px / ${inputBorderTopLeftY.value || 0}px ${inputBorderTopRightY.value || 0}px ${inputBorderBottomLeftY.value || 0}px ${inputBorderBottomRightY.value || 0}px`;

  surfaceBox.style.borderRadius = borderRadiusInOrder;
};

containerRadius.addEventListener('input', processCssCodeBorderRadius);
