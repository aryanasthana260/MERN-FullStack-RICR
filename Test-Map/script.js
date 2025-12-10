const mapImg = document.getElementById("mapimg");
const pinSound = document.getElementById("pinSound");
let isMuted = false;

// sound
function playSound() {
  if (!isMuted) {
    pinSound.currentTime = 0;
    pinSound.play();
  }
}

// ALL positions for a 900px-wide map image
const statesData = {
  "Jammu and Kashmir": {
    top: "150px",
    left: "420px",
    color: "red",
    title: "Jammu & Kashmir - Srinagar",
  },
  Ladhak: {
    top: "120px",
    left: "470px",
    color: "red",
    title: "Ladakh - Leh",
  },

  Punjab: {
    top: "230px",
    left: "410px",
    color: "teal",
    title: "Punjab - Chandigarh",
  },
  Haryana: {
    top: "250px",
    left: "440px",
    color: "lime",
    title: "Haryana - Chandigarh",
  },
  "Himachal Pradesh": {
    top: "200px",
    left: "450px",
    color: "violet",
    title: "Himachal Pradesh - Shimla",
  },

  Delhi: {
    top: "270px",
    left: "460px",
    color: "red",
    title: "Delhi - New Delhi",
  },

  Uttarakhand: {
    top: "220px",
    left: "480px",
    color: "orangered",
    title: "Uttarakhand - Dehradun",
  },
  Rajasthan: {
    top: "300px",
    left: "400px",
    color: "grey",
    title: "Rajasthan - Jaipur",
  },

  "Uttar Pradesh": {
    top: "300px",
    left: "500px",
    color: "orange",
    title: "Uttar Pradesh - Lucknow",
  },
  Bihar: {
    top: "320px",
    left: "560px",
    color: "maroon",
    title: "Bihar - Patna",
  },
  Jharkhand: {
    top: "360px",
    left: "575px",
    color: "brown",
    title: "Jharkhand - Ranchi",
  },

  "West Bengal": {
    top: "360px",
    left: "610px",
    color: "green",
    title: "West Bengal - Kolkata",
  },
  Sikkim: {
    top: "300px",
    left: "630px",
    color: "coral",
    title: "Sikkim - Gangtok",
  },

  Assam: {
    top: "300px",
    left: "700px",
    color: "PaleGreen",
    title: "Assam - Dispur",
  },
  "Arunachal Pradesh": {
    top: "260px",
    left: "740px",
    color: "Navy",
    title: "Arunachal Pradesh - Itanagar",
  },
  Meghalaya: {
    top: "330px",
    left: "680px",
    color: "YellowGreen",
    title: "Meghalaya - Shillong",
  },
  Nagaland: {
    top: "310px",
    left: "760px",
    color: "Salmon",
    title: "Nagaland - Kohima",
  },
  Manipur: {
    top: "340px",
    left: "740px",
    color: "Silver",
    title: "Manipur - Imphal",
  },
  Tripura: {
    top: "370px",
    left: "700px",
    color: "RebeccaPurple",
    title: "Tripura - Agartala",
  },
  Mizoram: {
    top: "360px",
    left: "720px",
    color: "RoyalBlue",
    title: "Mizoram - Aizawl",
  },

  Gujarat: {
    top: "380px",
    left: "380px",
    color: "gold",
    title: "Gujarat - Gandhinagar",
  },
  "Madhya Pradesh": {
    top: "380px",
    left: "470px",
    color: "pink",
    title: "Madhya Pradesh - Bhopal",
  },
  Chattisgarh: {
    top: "400px",
    left: "540px",
    color: "aqua",
    title: "Chhattisgarh - Raipur",
  },

  Maharashtra: {
    top: "450px",
    left: "430px",
    color: "blue",
    title: "Maharashtra - Mumbai",
  },
  Goa: {
    top: "500px",
    left: "430px",
    color: "chocolate",
    title: "Goa - Panaji",
  },

  "Andhra Pradesh": {
    top: "490px",
    left: "520px",
    color: "fuchsia",
    title: "Andhra Pradesh - Amaravati",
  },
  Telangana: {
    top: "460px",
    left: "500px",
    color: "olive",
    title: "Telangana - Hyderabad",
  },

  Karnataka: {
    top: "520px",
    left: "480px",
    color: "purple",
    title: "Karnataka - Bengaluru",
  },
  "Tamil Nadu": {
    top: "580px",
    left: "520px",
    color: "purple",
    title: "Tamil Nadu - Chennai",
  },
  Kerala: {
    top: "600px",
    left: "480px",
    color: "black",
    title: "Kerala - Thiruvananthapuram",
  },

  Odisha: {
    top: "420px",
    left: "590px",
    color: "yellow",
    title: "Odisha - Bhubaneswar",
  },

  Puducherry: {
    top: "610px",
    left: "530px",
    color: "red",
    title: "Puducherry",
  },

  "Andaman and Nicobar": {
    top: "720px",
    left: "750px", // in the Bay of Bengal, not on land
    color: "red",
    title: "Andaman & Nicobar - Port Blair",
  },
  "Daman and Diu": {
    top: "410px",
    left: "360px",
    color: "red",
    title: "Daman & Diu",
  },
  Chandigarh: {
    top: "245px",
    left: "435px",
    color: "red",
    title: "Chandigarh",
  },
};

// create a pin element
function createPin(data) {
  const pin = document.createElement("i");
  pin.classList.add("bi", "bi-geo-alt-fill", "fs-5", "position-absolute");
  pin.style.transform = "translate(-50%, -100%)";
  pin.style.textShadow = "1px 1px 4px rgba(0, 0, 0, 0.6)";
  pin.style.transition = "all 0.3s ease";

  pin.style.top = data.top;
  pin.style.left = data.left;
  pin.style.color = data.color;
  pin.title = data.title;

  return pin;
}

// show pin for selected state
function show() {
  const select = document.getElementById("place");
  const l = select.value;

  if (l === "select please") {
    alert("Please select a state/UT");
    return;
  }

  const data = statesData[l];
  if (!data) {
    alert("Location not found in map data");
    return;
  }

  const pin = createPin(data);
  mapImg.appendChild(pin);
  playSound();

  // reset dropdown
  select.value = "select please";
}

// clear only pins (not whole page)
function refresh() {
  const pins = mapImg.querySelectorAll(".bi-geo-alt-fill");
  pins.forEach((p) => p.remove());
}

// add pins for ALL states
function add() {
  for (const state in statesData) {
    const pin = createPin(statesData[state]);
    mapImg.appendChild(pin);
    playSound();
  }
}

// toggle sound
function toggleSound() {
  isMuted = !isMuted;
  const btn = document.getElementById("soundBtn");
  btn.textContent = isMuted ? "🔇 Sound Off" : "🔊 Sound On";
}
