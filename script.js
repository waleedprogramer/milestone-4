// Get form and display elements
var form = document.getElementById('resumeForm');
var displayInfo = document.getElementById('displayInfo');
var editButtons = document.querySelectorAll('.edit-btn');
// Form submit event listener
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert('All fields are required!');
        return;
    }
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayPhone').textContent = phone;
    document.getElementById('displayEducation').textContent = education;
    document.getElementById('displayExperience').textContent = experience;
    document.getElementById('displaySkills').textContent = skills;
    displayInfo.classList.remove('hidden');
});
// Add event listeners to edit buttons
editButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var target = button.getAttribute('data-target');
        if (target) {
            var span_1 = document.getElementById("display".concat(capitalizeFirstLetter(target)));
            var currentText = span_1.textContent || '';
            // Create input field
            var input_1 = document.createElement('input');
            input_1.type = 'text';
            input_1.value = currentText;
            input_1.classList.add('edit-input');
            // Replace span with input
            span_1.innerHTML = '';
            span_1.appendChild(input_1);
            // Replace button with save button
            button.textContent = 'Save';
            button.classList.add('save-btn');
            button.classList.remove('edit-btn');
            // Add save functionality
            button.addEventListener('click', function () {
                var newValue = input_1.value;
                span_1.textContent = newValue;
                // Re-add the edit button
                button.textContent = 'Edit';
                button.classList.add('edit-btn');
                button.classList.remove('save-btn');
            }, { once: true });
        }
        else {
            console.error('Data target attribute missing or invalid.');
        }
    });
});
// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
