const name = document.getElementById("name");
const mypwd = document.getElementById("mypwd");
const mypwd1 = document.getElementById("mypwd1");
const email = document.getElementById("email");
const form = document.getElementsByClassName("myform");

const validate = () => {
  if (!name.value || !email.value || !mypwd.value || !mypwd1.value) {
    alert("Please Enter All The Information");
    document.getElementById("myform").addEventListener("submit", e => {
      e.preventDefault();
      console.log("default prevented");
    });
  } else if (mypwd.value != mypwd1.value) {
    console.log("password not matched");
    alert("password not matched");
    document.getElementById("myform").addEventListener("submit", e => {
      e.preventDefault();
      console.log("default prevented");
    });
  } else {
    alert("thank you");
  }
};

const signup = () => {
  if (!email.value || !mypwd.value) {
    alert("Please Enter all information");
    document.getElementById("myform1").addEventListener("submit", e => {
      e.preventDefault();
      event.target.email.value = " ";
      event.target.mypwd.value = " ";
    });
  } else {
    alert("thank you! you are logged in.");
    event.target.email.value = " ";
    event.target.mypwd.value = " ";
  }
};
