export default () => {
    // return [
    //   'iPad Simulator',
    //   'iPhone Simulator',
    //   'iPod Simulator',
    //   'iPad',
    //   'iPhone',
    //   'iPod'
    // ].includes(navigator.platform)
    // // iPad on iOS 13 detection
    // || (navigator.userAgent.includes("Mac") && "ontouchend" in document);

  const iosQuirkPresent = () => {
    const audio = new Audio();

    audio.volume = 0.5;
    return audio.volume === 1;   // volume cannot be changed from "1" on iOS 12 and below
  };

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAppleDevice = navigator.userAgent.includes('Macintosh');
  const isTouchScreen = navigator.maxTouchPoints >= 1;   // true for iOS 13 (and hopefully beyond)

  return isIOS || (isAppleDevice && (isTouchScreen || iosQuirkPresent()));
}