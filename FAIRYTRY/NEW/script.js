// Slider Navigation
const sliderImages = [
       "asset/foto1.jpg",
       "asset/foto2.jpg",
       "asset/foto3.jpg"
   ];
   let currentImageIndex = 0;
   
   const sliderImg = document.querySelector('.slider-img');
   const prevBtn = document.querySelector('.prev-btn');
   const nextBtn = document.querySelector('.next-btn');
   
   // Update slider image
   function updateSlider() {
       sliderImg.src = sliderImages[currentImageIndex];
   }
   
   // Navigate to previous image
   prevBtn.addEventListener('click', () => {
       currentImageIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
       updateSlider();
   });
   
   // Navigate to next image
   nextBtn.addEventListener('click', () => {
       currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
       updateSlider();
   });

   document.addEventListener("DOMContentLoaded", function() {
       // Menambahkan efek hover pada gambar
       const galleryItems = document.querySelectorAll('.gallery-item img');
       
       galleryItems.forEach(item => {
           item.addEventListener('mouseover', function() {
               item.style.transform = 'scale(1.05)';
               item.style.transition = 'transform 0.3s ease-in-out';
           });
           
           item.addEventListener('mouseout', function() {
               item.style.transform = 'scale(1)';
           });
       });
       
   
       document.addEventListener("DOMContentLoaded", function() {
              // Mendapatkan semua elemen gambar di dalam galeri
              const galleryItems = document.querySelectorAll('.gallery-item img');
          
              galleryItems.forEach(item => {
                  item.addEventListener('click', function() {
                      // Mencari elemen stiker SALE di dalam item galeri yang sama dengan gambar yang diklik
                      const saleSticker = item.closest('.gallery-item').querySelector('.sale-sticker');
                      
                      // Menampilkan stiker SALE
                      saleSticker.style.display = 'block';
          
                      // Opsional: Sembunyikan stiker SALE setelah beberapa detik (misalnya 3 detik)
                      setTimeout(() => {
                          saleSticker.style.display = 'none';
                      }, 3000); // 3000 ms = 3 detik
                  });
              });
          });
          document.addEventListener('DOMContentLoaded', function () {
              // Mendapatkan elemen quantity dan tombol yang ada
              const decreaseBtns = document.querySelectorAll('.decrease-btn');
              const increaseBtns = document.querySelectorAll('.increase-btn');
              const quantityValues = document.querySelectorAll('.quantity-value');
              const subtotalAmount = document.querySelector('.subtotal-amount');
              const price = 70000; // Harga per item
          
              // Fungsi untuk mengupdate subtotal berdasarkan jumlah
              function updateSubtotal() {
                  let total = 0;
                  quantityValues.forEach((quantityValue, index) => {
                      const quantity = parseInt(quantityValue.textContent);
                      total += quantity * price;
                  });
                  subtotalAmount.textContent = total.toLocaleString();
              }
          
              // Mengurangi jumlah
              decreaseBtns.forEach((button, index) => {
                  button.addEventListener('click', function () {
                      const quantityValue = quantityValues[index];
                      let quantity = parseInt(quantityValue.textContent);
                      if (quantity > 1) {
                          quantity--;
                          quantityValue.textContent = quantity;
                          updateSubtotal();
                      }
                  });
              });
          
              // Menambah jumlah
              increaseBtns.forEach((button, index) => {
                  button.addEventListener('click', function () {
                      const quantityValue = quantityValues[index];
                      let quantity = parseInt(quantityValue.textContent);
                      quantity++;
                      quantityValue.textContent = quantity;
                      updateSubtotal();
                  });
              });
          
              // Menutup cart modal
              const closeBtn = document.querySelector('.close-btn');
              closeBtn.addEventListener('click', function () {
                  document.querySelector('.cart-modal').style.display = 'none';
              });
          
              // Initial subtotal calculation
              updateSubtotal();
          });
                    
   // Contact Form Submission
   document.getElementById('contactForm').addEventListener('submit', function (e) {
       e.preventDefault(); // Prevent form from refreshing the page
   
       const name = document.getElementById('name').value.trim();
       const email = document.getElementById('email').value.trim();
       const message = document.getElementById('message').value.trim();
   
       if (name && email && message) {
           alert('Thank you, ' + name + '! Your message has been sent successfully.');
           document.getElementById('contactForm').reset(); // Reset form fields
       } else {
           alert('Please fill out all fields before submitting.');
       }
   });
   
   // Simple interaction example
   document.addEventListener("DOMContentLoaded", () => {
       console.log("Website loaded successfully!");
   });
});