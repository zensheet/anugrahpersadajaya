document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        // Add animation or styling for mobile menu here if needed
    });

    // Tab Switching for Products
    const tabBtns = document.querySelectorAll('.tab-btn');
    const merchandiseGrid = document.getElementById('merchandise-grid');
    const packagingGrid = document.getElementById('packaging-grid');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const target = btn.getAttribute('data-target');
            if (target === 'merchandise') {
                merchandiseGrid.classList.remove('hidden');
                packagingGrid.classList.add('hidden');
            } else {
                merchandiseGrid.classList.add('hidden');
                packagingGrid.classList.remove('hidden');
            }
        });
    });

    // Populate Merchandise Items (Example mapping)
    const merchItems = [
        { img: 'images/page4_img1.jpeg', title: 'Tumbler Set Premium', desc: 'Gift set eksklusif dengan tumbler stainless.' },
        { img: 'images/page4_img2.jpeg', title: 'Custom Notebook', desc: 'Notebook dengan cover kulit custom.' },
        { img: 'images/page4_img3.jpeg', title: 'Stainless Mug', desc: 'Mug stainless steel berkualitas tinggi.' },
        { img: 'images/page4_img4.jpeg', title: 'Business Folder', desc: 'Map/Folder eksklusif untuk dokumen.' },
        { img: 'images/page5_img1.jpeg', title: 'Custom Desktop Frame', desc: 'Bingkai foto meja dengan desain elegan.' },
        { img: 'images/page5_img2.jpeg', title: 'Promotional Pen', desc: 'Pena metal dengan logo grafir.' }
    ];

    const packItems = [
        { img: 'images/page4_img15.jpeg', title: 'Corrugated Box', desc: 'Kardus pengemasan distribusi.' },
        { img: 'images/page4_img16.jpeg', title: 'Paper Bag Custom', desc: 'Tas kertas dengan branding perusahaan.' },
        { img: 'images/page5_img15.jpeg', title: 'Product Insert', desc: 'Bantalan pelindung produk di dalam kemasan.' }
    ];

    const renderItems = (items, grid) => {
        grid.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${item.img}" alt="${item.title}" loading="lazy">
                <div class="product-info">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    };

    renderItems(merchItems, merchandiseGrid);
    renderItems(packItems, packagingGrid);

    // Smooth Scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
