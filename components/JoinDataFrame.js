const noflo = require('noflo');
const {spawn} = require('child_process');

exports.getComponent = () => {
	const c = new noflo.Component();
	
	c.inPorts.add('df1', {
		datatype : 'all',
	});
	
	c.inPorts.add('df2', {
		datatype : 'all',
	});
	
	c.outPorts.add('out', {
		datatype : 'all',
	});
	
	c.process((input, output) => {
		
		if(!input.hasData('df1')) {
			return;
		}
		
		if(!input.hasData('df2')) {
			return;
		}
		
		var df1 = input.getData('df1');
		var df2 = input.getData('df2');
		var dataToSend;
		
		 // spawn new child process to call the python script
		const python = spawn('python',['JoinDataFrame.py',df1,df2]);
		
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