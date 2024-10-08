/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let area = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const shorty = Math.min(height[left], height[right]);
    const calculatedArea = (right - left) * shorty;

    if (area < calculatedArea) {
      area = calculatedArea;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right --;
    }
  }

  return area;
};