window.onload = () => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
};

fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: "test", message: "hello" })
});

fetch('/api/data')
.then(res => res.json())
.then(data => console.log(data));

