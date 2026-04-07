function showPage(pageId) {


document.getElementById('home-page').style.display = 'none';


document.querySelectorAll('.page-content').forEach(function(page) {
    page.classList.remove('active');
});


document.getElementById(pageId).classList.add('active');

}


function showHome() {


document.querySelectorAll('.page-content').forEach(function(page) {
    page.classList.remove('active');
});


document.getElementById('home-page').style.display = 'block';

}


function showPage(pageId) {
document.getElementById('home-page').style.display = 'none';
document.querySelectorAll('.page-content').forEach(function(page) {
page.classList.remove('active');
});
document.getElementById(pageId).classList.add('active');
}


function showHome() {
document.querySelectorAll('.page-content').forEach(function(page) {
page.classList.remove('active');
});
document.getElementById('home-page').style.display = 'block';
}


function handleFileUpload(formId) {
const form = document.getElementById(formId);
const fileInput = form.querySelector('input[type="file"]');
const titleInput = form.querySelector('input[type="text"]');
const preview = form.querySelector('.file-preview');


if (fileInput.files.length > 0 && titleInput.value) {
    const fileName = fileInput.files[0].name;
    preview.innerHTML = `
        <div class="upload-success">
            <strong>${titleInput.value}</strong><br>
            ${fileName} uploaded!
        </div>s
    `;
    form.reset();
    setTimeout(() => {
    alert('THANK YOU FOR UPLOADING!');
    }, 500);
} else {
    alert('Please add title and file!');
}

}