let contacts = [];

// Function to open the modal for adding/editing contact
function openAddModal() {
  document.getElementById('modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Function to save a new contact or update an existing one
function saveContact() {
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;

  if (name && phone) {
    let contact = {
      name: name,
      phone: phone
    };

    if (editModeIndex !== null) {
      contacts[editModeIndex] = contact;
      editModeIndex = null;
    } else {
      contacts.push(contact);
    }

    closeModal();
    renderContacts();
  } else {
    alert('Please enter both name and phone number.');
  }
}

// Function to render the contacts list
function renderContacts() {
  let contactList = document.getElementById('contact-list');
  contactList.innerHTML = '';

  contacts.forEach((contact, index) => {
    let li = document.createElement('li');
    li.innerHTML = `${contact.name} - ${contact.phone} 
                        <button onclick="editContact(${index})">Edit</button>`;
    contactList.appendChild(li);
  });
}

// Function to edit a contact
let editModeIndex = null;

function editContact(index) {
  editModeIndex = index;
  let contact = contacts[index];
  document.getElementById('name').value = contact.name;
  document.getElementById('phone').value = contact.phone;
  openAddModal(); // Open the modal to edit the contact
}


function deleteallcontacts() {
  contacts = [];
  renderContacts();
}
