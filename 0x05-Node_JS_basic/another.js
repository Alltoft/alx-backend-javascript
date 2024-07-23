process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  console.log(`Received input: ${data}`);
});

process.stdin.on('end', () => {
  console.log('End of input');
});

process.stdin.on('error', (err) => {
  console.error('Error:', err);
});

console.log('Please enter some input:');
