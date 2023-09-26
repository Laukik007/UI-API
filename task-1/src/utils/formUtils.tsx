// formUtils.ts
function generateUUID() {
    // Generate a random hexadecimal string for each segment of the UUID
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
  
    // Concatenate the segments to form a complete UUID
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  }
  
  export { generateUUID };
  