 

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (sidebar.style.right === '0px') {
      sidebar.style.right = '-250px';
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    } else {
      sidebar.style.right = '0px';
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    }
  }


 
 // FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(button => {
  button.addEventListener('click', () => {
    // Find the next sibling which is the answer div
    const answer = button.nextElementSibling;

    // Toggle display of the answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});


  const fileInput = document.getElementById('fileUpload');
  const fileInfo = document.getElementById('fileInfo');
  const fileName = document.getElementById('fileName');
  const removeBtn = document.getElementById('removeFile');

  fileInput.addEventListener('change', function () {
    if (fileInput.files.length > 0) {
      fileName.textContent = fileInput.files[0].name;
      fileInfo.style.display = 'flex';
    } else {
      fileInfo.style.display = 'none';
    }
  });

  removeBtn.addEventListener('click', function () {
    fileInput.value = '';
    fileName.textContent = '';
    fileInfo.style.display = 'none';
  });

 
  function showSuccessBanner() {
  const banner = document.getElementById('form-success-banner');
  banner.classList.remove('hidden');

  setTimeout(() => {
    banner.classList.add('hidden');
  }, 2000);
}


  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault(); // stop normal submit

    const formData = new FormData(form);

    // Send form data using fetch
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      showSuccessBanner();
      form.reset();
    } else {
      alert('Something went wrong. Please try again.');
    }
  });

  function showSuccessBanner() {
    const banner = document.getElementById('form-success-banner');
    banner.classList.remove('hidden');

    setTimeout(() => {
      banner.classList.add('hidden');
    }, 2000);
  }

