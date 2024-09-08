// Get form and display elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const displayInfo = document.getElementById('displayInfo') as HTMLElement;
const editButtons = document.querySelectorAll('.edit-btn') as NodeListOf<HTMLButtonElement>;

// Form submit event listener
form.addEventListener('submit', (event: Event) => {
  event.preventDefault(); 

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  if (!name || !email || !phone || !education || !experience || !skills) {
    alert('All fields are required!');
    return;
  }

  document.getElementById('displayName')!.textContent = name;
  document.getElementById('displayEmail')!.textContent = email;
  document.getElementById('displayPhone')!.textContent = phone;
  document.getElementById('displayEducation')!.textContent = education;
  document.getElementById('displayExperience')!.textContent = experience;
  document.getElementById('displaySkills')!.textContent = skills;

  displayInfo.classList.remove('hidden');
});

// Add event listeners to edit buttons
editButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    
    if (target) {
      const span = document.getElementById(`display${capitalizeFirstLetter(target)}`) as HTMLElement;
      const currentText = span.textContent || '';

      // Create input field
      const input = document.createElement('input');
      input.type = 'text';
      input.value = currentText;
      input.classList.add('edit-input');

      // Replace span with input
      span.innerHTML = '';
      span.appendChild(input);

      // Replace button with save button
      button.textContent = 'Save';
      button.classList.add('save-btn');
      button.classList.remove('edit-btn');

      // Add save functionality
      button.addEventListener('click', () => {
        const newValue = input.value;
        span.textContent = newValue;

        // Re-add the edit button
        button.textContent = 'Edit';
        button.classList.add('edit-btn');
        button.classList.remove('save-btn');
      }, { once: true });
    } else {
      console.error('Data target attribute missing or invalid.');
    }
  });
});

// Helper function to capitalize first letter
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
