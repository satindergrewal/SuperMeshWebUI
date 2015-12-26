module.exports = {
  
  sayHelloInEnglish: function() {
    console.log('HELLO');
  },

  //Start Process by passing executable and its attribute.
  ExecuteProcess: function(prcs,atrbs) {
    var spawn = require('child_process').spawn,
    ExecShellCmd = spawn(prcs, [atrbs]);
    ExecShellCmd.stdout.on('data', function (data) {
      console.log('stdout: ' + data); 
    });
    
    ExecShellCmd.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });
    
    ExecShellCmd.on('close', function (code) {
      console.log('child process exited with code ' + code);
    });
  }


}