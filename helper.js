function insertTeamMembers(teamMembers) {
  var str = '';
  for(var i = 0; i < teamMembers.length; i++) {
    str +=    `
       <div class="card">
         <div class="card-image">
           <img src="${teamMembers[i].img}" alt="Avatar">
         </div>
         <div class="des">
           <h3>${teamMembers[i].name}</h3>
         </div>
         <div class="role">
           <h3>${teamMembers[i].role}</h3>
         </div>
       </div>
 `
 };
 return str;
}

