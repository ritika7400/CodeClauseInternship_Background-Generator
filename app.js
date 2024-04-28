// script.js
document.addEventListener('DOMContentLoaded', function() {
    const color1Input = document.getElementById('color1');
    const color2Input = document.getElementById('color2');
    const gradientTypeSelect = document.getElementById('gradientType');
    const generateBtn = document.getElementById('generateBtn');
    const preview = document.querySelector('.preview');
    const cssCode = document.getElementById('cssCode');
  
    generateBtn.addEventListener('click', generateBackground);
  
    function generateBackground() {
      const color1 = color1Input.value;
      const color2 = color2Input.value;
      const gradientType = gradientTypeSelect.value;
      
      const background = gradientType === 'radial' ?
        `radial-gradient(circle, ${color1}, ${color2})` :
        `linear-gradient(to right, ${color1}, ${color2})`;
      
      preview.style.background = background;
      cssCode.value = `background: ${background};`;
    }
  });
  