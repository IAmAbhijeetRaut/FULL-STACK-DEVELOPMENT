// This tutorial explains the Optional Chaining Operator in JavaScript

// Function to return a user object
function getUser(id) {
    if (id <= 0) {
      return null;
    }
  
    // get the user from database
    return {
      id: id,
      username: "admin",
      profile: {
        avatar: "/avatar.png",
        language: "English",
      },
    };
  }
  
  // Demonstrate optional chaining operator
  let user_1 = getUser(1);
  let profile_1 = user_1?.profile;
  console.log("Log_1: ", profile_1);
  
  // Combining with the nullish coalescing operator
  let defaultProfile = { default: "/default.png", language: "English" };
  let user_2 = getUser(2);
  let profile_2 = user_2?.profile ?? defaultProfile;
  console.log("Log_2: ", profile_2);
  
  // Stacking the optional chaining operator
  let user_3 = getUser(-1);
  let avatar_3 = user_3?.profile?.avatar;
  console.log("Log_3: ", avatar_3);
  
  // Using optional chaining operator with function calls
  let file = {
    read() {
      return "file content";
    },
    write(content) {
      console.log(`Writing ${content} to file...`);
      return true;
    },
  };
  let data_4 = file.read();
  console.log("Log_4: ", data_4);
  let compressedData_5 = file.compress?.();
  console.log("Log_5: ", compressedData_5);
  
  /*
  Output:
  Log_1:  {avatar: "/avatar.png", language: "English"}
  Log_2:  {avatar: "/avatar.png", language: "English"}
  Log_3:  undefined
  Log_4:  file content
  Log_5:  undefined
  */
  
  