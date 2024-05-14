// Question no 14
let guest_List: string[] = ["bob", "alice", "john"];
guest_List.forEach((invite) => {
    console.log(`Dear ${invite} would to like to join me to dinner.`);
});

// Question no 15

let unableToAttend: string = "alice";
// replace the guest
guest_List.splice(guest_List.indexOf(unableToAttend), 1 , "albert");

// New Invitation.
guest_List.forEach((invite) => {
    console.log(`Dear ${invite} would to like to join me to dinner`);
    
});

