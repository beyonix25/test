 

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

 

 
 // FAQ Toggle
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});



  const form = document.getElementById('quoteForm');
  const banner = document.getElementById('thankYouBanner');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset();
      banner.style.display = 'block';
      setTimeout(() => {
        banner.style.display = 'none';
      }, 5000); // hide after 5 seconds
    } else {
      alert('Something went wrong. Please try again.');
    }
  });

