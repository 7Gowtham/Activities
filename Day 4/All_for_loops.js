let my_data = {
  "name": "Gowtham J",
  "email": "gowtham123@gmail.com",
  "mobile": "8946037340",
  "title": "Full Stack Developer",
  "experience": [
    {
      "current_company": "CGI",
      "title": "Systems Enginner",
      "location": "Bangalore",
      "years active": "2020 - Present",
      "description":"currently involved in Bell Project, working on PVS servers, Xen servers and Infra servers, performing server builds and image works, performing deployments"
    }
  ],
  "desired role": "Full Stack Developer",
  "skills": [
    "HTML",
    "CSS",
    "Javascript",
    "Node.js",
    "React",
    "Express.js",
    "MongoDB"
  ],
  "projects":[
    {
      "title": "shopping website",
      "scope": "Users can view and search for the dresses"
    }
  ],
  "education": [
    {
      "degree": "B.Tech in IT",
      "institution": "Anna University, MIT Campus",
      "location": "Chennai",
      "cgpa": "6.3",
      "dates": "2014 - 2018"
    },
    {
      "high-school": "12th grade",
      "school_name": "Sri Vijay Vidhyalaya",
      "streams": "Computer Science",
      "marks": "1167",
      "location": "Hosur"
    },
    {
      "secondary-school": "10th grade",
      "school_name": "The Ashok Leyland School",
      "marks": "9.6",
      "location": "Hosur"
    }
  ],
  "certifications": "AZ900",
  "achievements": [
    "Top performer in Citrix team",
    "Bronze Award in APAC GTO, CGI"
  ]
}

// for in loop

for(let k in my_data){
  console.log(k, ":", my_data[k]); 
}

// for of loop - can be used only for Arrays

for(let k of my_data.skills){
  console.log([k]);
}

// forEach loop can be used only for Arrays

my_data.experience.forEach(function(e){
  console.log(e);
});

//for loop

for(let k = 0; k < my_data.education.length; k++){
  let obj = my_data.education[k];
  console.log(obj);
} 
