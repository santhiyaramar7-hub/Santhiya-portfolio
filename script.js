const darkBtn =
document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

fetch("/api/projects")
.then(res => res.json())
.then(data => {

const projects =
document.getElementById("projects");

data.forEach(project => {

projects.innerHTML += `
<div class="project-card">
<h3>${project.title}</h3>
<p>${project.description}</p>
<a href="${project.github}"
target="_blank">
GitHub
</a>
</div>
`;

});
});

document
.getElementById("contactForm")
.addEventListener("submit",
async(e)=>{

e.preventDefault();

await fetch("/api/contact",{
method:"POST",
headers:{
"Content-Type":
"application/json"
},
body:JSON.stringify({
name:
document.getElementById("name").value,

email:
document.getElementById("email").value,

message:
document.getElementById("message").value
})
});

alert("Message Sent");
});