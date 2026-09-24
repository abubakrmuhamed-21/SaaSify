export const fadeIn = (direction, delay = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      opacity: 0,
    },

    show: {
      y: 0,
      x: 0,
      opacity: 1,

      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        mass: 0.8,
        delay,
      },
    },
  };
};


export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},

    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};


export const slideIn = (direction, delay = 0, duration = 0.6) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },

    show: {
      x: 0,
      y: 0,

      transition: {
        type: 'spring',
        duration,
        delay,
      },
    },
  };
};


export const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: 30,
      opacity: 0,
    },

    show: {
      y: 0,
      opacity: 1,

      transition: {
        type: 'spring',
        delay,
      },
    },
  };
};


export const scale = (delay = 0) => {
  return {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },

    show: {
      scale: 1,
      opacity: 1,

      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 0.5,
        delay,
      },
    },
  };
};