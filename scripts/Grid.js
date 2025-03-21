function RenderGrid(){
  const mainGrid = document.querySelector('.main-grid')

  mainGrid.innerHTML = `
    <div class="inner-grid">
      <div class="very-inner-grid">
        <img src="./images/Rock.jpg" alt="image of the rock">
        <img src="./images/Couch.jpg" alt="Couch image">
      </div>
      <div class="very-inner-grid">
        <img src="./images/Italian-Restaurant.jpg" alt="italian food image">
        <img src="./images/door.jpg" alt="Door image">
      </div>
      <div class="very-inner-grid">
        <img src="./images/jp.jpg" alt="apartment image">
        <img src="./images/Ocean.jpg" alt="Beach with rain image">
      </div>
    </div>
    <div class="watermark-of-yasser">
      <span>© Yasser Dalal</span>
    </div>
  `
}

RenderGrid()