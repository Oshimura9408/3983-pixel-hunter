export const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template; // .trim()
  return wrapper;
};

const sliderContainer = document.querySelector(`#main`);

export const selectSlide = (element) => {
  sliderContainer.innerHTML = ``;
  sliderContainer.appendChild(element);
};
