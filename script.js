// Contoh konten ebook dalam bentuk array string
const bookContent = [
    "Chapter 1: Introduction\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Chapter 2: Getting Started\n\nDonec vehicula purus nec velit dictum, et facilisis neque tincidunt.",
    "Chapter 3: Advanced Techniques\n\nMauris sit amet risus ac ligula volutpat placerat.",
    "Chapter 4: Conclusion\n\nVivamus pharetra ex eu nisi suscipit, nec sollicitudin magna luctus."
];

let currentPage = 0;

// Fungsi untuk memperbarui konten halaman ebook
function updateBookContent() {
    const bookText = document.getElementById('book-text');
    bookText.textContent = bookContent[currentPage];
}

// Fungsi untuk menavigasi ke halaman berikutnya
function goToNextPage() {
    if (currentPage < bookContent.length - 1) {
        currentPage++;
        updateBookContent();
    }
}

// Fungsi untuk menavigasi ke halaman sebelumnya
function goToPreviousPage() {
    if (currentPage > 0) {
        currentPage--;
        updateBookContent();
    }
}

// Event listeners untuk tombol navigasi
document.getElementById('nextBtn').addEventListener('click', goToNextPage);
document.getElementById('prevBtn').addEventListener('click', goToPreviousPage);

// Memuat konten awal
updateBookContent();
