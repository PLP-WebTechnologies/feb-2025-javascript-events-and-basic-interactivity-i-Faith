document.getElementById('projectForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('projectName').value;
  const desc = document.getElementById('projectDesc').value;
  const image = document.getElementById('projectImage').files[0];

  const reader = new FileReader();

  reader.onload = function() {
    const projects = document.getElementById('projects');

    const card = document.createElement('div');
    card.className = 'project-card';

    const img = document.createElement('img');
    img.src = reader.result;

    const title = document.createElement('h3');
    title.textContent = name;

    const description = document.createElement('p');
    description.textContent = desc;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);

    projects.appendChild(card);

    document.getElementById('projectForm').reset();
  };

  if (image) {
    reader.readAsDataURL(image);
  }
});
