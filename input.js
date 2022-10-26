const setupInput = function(conn) {
  let connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  const handleUserInput = function (data) {
    if(data === '\u0003') {
      process.exit();
    }
    switch (data) {
      case "\u0077":
        connection.write("Move: up")
        break;
      case "\u0061":
        connection.write("Move: left")
        break;
      case "\u0073":
        connection.write("Move: down")
        break;
      case "\u0064":
        connection.write("Move: right")
        break;
    
      default:
        break;
    }
  }
  stdin.on("data", (data) => {
    handleUserInput(data);
  });
  return stdin;
}

module.exports = { setupInput };