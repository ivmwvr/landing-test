const scrollToSection = () => {
    const section = document.getElementById('product-section');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
