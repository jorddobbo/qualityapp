<script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/protonet-jquery.inview/1.1.2/jquery.inview.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/ScrollTrigger.min.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {

  function featureScroll() {
    // Ensure GSAP and ScrollTrigger are loaded
    gsap.registerPlugin(ScrollTrigger);

    const images = document.querySelectorAll('.feature-scroll_image');
    const sections = document.querySelectorAll('.feature-scroll_content');

    // Set the first image to be visible on load
    gsap.set(images[0], { autoAlpha: 1 });

    // Loop through each section to associate it with the corresponding image
    sections.forEach((section, index) => {
      const image = images[index];

      gsap.to(image, {
        autoAlpha: 1, // Fade in the current image
        duration: 1,
        scrollTrigger: {
          //markers: true,
          trigger: section,
          start: "30% 50%", // Start animation when the section reaches the middle of the viewport
          end: "45% 50%", // End animation when the section is leaving the middle
          toggleActions: "play reverse play reverse", // Ensure smooth fading in and out
          scrub: true, // Smooth animation on scroll
        },
      });
    });
  } featureScroll();

  function quoteTabs() {

    $('.case-study_nav-item').on('click', function () {
      $('.case-study_nav-item').removeClass('is-active');

      $(this).addClass('is-active');

      $('.case-study_block-item').removeClass('is-active');

      const index = $(this).index();
      $('.case-study_block-item').eq(index).addClass('is-active');
    });

  } quoteTabs();

  function headerMenu() {

    $('.header').on('hover', '.nav-dd-wrap', fuction() {
      $('.header_bg').addClass('is-active');
    }, {
      $('.header_bg').removeClass('is-active');
    })

  } headerMenu();
  
});

</script>
