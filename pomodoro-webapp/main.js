// ring timer and time display
const circle = document.querySelector('circle')
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
let TIME_LIMIT = 300
let resetTimers = false // resetting when pomodoro timer is set in the settings page, when true
//let resetTimeSelectors = false
let resetShort = false // resetting when short timer is set in the settings page, when true
let resetLong = false // // resetting when long timer is set in the settings page, when true

const start__pause = document.querySelector(".start__pause")
let paused = false // Pausing the timer
let alarm = "./assets/Alarm06.wav"

const break__selectors = Array.from(document.querySelectorAll(".break__mode--btn"))
const change__settings = document.querySelector(".menu__options--btn") //menu options selector
const close__menu = document.querySelector(".close__menu") //close the settings menu
const modal = document.querySelector(".modal__settings") // modal settings page
const pomodoroBtn = document.querySelector(".pomodoro--btn") // to set focus on this button on load
// timer controller setter
const timer__controller = document.querySelector(".time__settings")

//pomodoro time controllers
const count__up = document.querySelector(".btn--up")
const count__down = document.querySelector(".btn--down")
const input__control__time = document.querySelector(".time__control") //pomodoro control
const time__control__short = document.querySelector(".time__control__short") //short break control
const time__control__long = document.querySelector(".time__control__long") // long break control
let pomodoro__count = Number(input__control__time.value)
let short__count = Number(time__control__short.value)
let long__count = Number(time__control__long.value)
 TIME_LIMIT = pomodoro__count * 60
const main__settings = document.querySelector(".main__ctrl__panel")
 
/* LAZY LOADING */

let imagesToLoad = document.querySelectorAll('img[data-src]');

let loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if ('IntersectionObserver' in window) {
  let observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
}
else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

/* END LAZY LOADING */

 
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / TIME_LIMIT * circumference;
  circle.style.strokeDashoffset = offset;
}

function timer(seconds) {
  const temp = seconds
  const progressChecker = setInterval(function () {
    const displayTime = document.querySelector("time")
    const mins = Math.floor(seconds / 60)
    const displayMin = mins < 10 ? `0${mins}` : mins
    const secs = seconds % 60
    const displaySec = secs < 10 ? `0${secs}` : secs
    seconds--
    displayTime.innerText = `${displayMin}:${displaySec}`

    //reset timers when changes has been implemented in the
    //form and form has been submitted.
    if (resetTimers) {
      clearInterval(progressChecker)
      resetTimers = false
    }
    if (resetShort) {
      clearInterval(progressChecker)
      resetShort = false
    }
    if (resetLong) {
      clearInterval(progressChecker)
      resetLong = false
    }


    if (seconds === 0) {
      displayTime.innerHTML = "00:00"
      start__pause.innerHTML = "Start"
      alarmSetter()
      clearInterval(progressChecker)
    }

    if (!paused) {
      clearInterval(progressChecker)
    }


    setProgress((temp - seconds))
  }, 1000)

}

timer(TIME_LIMIT)


/* SELECTION FOR CUSTOMIZATION */
window.onload = () => {
  break__selectors[0].checked == true
}

const timeselectors = () => break__selectors.forEach(selector => {

  selector.onchange = () => {
    resetTimeSelectors = true
    if (selector.checked) {
      if (selector.id == "short") {
        shortBreakMode()
      } else if (selector.id == "long") {
        longBreakMode()
      } else {
        setPomodoro()
      }
    }

  }
})
timeselectors()
/* modal setting */
change__settings.addEventListener("click", () => {
  modal.classList.toggle("modal__settings__hide")
})
close__menu.addEventListener("click", () => {
  modal.classList.toggle("modal__settings__hide")
  resetTimers = false
  resetLong = false
  resetShort = false
  //resetTimeSelectors = true
})

timer__controller.addEventListener("click", (evt) => {
  const target = evt.target
  //get parent div of target
  const parent__div = target.closest("div")
  // get parent div of input element
  const parent__input = parent__div.previousElementSibling
  // get input element
  const target__input = parent__input.firstElementChild
  if (target__input == null || parent__input == null) {
    return
  }
  if (target__input.classList.contains("time__control")) {
    if (target.classList.contains("btn--up")) {
      countUp(90, short__count, target__input, 5)
    }
    else if (target.classList.contains("btn--down")) {
      countDown(5, pomodoro__count, target__input, 90)
    }
  } else if (target__input.classList.contains("time__control__short")) {
    if (target.classList.contains("btn--up")) {
      countUp(10, short__count, target__input, 1)
    }
    else if (target.classList.contains("btn--down")) {
      countDown(1, short__count, target__input, 10)
    }
  } else if (target__input.classList.contains("time__control__long")) {
    if (target.classList.contains("btn--up")) {
      countUp(20, long__count, target__input, 11)
    }
    else if (target.classList.contains("btn--down")) {
      countDown(11, long__count, target__input, 20)
    }
  }
})

