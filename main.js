```
// Funny Hindi responses
const responses = [
  "Kya hai aapka problem?",
  "Aapke paas kitna paisa hai?",
  "Main aapke liye kya kar sakta hoon?",
  "Aapko kya chahiye?",
  "Main aapke liye ek chutkula sunata hoon: Ek aadmi ne doctor se kaha, 'Doctor sahab, mujhe lagta hai ki main pagal ho raha hoon.' Doctor ne kaha, 'Kyon?' Aadmi ne kaha, 'Kyunki main apne aap se baat karta hoon.' Doctor ne kaha, 'Koi baat nahi, main bhi apne aap se baat karta hoon.'",
  "Aapke paas kitna samay hai?",
  "Main aapke liye ek mazak sunata hoon: Ek aadmi ne apne dost se kaha, 'Tumhare paas kitna paisa hai?' Dost ne kaha, 'Mere paas 100 rupaye hain.' Aadmi ne kaha, 'Main tumse 50 rupaye udhaar loonga.' Dost ne kaha, 'Theek hai, le lo.'",
  "Aapko kya pasand hai?",
  "Main aapke liye ek aur chutkula sunata hoon: Ek aadmi ne apne dost se kaha, 'Tumhare paas kitna paisa hai?' Dost ne kaha, 'Mere paas 50 rupaye hain.' Aadmi ne kaha, 'Main tumse 25 rupaye udhaar loonga.' Dost ne kaha, 'Theek hai, le lo.'"
];

// Function to get a random response
function getResponse(message) {
  // Message ke anusar response generate karna
  if (message.toLowerCase().includes("namaste")) {
    return "Namaste! Kya hai aapka problem?";
  } else if (message.toLowerCase().includes("chutkula")) {
    return responses[Math.floor(Math.random() * responses.length)];
  } else {
    return responses[Math.floor(Math.random() * responses.length)];
  }
}

// Function to handle user input
function handleInput(message) {
  const response = getResponse(message);
  console.log(response);
}

// Test the handleInput function
handleInput("Namaste");
handleInput("Chutkula sunao");
handleInput("Kya hai aapka problem?");
```

Yeh script Messenger chatbot ke liye funny Hindi responses generate karta hai. Aap is script ko apne Messenger chatbot mein integrate kar sakte hain.
[2/6, 9:17 PM] Meta AI: Yeh ek simple Python script hai jo Messenger chatbot ke liye funny Hindi responses generate karta hai. Lekin aapne main.js ke script ke liye pucha hai, toh yeh ek JavaScript version hai:

```
// Funny Hindi responses
const responses = [
  "Kya hai aapka problem?",
  "Aapke paas kitna paisa hai?",
  "Main aapke liye kya kar sakta hoon?",
  "Aapko kya chahiye?",
  "Main aapke liye ek chutkula sunata hoon: Ek aadmi ne doctor se kaha, 'Doctor sahab, mujhe lagta hai ki main pagal ho raha hoon.' Doctor ne kaha, 'Kyon?' Aadmi ne kaha, 'Kyunki main apne aap se baat karta hoon.' Doctor ne kaha, 'Koi baat nahi, main bhi apne aap se baat karta hoon.'",
  "Aapke paas kitna samay hai?",
  "Main aapke liye ek mazak sunata hoon: Ek aadmi ne apne dost se kaha, 'Tumhare paas kitna paisa hai?' Dost ne kaha, 'Mere paas 100 rupaye hain.' Aadmi ne kaha, 'Main tumse 50 rupaye udhaar loonga.' Dost ne kaha, 'Theek hai, le lo.'",
  "Aapko kya pasand hai?",
  "Main aapke liye ek aur chutkula sunata hoon: Ek aadmi ne apne dost se kaha, 'Tumhare paas kitna paisa hai?' Dost ne kaha, 'Mere paas 50 rupaye hain.' Aadmi ne kaha, 'Main tumse 25 rupaye udhaar loonga.' Dost ne kaha, 'Theek hai, le lo.'"
];

// Function to get a random response
function getResponse(message) {
  // Message ke anusar response generate karna
  if (message.toLowerCase().includes("namaste")) {
    return "Namaste! Kya hai aapka problem?";
  } else if (message.toLowerCase().includes("chutkula")) {
    return responses[Math.floor(Math.random() * responses.length)];
  } else {
    return responses[Math.floor(Math.random() * responses.length)];
  }
}

// Function to handle user input
function handleInput(message) {
  const response = getResponse(message);
  console.log(response);
}

// Test the handleInput function
handleInput("Namaste");
handleInput("Chutkula sunao");
handleInput("Kya hai aapka problem?");
```
