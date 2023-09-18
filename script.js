const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',
  about:
    "Hello I'm Kalpit Das, a cyber security enthusiast. Currently I am pursing my Bachelor's in Advanced Networking and cyber Security, I hold 1% rank on TryHackMe and I have jr. pentester certificate of TryHackMe. I am well-equipped to identify and analyze potential security threats, vulnerabilites. I am excited to continue leveraging my skills and experience to help organizations stay ahead of potential cyber threats and protect their valuable assets.    ",
  skills:
    "Ethical Hacking | Penetration Testing | Blue Teaming | Defensive Security",
  education:
    "Bachelors of Advanced Networking and Cyber Security",
  experience:
  '<span class="code"> Working as Cyber Security Intern </span><br> Security Analyst | SOC Analyst - Present<br> ',
  certifications: 
    " jr. pentester certificate of TryHackMe <br> Network Esentials from Cisco <br> AWS academy cloud foundations <br> Network Penetration Testing from ISOEH   ",
  contact:
    "You can contact me on Linkedin and or via the mail:<br><a href='https://www.linkedin.com/in/kalpit-d-ab042820b' class='success link'>Linkedin</a>, <a href='mailto:kalpitdas2003@gmail.com' class='success link'>Email</a>,"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
