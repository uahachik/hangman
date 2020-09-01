import alt_blank from '../assets/img/blank';
import alt_head from '../assets/img/head';
import alt_body from '../assets/img/body';
import alt_left_arm from '../assets/img/left_arm';
import alt_right_arm from '../assets/img/right_arm';
import alt_left_leg from '../assets/img/left_leg';
import alt_right_leg from '../assets/img/right_leg';

const resources = [
  ['right-leg', alt_right_leg()],
  ['left-leg', alt_left_leg()],
  ['right-arm', alt_right_arm()],
  ['left-arm', alt_left_arm()],
  ['body', alt_body()],
  ['head', alt_head()],
  ['blank', alt_blank()],
].map(name => `img/${name[0]}.png` || `${name[1]}`);

export default n => resources[n] || resources[0];

// const blank = 'img/blank.png';
// const head = 'img/head.png';
// const body = 'img/body.png';
// const leftArm = 'img/left-arm.png';
// const rightArm = 'img/right-arm.png';
// const leftLeg = 'img/left-leg.png';
// const rightLeg = 'img/right-leg.png';

// export default number => {
//   const setImg = (part, alt_part) => part ? part : alt_part;
//   let img;
  
//   switch (number) {
//     case 6:
//       img = setImg(blank, alt_blank());
//       break;
//     case 5:
//       img = setImg(head, alt_head());
//       break;
//     case 4:
//       img = setImg(body, alt_body());
//       break;
//     case 3:
//       img = setImg(leftArm, alt_left_arm());
//       break;
//     case 2:
//       img = setImg(rightArm, alt_right_arm());
//       break;
//     case 1:
//       img = setImg(leftLeg, alt_left_leg());
//       break;
//     case 0:
//       img = setImg(rightLeg, alt_right_leg());
//       break;
//     default:
//       img = setImg(rightLeg, alt_right_leg());
//   }
//   return img;
// }

// const resources = [
//   'right-leg', 'left-leg', 'right-arm', 'left-arm', 'body', 'head', 'blank',
// ].map(name => `img/${name}.png`);

// export default n => resources[n] || resources[0];