function countHeroes() {
    const altTexts = Array.from(document.querySelectorAll('.counter-icon')).map(img => img.alt);
    
    const counts = altTexts.reduce((acc, hero) => {
      acc[hero] = (acc[hero] || 0) + 1;
      return acc;
    }, {});
    
    console.log(counts);
  }