
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link")
            }
            for (tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")
        }

    
    
    
    
    var sidemenu = document.getElementById("side_menu");
    function open_menu(){
        side_menu.style.right = "0"
    }
    function close_menu(){
        side_menu.style.right = "-200px"
    }





function updateIcon() {
  if (document.body.classList.contains("dark-mode")) {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

    const toggleBtn = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");

    // Start in light mode
    document.body.classList.add("light-mode");
    updateIcon();

    toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    updateIcon();
    });


  // Typing Animation

 const mainText = "Hi, I'm Kimel";
 const subText = "ASPIRING CLOUD ENGINEER ";

 const typedTextEl = document.getElementById("typed-text");
 const typedSubEl = document.querySelector(".typed-subtext");

 let i = 0; 
 let j = 0;

 function typeMain() {
     if (i < mainText.length){ 
        typedTextEl.innerHTML += mainText.charAt(i);
        i++;
        setTimeout(typeMain, 100); 
        } else {
        setTimeout(typeSub, 500);
        }
     }

function typeSub() {
    if (j < subText.length) {
        typedSubEl.innerHTML += subText.charAt(j);
        j++;
        setTimeout(typeSub, 80);
    }else{
        setTimeout(resetTyping,1500);
    }
 }

function resetTyping() { 
    i = 0; 
    j = 0;
    typedTextEl.innerHTML = "";
    typedSubEl.innerHTML = "";
    typeMain();
}

window.onload = typeMain;

 // chatbot function

function toggleChat() {
  const chat = document.getElementById("chatContainer");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message === "") return;

  addMessage(message, "user-message");
  botReply(message.toLowerCase());

  input.value = "";
}

function addMessage(text, className) {
  const chatBody = document.getElementById("chatBody");
  const msgDiv = document.createElement("div");
  msgDiv.className = className;
  msgDiv.innerText = text;
  chatBody.appendChild(msgDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(message) {
  let reply = "Sorry, I didn't understand that. Try asking about skills or projects.";

  if (message.includes("hi") || message.includes("hello")) {
    reply = "Hello! 👋 I'm Kimel's personal bot. Feel free to ask me anything!";
  }
  if (message.includes("hello")){
    reply = "Hi! 👋 I'm Kimel's personal bot. Feel free to ask me anything!";
  } else if (message.includes("Skills")|| message.includes("skill")){
    reply = "My skills are focusing in Web development and Cloud"
  } else if (message.includes("tech stack")) {
    reply = "My tech stack includes HTML, CSS, JavaScript, VB.NET, PHP , Laravel and Python.";
  } else if (message.includes("Projects") || message.includes("project")) {
    reply = "I built a Task Scheduler System, Portfolio Website, and other IT academic projects.";
  } else if (message.includes("gmail")|| message.includes("email")) {
    reply = "You can reach me at: melquichicogo@gmail.com";
  } else if (message.includes("resume") || message.includes("cv")) {
    reply = "You can download my Resume or CV in the Home section";
  } else if (message.includes("contact_number") || message.includes("number")){
    reply = "You can reach me in this number:09079801045";
  } else if (message.includes("about you") || message.includes("yourself")){
    reply = "Hi, I'm Melqui Chicogo, an aspiring IT professional with interest in cloud engineering, software development, and system automation. I enjoy building practical projects to improve efficiency and user experience."
  } 
  
  setTimeout(() => addMessage(reply, "bot-message"), 500);
}



  const scriptURL = "https://script.google.com/macros/s/AKfycbx2fsVJW0QFxeUeohm1nhYNp_-1Yza-LbF8zH0vlQuFlWalFoBc1RY3Vm3gri4iG-Ve/exec"; // from Apps Script deployment
  const form = document.forms["submit-to-goggle-sheet"]; // must match form name EXACTLY

  form.addEventListener("submit", e => {
    e.preventDefault(); // stop normal form submit

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form)
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Error: " + data.message);
      }
    })
    .catch(error => {
      alert("Something went wrong!");
      console.error("Error!", error.message);
    });
  });