const countUp = (maxvalue, counter, targetInput, checkmin) => {

  if (Number(targetInput.value < checkmin)) {
    //alert(`Minimum value should not be below ${checkmin}`)
    targetInput.value = checkmin
  }

  if (Number(targetInput.value > maxvalue)) {
    //alert(`Maximum value should not exceed ${maxvalue}`)
    targetInput.value = maxvalue
  }
  counter = Number(targetInput.value)
  if (counter < maxvalue) {
    counter = counter + 1
    targetInput.value = counter
  }
}

const countDown = (minvalue, counter, targetInput, checkmax) => {
  if (Number(targetInput.value < minvalue)) {
    //alert(`Minimum value should not be below ${minvalue}`)
    targetInput.value = minvalue
  }

  counter = Number(targetInput.value)
  if (counter > minvalue) {
    counter = counter - 1
    targetInput.value = counter
  }

  if (Number(targetInput.value > checkmax)) {
    //alert(`Maximum value should not exceed ${checkmax}`)
    targetInput.value = checkmax
  }
}

//main settings panel form
main__settings.addEventListener("submit", (evt) => {
   evt.preventDefault()
  modal.classList.toggle("modal__settings__hide")
  changeColor()
  changeFont()
  alert("Changes applied ")

})

//color selector function
const changeColor = () => {
  //progress ring
  const progress__ring = document.querySelector(".progress-ring__circle")
  const checkedBtns = document.querySelector("input[type='radio']:checked + label.break__mode__ctrls")
  const colors = Array.from(document.querySelectorAll(".color__list"))
  colors.forEach(colored => {
    if (colored.checked) {
      if (colored.id == "turquoise") {
        progress__ring.classList.add("lime__ring")
        //checkedBtns.forEach(btn => {
        // btn.classList.add("lime__btn")
        checkedBtns.style.backgroundColor = "#70F380"
        //})
        // checkedBtn.classList.add("lime__btn")
        //checkedBtn.style.backgroundColor = "#70F380"
      } else if (colored.id == "purple") {
        progress__ring.classList.add("purple__ring")
        // checkedBtn.style.backgroundColor = "#D881F8"
      } else {
        progress__ring.classList.remove("purple__ring")
        progress__ring.classList.remove("lime__ring")
      }
    }
  })
}

//change font function
const changeFont = () => {
  const fonts = Array.from(document.querySelectorAll(".fonts__list"))
  const body = document.querySelector("body")
  fonts.forEach(fontSelect => {
    if (fontSelect.checked) {
     
      if (fontSelect.id == "roboto") {
         body.classList.add("roboto__font")
        body.classList.remove("kumbh__font")
        body.classList.remove("mono__font")
      } else if (fontSelect.id == "mono") {
        body.classList.add("mono__font")
        body.classList.remove("roboto__font")
        body.classList.remove("kumbh__font")
      } else {
        body.classList.remove("roboto__font")
        body.classList.remove("mono__font")
        body.classList.add("kumbh__font")
      }
    }
   })
}

const setPomodoro = () => {
  resetTimers = true
  //const pomodoroTimer = document.querySelector(".time__control")
  TIME_LIMIT = input__control__time.value * 60
  timer(TIME_LIMIT)
  // resetTimers = false
}

const shortBreakMode = () => {
  resetShort = true
  //resetTimers = true
  TIME_LIMIT = time__control__short.value * 60
  timer(TIME_LIMIT)
  //resetTimers = false
}

const longBreakMode = () => {
  resetLong = true
  // resetTimers = true
  TIME_LIMIT = time__control__long.value * 60
  timer(TIME_LIMIT)
  // resetTimers = false
}

start__pause.addEventListener("click", () => {

   paused = !paused
 
  if (paused) {
    start__pause.innerHTML = "Pause"
  } else {
    start__pause.innerHTML = "Start"
    if (TIME_LIMIT <= 0) {
      return
    } else {
      time__left()
      timer(TIME_LIMIT)
    }

  }

  if (TIME_LIMIT <= 0) {
    start__pause.innerHTML = "Start"
    break__selectors.forEach(selected => {
      if (selected.checked) {

        if (selected.id == "short") {
          // resetShort = false
          shortBreakMode()
        } else if (selected.id == "long") {
          longBreakMode()
        } else {
          setPomodoro()
        }
      }
      // paused = !paused
      // start__pause.innerHTML = "Pause"
    })
    //start__pause.innerHTML = "Start"
    return
  } else {
    timer(TIME_LIMIT)
  }

})

//calculate time left on clock
const time__left = () => {
  const time__left = document.querySelector("time").innerHTML
  const splitTime = time__left.split(":")
  const minutes__left = Number(splitTime[0])
  const seconds__left = Number(splitTime[1])
  TIME_LIMIT = minutes__left * 60 + seconds__left
}

const playSound = () => {
  const audio = new Audio(alarm)
  audio.play()
}

let alarmSetter = () => setTimeout(playSound, 1000);
//alarmSetter()