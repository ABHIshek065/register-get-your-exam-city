let examCenters = [
  "delhi",
  "kolkata",
  "mumbai",
  "lucknow",
  "allahabad",
  "ballia",
  "varanasi",
  "ahmdabad",
  "ratlam",
  "bhopal",
  "jamsedpur",
  "dehradun",
  "noida",
  "ghaziyabad",
  "jaunpur",
  "mau",
  "gorkhpur",
  "banglore",
];

let users = []

function enrollUser(name, email) {

let findUser = users.filter((user)=>{
    return user.email == email
})
if (findUser.length == 0){
        let randomExamCenter = Math.floor(Math.random() * examCenters.length);

let tempUser = {
          name: name,
          email: email,
          examCenter: examCenters[randomExamCenter],
        };

        users.push(tempUser);
       document.getElementById('userName').innerText = name
       document.getElementById('userEmail').innerText = email
       document.getElementById('exam').innerText = examCenters[randomExamCenter]

        console.log(users);
        document.getElementById('success').style.display = 'block'
    }
    else{
        alert('user already exist')
    }

}

function makeInputsBlank(){
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
}

function register() {
    document.getElementById('success').style.display = 'none'
    document.getElementById('heading').style.textAlign = 'center'

   let name = document.getElementById('name').value
   let email = document.getElementById('email').value

  enrollUser(name, email);
  makeInputsBlank()
}


