import Particles from 'react-particles-js';


function Particle() {
  return (
    <>
      <Particles width="100%" height="100vh" 
              params={{
                particles: {
                  number:{
                    value: 50,
                    density:{
                      enable: true,
                      value_area: 1250
                    }
                  },
                  color:{
                    value: '#636e72'
                  },
                  shape:{
                    type: 'circle',
                    stroke: {
                      width: 0
                    },
                    polygon:{
                      nb_sides: 5
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 120,
                    opacity: 0.4,
                    width: 1,
                    shadow: {
                      enable: true,
                      color: "#e74c3c",
                    }
                  },
                  move:{
                    enable: true,
                    random: false,
                    straight: false,
                    // out_mode: "out",
                    bounce: false,
                    speed: 2,
                    direction: "none",
                    attract:{
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim:{
                      enable: false,
                      speed: 40,
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                    }
                  }
                },

                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 50,
                            duration: 0.4,
                        }
                    }
                },

                retina_detect: true,
              }}
      />
    </>
  )
}

export default Particle;