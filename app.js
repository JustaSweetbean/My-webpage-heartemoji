document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all buttons and all content blocks
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    // 2. Add the SAME event listener to ALL buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // A. Remove 'active' class from ALL buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // B. Hide ALL content blocks
            contents.forEach(content => content.classList.remove('visible'));

            // C. Add 'active' class to the clicked button
            button.classList.add('active');

            // D. Get the ID of the target content from the data-target attribute
            const targetId = button.getAttribute('data-target');
            
            // E. Show the specific content block
            const targetContent = document.querySelector(targetId);
            if (targetContent) {
                targetContent.classList.add('visible');
            }
        });
    });
});