const fetchApi = async () => {
  const mainDiv = document.getElementById("main");
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    if (!response.ok) {
      throw new Error("No products found");
    } else {
      const datas = await response.json();
      let html = "";
      for (let data of datas) {
        console.log(data);
        html += `
        <div class="col-md-6 col-lg-3">
          <div class="card mb-4">
            <div class="img-con card-img-top">
                <img src="${data.image}" class="card-img" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">${data.description}</p>
              <p class="card-text" style="text-transform:uppercase; font-size:.8rem; font-weight:bolder">Category: ${data.category}</p>
              <p class="card-text" style="text-transform:uppercase; font-size:.8rem; font-weight:bolder">Price: ₱ ${data.price}</p>
              <p class="card-text"><small class="text-muted">Rating: ${data.rating.rate} <i class="fa-solid fa-star"></i></small></p>
              
            </div>
          </div>
        </div>
        `;
      }
      mainDiv.innerHTML = html;
    }
  } catch (error) {
    console.log(error);
  }
};
fetchApi();
