document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.btn-filter');
    const searchInput = document.getElementById('search-input');
    const storyCards = document.querySelectorAll('.story-card');

    // Fungsi untuk menerapkan filter gabungan (tombol dan pencarian)
    function applyFilters() {
        const activeFilter = document.querySelector('.btn-filter.active').dataset.filter;
        const searchTerm = searchInput.value.toLowerCase();

        storyCards.forEach(card => {
            const cardLevel = card.dataset.level;
            const cardText = card.textContent.toLowerCase();

            // Cek kecocokan level
            const levelMatch = (activeFilter === 'semua' || activeFilter === cardLevel);
            
            // Cek kecocokan teks pencarian
            const searchMatch = cardText.includes(searchTerm);

            // Tampilkan kartu jika cocok dengan KEDUA kondisi
            if (levelMatch && searchMatch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event listener untuk tombol filter
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus kelas 'active' dari tombol lain
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Tambahkan kelas 'active' ke tombol yang diklik
            button.classList.add('active');
            
            applyFilters();
        });
    });

    // Event listener untuk input pencarian
    searchInput.addEventListener('input', applyFilters);
});