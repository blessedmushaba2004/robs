document.getElementById("send").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const phoneNumber = "263789052888"; 

  const text = 
`*New Customer Inquiry*
-----------------------
*Name:* ${name}
*Email:* ${email}
*Message:* ${message}`;

  const encodedText = encodeURIComponent(text);

  const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  window.open(url, "_blank");

  // Reset form
  document.getElementById("whatsapp-form").reset();
});
