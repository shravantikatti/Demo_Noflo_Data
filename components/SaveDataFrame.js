const noflo = require('noflo');
const {spawn} = require('child_process');

exports.getComponent = () => {
	const c = new noflo.Component();
	
	c.inPorts.add('in', {
		datatype : 'all',
	});
	
	c.outPorts.add('out', {
		datatype : 'all',
	});
	
	c.process((input, output) => {
		
		if(!input.hasData('in')) {
			return;
		}
		var df = input.getData('in');
		var dataToSend;
		
		 // spawn new child process to call the python script
		const python = spawn('python',['saveDataFrame.py',df]);
		
		 // collect data from script
		
		python.stdout.on('data', function (data) {
		dataToSend = data.toString();
		
		output.send({
			out: dataToSend
		});
		python.stderr.on('data', function (data) {
			console.error(`stderr: ${data}`);
		}); 
	});
		
	output.done();
});
	return c;
}