// let noteDisplay;
// if (window.location.pathname === '/notes') {
//     noteDisplay = document.querySelector('.list-group-item');
// }
// // const getNotes = (formData = {}) => {
// //     let queryUrl = '/api/notes?';
  
// //     Object.entries(formData).forEach(([key, value]) => {
// //       queryUrl += `${key}=${value}&`;
// //     });
  
// //     console.log(queryUrl);
  
// //     fetch(queryUrl)
// //     .then(response => {
// //       if (!response.ok) {
// //         return alert('Error: ' + response.statusText);
// //       }
// //       return response.json();
// //     })
// //     .then(notesData => {
// //       console.log(notesData);
// //     //   printResults(notesData);
// //     });
// //   };

// const handleDisplayNoteClick = event => {
//     event.preventDefault();
//     console.log("in here");

// }
// if (window.location.pathname === '/notes') {
// noteDisplay.addEventListener('click', handleDisplayNoteClick);
// }
// // getNotes();